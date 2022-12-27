import { useEffect, useState, memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getBatchSubmission, getLoading } from '../../store/reducer.js';
import { CONTROL_TAB_INDEX, SUBMISSIONS_TIMEOUT } from '../../constants/common.js';
import { ERROR_COLOR, errorTextColor, mainTextColor, PASSED_COLOR } from '../../styles/colors.js';
import TestBatch from '../../data/data.json';

const Error = styled.p`
  ${errorTextColor};
  font-size: 13px;
`;

const Output = styled.p`
  margin: 0;
  ${mainTextColor};
  font-size: 12px;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const Reason = styled(Error)`
  font-weight: normal;
  padding: 6px 12px;
  border: 1px solid ${ERROR_COLOR};
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Expected = styled.span`
  color: ${PASSED_COLOR};
`;

const BatchOutput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  width: 100%;
`;

const Passed = styled.span`
  font-weight: bold;
  color: ${PASSED_COLOR};
`;

const Failed = styled(Passed)`
  color: ${ERROR_COLOR};
`;

const Batch = ({ onChangeTab, batchOrder = 0 }) => {
	const dispatch = useDispatch();
	const batchSubmissionResult = useSelector(state => state.getBatchSubmission.success);
	const batchTokens = useSelector(state => state.batchSubmission.success);
	const [testBatch, setTestBatch] = useState(TestBatch[batchOrder]);

	const resolveTest = batchSubmissionResult?.length > 0 ?
		batchSubmissionResult.map(test => ({
			statusId: test.status.id,
			statusDescription: test.status.description,
			compile_output: test.compile_output,
			stdout: test.stdout,
			stderr: test.stderr,
		}))
		: [];

	useEffect(() => {
		setTestBatch(() => TestBatch[batchOrder]);
	}, [batchOrder]);

	useEffect(() => {
		let timeoutId;
		if (batchTokens) {
			dispatch(getLoading.success(true));
			timeoutId = setTimeout(() => {
				dispatch(getBatchSubmission.start(batchTokens));
				dispatch(getLoading.success(false));
				onChangeTab(CONTROL_TAB_INDEX.TEST);
			}, SUBMISSIONS_TIMEOUT.BATCH);
		}

		return () => clearTimeout(timeoutId);
	}, [batchTokens]);

	const { testSuite } = testBatch;

	return (
		<BatchOutput>
			{resolveTest.map((result, index) => {
				if ([3].includes(result.statusId)) {
					return (
						<Output key={nanoid()}>
							{index + 1}: {testSuite[index].name}: <Passed>Passed</Passed>
						</Output>);
				}
				if ([4].includes(result.statusId)) {
					return (
						<Output key={nanoid()}>
							{index + 1}: {testSuite[index].name}: <Failed>Failed</Failed>
							<Reason>
								<Expected>
									Expected: {testSuite[index].expected}
								</Expected> - Actual: {result.stdout}
							</Reason>
						</Output>);
				}
				if ([1, 2].includes(result.statusId)) {
					return <Error key={nanoid()}>{result.statusDescription}</Error>;
				}
				if ([11].includes(result.statusId)) {
					return <Error key={nanoid()}>{result.stderr}</Error>;
				}
			})}
		</BatchOutput>
	);
};

export default memo(Batch);