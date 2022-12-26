import { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import ChallengeDescription from './Instruction.jsx';
import ChallengeOutput from './CodeOutput.jsx';
import ControlBar from '../common/ControlBar.jsx';
import { CONTROL_TAB_INDEX } from '../../constants/common.js';
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
	const [controlIndex, setControlTabIndex] = useState(CONTROL_TAB_INDEX.INSTRUCTIONS);

	const handleControlTabChange = useCallback((index) => {
		setControlTabIndex(index);
	}, []);

	useEffect(() => {
		setControlTabIndex(CONTROL_TAB_INDEX.INSTRUCTIONS)
	}, [batchOrder]);

	return (
		<ControlDisplay>
			<BatchControl onBatchChange={onBatchChange}/>
			<ControlBar onSelect={handleControlTabChange} active={controlIndex}/>
			<Display visible={controlIndex === CONTROL_TAB_INDEX.INSTRUCTIONS}>
				<ChallengeDescription>
					{TestBatch[batchOrder].description}
				</ChallengeDescription>
			</Display>
			<Display visible={controlIndex === CONTROL_TAB_INDEX.OUTPUT}>
				<ChallengeOutput onChangeTab={handleControlTabChange}/>
			</Display>
			<Display visible={controlIndex === CONTROL_TAB_INDEX.TEST}>
				<Batch onChangeTab={handleControlTabChange} batchOrder={batchOrder}/>
			</Display>
		</ControlDisplay>
	);
};

export default memo(InstructionAndOutput);
