import styled from 'styled-components';
import { DISABLED_COLOR, MAIN_COLOR } from '../../styles/colors.js';

const Container = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 5px;
  min-width: 100px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
	background-color: ${MAIN_COLOR};

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: default;
	  background-color: ${DISABLED_COLOR};
	  color: #000000;
  }
`;

export const Button = ({ type, label, onClick, ...rest }) => {
	return (
		<Container type={type} onClick={onClick} {...rest}>{label}</Container>
	);
};