import styled, { keyframes } from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(0.9);
  }
	50% {
		transform: rotate(180deg) scale(1.1);
	}
  100% {
    transform: rotate(360deg) scale(0.9);
  }
`;

const Image = styled.img`
  animation: ${rotate} 600ms infinite linear;
`

export const Loading = ({ isLoading }) => isLoading ? (<Overlay>
	<Image src="/code.svg" alt="Loading ..."/>
</Overlay>) : null;