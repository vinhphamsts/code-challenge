import styled from 'styled-components';

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
			<Paragraph>
				{children}
			</Paragraph>
		</Container>
	);
};