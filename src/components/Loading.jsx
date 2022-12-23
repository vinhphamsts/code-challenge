import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Loading = ({ isLoading }) => isLoading ? (<Overlay>
	<img src="/code.png" alt="Loading ..."/>
</Overlay>) : null;