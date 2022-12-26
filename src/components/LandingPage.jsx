import styled from 'styled-components';
import InstructionAndOutput from './InstructionAndOutput/InstructionAndOutput.jsx';
import CodeEditor from './Editor/CodeEditor';

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

export const LandingPage = () => (
	<Container>
		<InstructionAndOutput/>
		<CodeEditor />
	</Container>
);