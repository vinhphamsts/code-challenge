import { useEffect, memo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getASubmission, getLoading } from '../../store/reducer.js';
import { errorTextColor, mainTextColor } from '../../styles/colors.js';
import { CONTROL_TAB_INDEX, SUBMISSIONS_TIMEOUT } from '../../constants/common.js';

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

const CodeOutput = ({ onChangeTab }) => {
	const dispatch = useDispatch();
	const execution = useSelector(state => state.executionCode.success);
	const aSubmissionResult = useSelector(state => state.getASubmission);

	const { status, compile_output, stderr, stdout, error } = aSubmissionResult.success;

	useEffect(() => {
		let timeoutId;

		if (execution.token) {
			dispatch(getLoading.success(true));
			timeoutId = setTimeout(() => {
				dispatch(getASubmission.start(execution.token));
				dispatch(getLoading.success(false));
				onChangeTab(CONTROL_TAB_INDEX.OUTPUT);
			}, SUBMISSIONS_TIMEOUT.SINGLE);
		}

		return () => clearTimeout(timeoutId);
	}, [execution.token]);

	const errorMessage = compile_output || stderr || error;

	return (
		<Container>
			{status?.id !== 3 && <Error>{errorMessage}</Error>}
			{status?.id === 3 && (<Output>{stdout}</Output>)}
		</Container>
	);
};

export default memo(CodeOutput);