import styled from 'styled-components';
import { LandingPage } from './components/LandingPage.jsx';
import { Loading } from './components/common/Loading.jsx';
import GlobalStyles from './styles/globalStyles.js';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template: 48px auto 26px / 1fr;
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
			<Header />
			<Container>
				<GlobalStyles/>
				<LandingPage/>
				<Loading/>
			</Container>
			<Footer/>
		</AppWrapper>
	);
}

export default App;
