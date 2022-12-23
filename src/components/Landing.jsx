import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { LanguagesDropdown } from './LanguagesDropDown.jsx';
import { ChallengeDescription } from './ChallengeDescription.jsx';
import { ChallengeOutput } from './ChallengeOutput.jsx';
import { CodeEditorWindow } from './CodeEditorWindow.jsx';
import { executeCode, fetchLanguages } from '../store/reducer.js';
import { Button } from './common/Button.jsx';
import { LIGHT_COLOR } from '../styles/colors.js';

const Container = styled.div`
  display: grid;
  grid-template: 1fr / 0.3fr 0.4fr 0.3fr;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${LIGHT_COLOR};
`;

const EditorWrapper = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  gap: 8px;
`;

const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

const Actions = styled.form`
  display: grid;
  grid-template: 1fr / 0.5fr 0.5fr;
  gap: 16px;
`;
export const Landing = () => {
	const languages = useSelector(state => state.fetchLanguages.success);
	const dispatch = useDispatch();

	const [languageLabel, setLanguageLabel] = useState('javascript');
	const [languageId, setLanguageId] = useState(63);
	const [code, setCode] = useState('');

	useEffect(() => {
		dispatch(fetchLanguages.start());
	}, []);
	const handleCodeChange = (code) => {
		setCode(code);
	};
	const handleExecuteCode = (evt) => {
		evt.preventDefault();
		const data = {
			source_code: `${code}`,
			language_id: languageId,
		};

		dispatch(executeCode.start(data))
	};

	const handleChangeLanguages = (id, label) => {
		setLanguageId(id);
		setLanguageLabel(label);
	};

	return (
		<Container>
			<ChallengeDescription description="Write add function"/>
			<EditorWrapper>
				<LanguagesDropdown languageOptions={languages} onSelectChange={handleChangeLanguages}/>
				<Code>
					<CodeEditorWindow onChange={handleCodeChange} languageLabel={languageLabel}/>
					<Actions onSubmit={handleExecuteCode}>
						<Button type="submit" label="Execute"/>
						<Button type="button" disabled label="Submit"/>
					</Actions>
				</Code>
			</EditorWrapper>
			<ChallengeOutput/>
		</Container>
	);
};