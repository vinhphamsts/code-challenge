import { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: 13px;
`;
const Instruction = ({ children }) => (
	<Container>
		<Paragraph>
			{children}
		</Paragraph>
	</Container>
);

export default memo(Instruction);