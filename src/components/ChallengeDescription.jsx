import styled from 'styled-components';
import { Title } from '../styles/typography.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
`;

const Paragraph = styled.p`
  font-size: 13px;
`;
export const ChallengeDescription = ({ children }) => {
	return (
		<Container>
			<Title>Instruction</Title>
			<Paragraph>
				{children}
			</Paragraph>
		</Container>
	);
};