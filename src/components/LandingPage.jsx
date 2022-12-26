import { useState, useCallback } from 'react';
import styled from 'styled-components';
import InstructionAndOutput from './InstructionAndOutput/InstructionAndOutput.jsx';
import CodeEditor from './Editor/CodeEditor';
import TestBatch from '../data/data.json';

const Container = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template: 1fr / 0.4fr 0.6fr;
    gap: 16px;
    padding: 16px;
  }
`;

export const LandingPage = () => {
	const batchLen = TestBatch.length;
	const [batchOrder, setBatchOrder] = useState(0);

	const handleBatchChange = useCallback(value => () => {
		setBatchOrder(order => {
			if (value < 0 && order === 0 || value > 0 && order === batchLen - 1) {
				return order;
			}

			return order + value;
		});
	}, []);

	return (
		<Container>
			<InstructionAndOutput batchOrder={batchOrder} onBatchChange={handleBatchChange}/>
			<CodeEditor batchOrder={batchOrder}/>
		</Container>
	);
};