import { memo, useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { CONTROL_TAB_INDEX } from '../../constants/common.js';
import { ERROR_COLOR, MAIN_COLOR, PASSED_COLOR } from '../../styles/colors.js';
import TestBatch from '../../data/data.json';

const BatchOutput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  display: grid;
  grid-template: auto / 0.5fr 0.5fr;
  justify-content: center;
  justify-items: center;
  font-size: 13px;
  padding: 5px;
  border-bottom: 2px solid ${MAIN_COLOR};
`;

const Error = styled.p`
  color: ${ERROR_COLOR};
  font-size: 13px;
`;

const Output = styled.div`
  margin: 8px;
  color: ${MAIN_COLOR};
  font-size: 12px;
`;

const Reason = styled.p`
  margin: 8px 0;
  padding: 6px 12px;
  border: 1px solid ${ERROR_COLOR};
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Passed = styled.span`
  font-weight: bold;
  color: ${PASSED_COLOR};
`;

const Failed = styled(Passed)`
  color: ${ERROR_COLOR};
`;

const Batch = ({ onChangeTab, batchOrder = 0 }) => {
	const batchResult = useSelector(state => state.execute.testSubmission);
	const [testBatch, setTestBatch] = useState(TestBatch[batchOrder]);

	useEffect(() => {
		setTestBatch(() => TestBatch[batchOrder]);
	}, [batchOrder]);

	useEffect(() => {
		if (batchResult && batchResult.length > 0) {
			onChangeTab(CONTROL_TAB_INDEX.TEST);
		}
	}, [batchResult]);

	const resolvedTests = batchResult?.length > 0 ? batchResult.map(test => ({
		statusId: test.status.id,
		statusDescription: test.status.description,
		compile_output: test.compile_output,
		stdout: test.stdout,
		stderr: test.stderr,
	})) : [];

	const validTests = batchResult && batchResult.length > 0;
	const { testSuite } = testBatch;
	const noTestPass = validTests ? resolvedTests.filter(result => result.statusId === 3).length : 0;
	const noTestFail = validTests ? testSuite.length - noTestPass : 0;

	return (<BatchOutput data-testid="Batch-Tests">
		{validTests && (<Title>
			<Passed>Passed: {noTestPass}</Passed> <Failed>Failed: {noTestFail}</Failed>
		</Title>)}
		{resolvedTests.map((result, index) => {
			const test = testSuite[index];

			if ([3].includes(result.statusId)) {
				return (<Output key={nanoid()}>
					{index + 1}: {test.name}: <Passed>Passed</Passed>
				</Output>);
			}
			if ([4].includes(result.statusId)) {
				return (<Output key={nanoid()}>
					{index + 1}: {test.name}: <Failed>Failed</Failed>
					<Reason>
						<Passed>
							Expected: {test.expected}
						</Passed>{' - '}
						<Failed>Actual: {result.stdout}</Failed>
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
	</BatchOutput>);
};

export default memo(Batch);