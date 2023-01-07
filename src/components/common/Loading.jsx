import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { MAIN_COLOR } from '../../styles/colors.js';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(100, 108, 255, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(100, 108, 255, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(100, 108, 255, 0);
  }
`;

const Image = styled.img`
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${MAIN_COLOR};
  border-radius: 50%;
  margin: 40px;
  height: 34px;
  width: 34px;

  box-shadow: 0 0 0 0 ${MAIN_COLOR};
  transform: scale(1);
  animation: ${pulse} 2s infinite linear;
`;

export const Loading = () => {
	const loading = useSelector(state => state.execute.loading);

	return loading ? (<Overlay>
		<Circle>
			<Image src="/code-c.png" alt="Loading ..." width={34}/>

		</Circle>
	</Overlay>) : null;
};