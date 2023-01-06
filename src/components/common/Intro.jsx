import styled from 'styled-components';
import { LIGHT_COLOR, PASSED_COLOR } from '../../styles/colors.js';

const Container = styled.div`
  position: relative;
  font-size: 16px;
  padding: 16px;
  color: ${LIGHT_COLOR};
  margin-top: 12px;
  text-shadow: 1px 1px 2px 2px;

  &:before {
    position: absolute;
    content: '';
    width: 15%;
    left: 38px;
    top: 8px;
    border-top: 8px solid ${PASSED_COLOR};
  }

  @media screen and (min-width: 768px) {
    max-width: 80%;
    font-size: 18px;
    margin-top: 0;

    &:before {
      width: 5%;
    }
  }
`;

export const Intro = () => {
	return (
		<Container>
			<blockquote>
				<i>"Challenge yourself on small coding exercises and improve your development skill by training with
				your peers on code challenge that continuously challenge and push your coding practice. Let get started!"</i>
			</blockquote>
		</Container>
	);
};