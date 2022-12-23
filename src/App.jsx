import styled from 'styled-components';
import { Landing } from './components/Landing.jsx';
import { Loading } from './components/Loading';
import { mainTextColor } from './styles/colors.js';
import GlobalStyles from './styles/globalStyles.js';

const Container = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h3`
  ${mainTextColor}
`;

function App() {

	return (
		<Container>
			<GlobalStyles/>
			<Heading>CODE CHALLENGE</Heading>
			<Landing/>
			<Loading isLoading={false}/>
		</Container>
	);
}

export default App;
