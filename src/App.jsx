import styled from 'styled-components';
import { Landing } from './components/Landing.jsx';
import { Loading } from './components/Loading';
import { Heading } from './styles/typography.js';
import GlobalStyles from './styles/globalStyles.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
	padding: 8px;
	
	@media screen and (min-width: 768px) {
  	padding: 24px;
	}
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
