import { memo } from 'react';
import styled from 'styled-components';
import ReactMarkdown  from 'react-markdown';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
`;

const Instruction = ({ children }) => (
	<Container>
		<ReactMarkdown>
			{children}
		</ReactMarkdown>
	</Container>
);

export default memo(Instruction);