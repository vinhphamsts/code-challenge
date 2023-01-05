import styled from 'styled-components';
import { MAIN_COLOR } from '../../styles/colors.js';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  background: ${MAIN_COLOR};
`;

export const Footer = () => {
	return (
		<Container>
			&copy;{new Date().getFullYear()} Saigon Technology - Your success is our mission!
		</Container>
	);
};