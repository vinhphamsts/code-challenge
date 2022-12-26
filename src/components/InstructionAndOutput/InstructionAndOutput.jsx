import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import ChallengeDescription from './Instruction.jsx';
import ChallengeOutput from './CodeOutput.jsx';
import ControlBar from '../common/ControlBar.jsx';
import { CONTROL_INDEX } from '../../constants/common.js';
import Batch from '../TestBatch/Batch';
import TestBatch from '../../data/data.json';
import { BatchControl } from '../TestBatch/BatchControl';

const ControlDisplay = styled.div`
  display: grid;
  grid-template: 32px 32px / 1fr;
  gap: 24px;
`;

const Display = styled.div`
  display: ${({ visible }) => visible ? 'block' : 'none'};
`;

const InstructionAndOutput = ({ batchOrder = 0, onBatchChange }) => {
	const [controlIndex, setControlIndex] = useState(CONTROL_INDEX.INPUT);

	const handleControlIndex = useCallback((index) => {
		setControlIndex(index);
	}, []);

	return (
		<ControlDisplay>
			<BatchControl onBatchChange={onBatchChange}/>
			<ControlBar onSelect={handleControlIndex} active={controlIndex}/>
			<Display visible={controlIndex === CONTROL_INDEX.INPUT}>
				<ChallengeDescription>
					{TestBatch[batchOrder].description}
				</ChallengeDescription>
			</Display>
			<Display visible={controlIndex === CONTROL_INDEX.OUTPUT}>
				<ChallengeOutput onChangeTab={handleControlIndex}/>
			</Display>
			<Display visible={controlIndex === CONTROL_INDEX.TEST}>
				<Batch onChangeTab={handleControlIndex} batchOrder={batchOrder}/>
			</Display>
		</ControlDisplay>
	);
};

export default memo(InstructionAndOutput);
