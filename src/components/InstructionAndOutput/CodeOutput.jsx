import { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ERROR_COLOR, PASSED_COLOR } from '../../styles/colors.js';
import { CONTROL_TAB_INDEX } from '../../constants/common.js';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Error = styled.p`
  color: ${ERROR_COLOR};
  font-size: 13px;
`;

const Output = styled.p`
  color: ${PASSED_COLOR};
  padding: 8px;
  border-right: 5px;
`;

const CodeOutput = ({ onChangeTab }) => {
	const aSubmissionResult = useSelector(state => state.getASubmission);

	const { status, compile_output, stderr, stdout, error } = aSubmissionResult.success;
	const errorMessage = compile_output || stderr || error;

	useEffect(() => {
		onChangeTab(CONTROL_TAB_INDEX.OUTPUT);
	}, [aSubmissionResult.success]);

	return (
		<Container data-testid="Execution Output">
			{status?.id !== 3 && <Error>{errorMessage}</Error>}
			{status?.id === 3 && (<Output>{stdout}</Output>)}
		</Container>
	);
};

export default memo(CodeOutput);