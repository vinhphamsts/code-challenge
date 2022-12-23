import styled from 'styled-components';
import { Landing } from './components/Landing.jsx';
import { Loading } from './components/Loading';
import { Heading } from './styles/typography.js';
import GlobalStyles from './styles/globalStyles.js';

const Container = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
`;

function App() {

	return (<Container>
		<GlobalStyles/>
		<Heading>CODE CHALLENGE</Heading>
		<Landing/>
		<Loading/>
	</Container>);
}

export default App;
