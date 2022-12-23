import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { LanguagesDropdown } from './LanguagesDropDown.jsx';
import { ChallengeDescription } from './ChallengeDescription.jsx';
import { ChallengeOutput } from './ChallengeOutput.jsx';
import { CodeEditorWindow } from './CodeEditorWindow.jsx';
import { executeCode, fetchLanguages } from '../store/reducer.js';
import { Button } from './common/Button.jsx';
import { ControlBar } from './common/ControlBar';

const Container = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template: 1fr / 0.4fr 0.6fr;
    gap: 16px;
    padding: 16px;
  }
`;

const ControlDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;

const Display = styled.div`
  display: ${({ visible }) => visible ? 'block' : 'none'};
`;

const EditorWrapper = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  justify-content: center;
  gap: 8px;
`;

const Code = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
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

	const [languageName, setLanguageName] = useState('Javascript');
	const [languageId, setLanguageId] = useState(63);
	const [code, setCode] = useState('');
	const [controlIndex, setControlIndex] = useState(0);

	useEffect(() => {
		dispatch(fetchLanguages.start());
	}, []);
	const handleCodeChange = (code) => {
		setCode(code);
	};
	const handleExecuteCode = (evt) => {
		evt.preventDefault();
		const data = {
			source_code: `${code}`, language_id: languageId,
		};

		dispatch(executeCode.start(data));
		setControlIndex(1);
	};

	const handleChangeLanguages = ({ languageId, name }) => {
		setLanguageId(languageId);
		setLanguageName(name);
	};

	const handleControlIndex = (index) => {
		setControlIndex(index);
	};

	const enableExecution = code.length > 10;

	return (<Container>
		<ControlDisplay>
			<ControlBar onSelect={handleControlIndex} active={controlIndex}/>
			<Display visible={controlIndex === 0}>
				<ChallengeDescription>
					Write a function that add all the input number regardless to the number of input. For example: add(1, 2) ->
					3;
					add(1, 2, 3, 4, 5) -> 15; ...
				</ChallengeDescription>
			</Display>
			<Display visible={controlIndex === 1}>
				<ChallengeOutput/>
			</Display>
		</ControlDisplay>
		<EditorWrapper>
			<LanguagesDropdown languageOptions={languages} onSelectChange={handleChangeLanguages}/>
			<Code>
				<CodeEditorWindow onChange={handleCodeChange} languageName={languageName}/>
				<Actions onSubmit={handleExecuteCode}>
					<Button type="submit" label="Execute" disabled={!enableExecution}/>
					<Button type="button" disabled label="Submit"/>
				</Actions>
			</Code>
		</EditorWrapper>
	</Container>);
};