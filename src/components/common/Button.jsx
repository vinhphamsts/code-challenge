import { memo } from 'react';
import styled from 'styled-components';
import { BASE_TEXT_COLOR, DISABLED_COLOR, MAIN_COLOR } from '../../styles/colors.js';

const Container = styled.button`
  padding: 8px 24px;
  border: ${props => props.secondary ? `1px solid ${MAIN_COLOR}` : 'none'};
  border-radius: 4px;
  min-width: 100px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.secondary ? 'transparent' : MAIN_COLOR};

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: default;
    background-color: ${DISABLED_COLOR};
    color: ${BASE_TEXT_COLOR};
  }
`;
const Button = ({ type = "button", label, onClick, ...rest }) => (
	<Container type={type} onClick={onClick} {...rest}>{label}</Container>);

export default memo(Button);