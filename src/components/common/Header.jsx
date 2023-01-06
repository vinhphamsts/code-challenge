import styled from 'styled-components';
import { LIGHT_COLOR, MAIN_COLOR } from '../../styles/colors.js';
// import Button from './Button';

const Container = styled.div`
  display: grid;
  grid-template: auto / auto max-content;
  justify-content: stretch;
  background-color: ${MAIN_COLOR};
  align-items: center;
  padding: 0 12px;

  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }
`;

const Brand = styled.div`
  font-weight: bold;
  color: ${LIGHT_COLOR};
  display: grid;
  grid-template: auto / 32px auto;
  gap: 2px;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
	  gap: 16px;
  }
`;

const Logo = styled.img`
	width: 24px;
	
	@media screen and (min-width: 768px) {
		width: 32px;
	}
`;

const Heading = styled.p`
  margin: 0;
	font-size: 13px;
	
	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
`;

export const Header = () => {
	return (
		<Container>
			<Brand>
				<Logo src="/code-w.png" alt="Logo Code" width={32}/>
				<Heading>Saigontechnology React/Node Team - Code Challenge</Heading>
			</Brand>
			{/*<Button label="Signin" secondary/>*/}
		</Container>
	);
};