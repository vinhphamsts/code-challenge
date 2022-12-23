import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getASubmission, getLoading } from '../store/reducer.js';
import { errorTextColor, mainTextColor } from '../styles/colors.js';

const Container = styled.div`
  display: flex;
  width: 100%;
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
	const submissionVal = useSelector(state => state.getASubmission);
	const { status, compile_output, stderr, stdout, error } = submissionVal.success;

	useEffect(() => {
		let timeoutId;

		if (execution.token) {
			dispatch(getLoading.success(true));
			timeoutId = setTimeout(() => {
				dispatch(getASubmission.start(execution.token));
				dispatch(getLoading.success(false))
			}, 1000);
		}

		return () => clearTimeout(timeoutId);
	}, [execution.token]);

	const errorMessage = compile_output || stderr || error;

	return (<Container>
		{status?.id !== 3 && <Error>{errorMessage}</Error>}
		{status?.id === 3 && (<Output>{stdout}</Output>)}
		</Container>);
};
