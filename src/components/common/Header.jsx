import styled from 'styled-components';
import { LIGHT_COLOR, MAIN_COLOR } from '../../styles/colors.js';
import Button from './Button';

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
  font-size: 18px;
  font-weight: bold;
  color: ${LIGHT_COLOR};
  display: grid;
	grid-template: auto / 32px auto;
	gap: 8px;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const Heading = styled.p`
  margin: 0;
`

export const Header = () => {
	return (
		<Container>
			<Brand>
				<img src="/code-w.png" alt="Logo Code" width={32}/>
				<Heading>STS Code Challenge</Heading>
			</Brand>
			<Button label="Signin" secondary/>
		</Container>
	);
};