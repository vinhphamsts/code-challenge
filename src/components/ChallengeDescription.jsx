import styled from 'styled-components';
import { LIGHT_COLOR } from '../styles/colors.js';

const Container = styled.div`
	display: flex;
	width: 100%;
	border: 1px solid ${LIGHT_COLOR};
	border-radius: 4px;
`;
export const ChallengeDescription = ({ description }) => {
	return (
		<Container>{description}</Container>
	);
}