import styled from 'styled-components';
import { LandingPage } from './components/LandingPage.jsx';
import { Loading } from './components/common/Loading.jsx';
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
		<LandingPage/>
		<Loading/>
	</Container>);
}

export default App;
