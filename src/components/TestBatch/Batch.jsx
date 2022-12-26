import { useEffect, memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getBatchSubmission, getLoading } from '../../store/reducer.js';
import { CONTROL_INDEX, SUBMISSIONS_TIMEOUT } from '../../constants/common.js';
import { errorTextColor, mainTextColor } from '../../styles/colors.js';

const Error = styled.p`
  ${errorTextColor};
  font-size: 13px;
`;

const Output = styled.p`
  ${mainTextColor};
  padding: 8px;
  border-right: 5px;
`;

const BatchOutput = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`
const Batch = ({ onChangeTab }) => {
	const dispatch = useDispatch();
	const batchSubmissionResult = useSelector(state => state.getBatchSubmission.success);
	const batchTokens = useSelector(state => state.batchSubmission.success);

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
		let timeoutId;
		if (batchTokens) {
			dispatch(getLoading.success(true));
			timeoutId = setTimeout(() => {
				dispatch(getBatchSubmission.start(batchTokens))
				dispatch(getLoading.success(false));
				onChangeTab(CONTROL_INDEX.TEST)
			}, SUBMISSIONS_TIMEOUT.BATCH);
		}

		return () => clearTimeout(timeoutId)
	}, [batchTokens])

	return (
		<BatchOutput>
			{resolveTest.map(result => {
				if (result.statusId === 3) {
					return <Output key={nanoid()}>{result.stdout == 'true\n' ? 'Passed' : 'Failed'}</Output>
				}
				if ([1, 2].includes(result.statusId)) {
					return <Error key={nanoid()}>{result.statusDescription}</Error>
				}
				if ([11].includes(result.statusId)) {
					return <Error key={nanoid()}>{result.stderr}</Error>
				}
			})}
		</BatchOutput>
	)
}

export default memo(Batch);