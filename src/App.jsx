import styled from 'styled-components';
import { LandingPage } from './components/LandingPage.jsx';
import { Loading } from './components/common/Loading.jsx';
import { Heading } from './styles/typography.js';
import GlobalStyles from './styles/globalStyles.js';
import { Footer } from './components/common/Footer';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template: auto 26px / 1fr;
  align-items: stretch;
`;

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

	return (
		<AppWrapper>
			<Container>
				<GlobalStyles/>
				<Heading>CODE CHALLENGE</Heading>
				<LandingPage/>
				<Loading/>
			</Container>
			<Footer/>
		</AppWrapper>
	);
}

export default App;
