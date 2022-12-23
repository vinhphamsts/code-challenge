import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getASubmission } from '../store/reducer.js';
import { errorTextColor, MAIN_COLOR, mainTextColor } from '../styles/colors.js';

const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${MAIN_COLOR};
	border-radius: 4px;
`;

const Error = styled.p`
  ${errorTextColor};
  font-size: 13px;
`;

const Output = styled.p`
  ${mainTextColor};
  padding: 8px;
  border-right: 5px;
`;
export const ChallengeOutput = () => {
	const dispatch = useDispatch();
	const execution = useSelector(state => state.executionCode.success);
	const submissionVal = useSelector(state => state.getASubmission.success);

	useEffect(() => {
		let timeoutId;

		if (execution.token) {
			timeoutId = setTimeout(() => {
				dispatch(getASubmission.start(execution.token));
			}, 2000);
		}

		return () => clearTimeout(timeoutId);
	}, [execution.token]);
	const errorMessage = submissionVal.compile_output || submissionVal.stderr;
	return (
		<Container>
			{errorMessage ? (
				<Error>{errorMessage}</Error>
			) : (
				<Output>Output: {submissionVal.stdout}</Output>
			)}
		</Container>
	);
};