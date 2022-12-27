import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

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

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${rotate} 500ms infinite linear;
`

export const Loading = () => {
	const loading = useSelector(state => state.getLoading.success.value);

	return loading ? (<Overlay>
		<Image src="/code.svg" alt="Loading ..."/>
	</Overlay>) : null;
}