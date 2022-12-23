import styled from 'styled-components';

const Container = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 5px;
  min-width: 100px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: default;
  }
`;

export const Button = ({ type, label, onClick, ...rest }) => {
	return (
		<Container type={type} onClick={onClick} {...rest}>{label}</Container>
	);
};