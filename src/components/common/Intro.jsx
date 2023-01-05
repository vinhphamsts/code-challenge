import styled from 'styled-components';
import { MAIN_COLOR, PASSED_COLOR } from '../../styles/colors.js';

const Container = styled.div`
  position: relative;
  font-size: 16px;
  padding: 16px;
  margin-top: 16px;
  color: ${MAIN_COLOR};

  @media screen and (min-width: 767px) {
    font-size: 22px;
  }

  &:before {
    position: absolute;
    content: '';
    width: 5%;
    left: 38px;
    top: 0;
    border-top: 8px solid ${PASSED_COLOR};
  }
`;
export const Intro = () => {
	return (
		<Container>
			<blockquote><i>Challenge yourself on small coding exercises and improve your development skill by training with your peers on
				code challenge that continuously challenge and push your coding practice. Let get started!</i></blockquote>
		</Container>
	);
};