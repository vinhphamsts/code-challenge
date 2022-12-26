import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import ChallengeDescription from './Instruction.jsx';
import ChallengeOutput from './CodeOutput.jsx';
import ControlBar from '../common/ControlBar.jsx';
import { CONTROL_INDEX } from '../../constants/common.js';
import Batch from '../TestBatch/Batch';
import TestBatch from '../../data/data.json';

const ControlDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;

const Display = styled.div`
  display: ${({ visible }) => visible ? 'block' : 'none'};
`;

const InstructionAndOutput = ({ batchOrder = 0 }) => {
	const [controlIndex, setControlIndex] = useState(CONTROL_INDEX.INPUT);

	const handleControlIndex = useCallback((index) => {
		setControlIndex(index);
	}, []);

	return (
		<ControlDisplay>
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
				<Batch onChangeTab={handleControlIndex} />
			</Display>
		</ControlDisplay>
	)
}

export default memo(InstructionAndOutput);
