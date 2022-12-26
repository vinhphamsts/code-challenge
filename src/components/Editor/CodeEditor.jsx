import { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import LanguagesDropdown from './CodeLanguages.jsx';
import CodeEditorWindow from './CodeWindow.jsx';
import Button from '../common/Button.jsx';
import { executeCode, fetchLanguages, batchSubmission } from '../../store/reducer.js';
import { CODE_LENGTH_ENABLED, COMPILE_TIMEOUT } from '../../constants/common.js';
import TestBatch from '../../data/data.json';
import { generateTestBatch } from './generateTestBatch.js';

const EditorWrapper = styled.div`
  display: grid;
  grid-template: min-content auto / 1fr;
  justify-content: center;
	align-items: flex-start;
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
  width: 100%;
  grid-template: 1fr / 0.5fr 0.5fr;
  gap: 16px;
`;

const CodeEditor = () => {
	const languages = useSelector(state => state.fetchLanguages.success);
	const dispatch = useDispatch();
	const [testBatch, setTestBatch] = useState(TestBatch[0]);

	const [languageName, setLanguageName] = useState('Javascript');
	const [languageId, setLanguageId] = useState(63);
	const [code, setCode] = useState('');

	useEffect(() => {
		dispatch(fetchLanguages.start());
	}, []);

	const handleCodeChange = useCallback((code) => {
		setCode(code);
	}, []);
	const handleExecuteCode = (evt) => {
		evt.preventDefault();
		const data = {
			source_code: `${code}`, language_id: languageId, time: COMPILE_TIMEOUT,
		};

		dispatch(executeCode.start(data));
	};

	const handleSubmitBatch = () => {
		const data = {
			submissions: generateTestBatch({ batch: testBatch, languageId, code }),
		};
		dispatch(batchSubmission.start(data));
	};

	const handleChangeLanguages = useCallback(({ languageId, name }) => {
		setLanguageId(languageId);
		setLanguageName(name);
	}, []);

	const enableExecution = code.length > CODE_LENGTH_ENABLED;

	return (
		<EditorWrapper>
			<LanguagesDropdown languageOptions={languages} onSelectChange={handleChangeLanguages}/>
			<Code>
				<CodeEditorWindow defaultCode={testBatch.initCode} onChange={handleCodeChange} languageName={languageName}/>
				<Actions onSubmit={handleExecuteCode}>
					<Button type="submit" label="Execute" disabled={!enableExecution}/>
					<Button type="button" label="Submit Test" disabled={!enableExecution} onClick={handleSubmitBatch}/>
				</Actions>
			</Code>
		</EditorWrapper>
	);
};

export default memo(CodeEditor);