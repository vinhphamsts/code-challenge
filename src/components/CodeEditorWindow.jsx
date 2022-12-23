import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';
import { MAIN_COLOR } from '../styles/colors.js';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 99%;
  border: 1px solid ${MAIN_COLOR};
  border-radius: 4px;
  overflow: hidden;
  padding: 4px 0;
`;
export const CodeEditorWindow = ({onChange, languageName, code}) => {
	const [value, setValue] = useState(code || '');

	const handleEditorChange = (value) => {
		setValue(value);
		onChange(value);
	};

	return (
		<Container>
			<Editor
				height={`80vh`}
				defaultLanguage={'javascript'}
				language={languageName}
				value={value}
				theme={'vs-dark'}
				onChange={handleEditorChange}
				options={{
					cursorWidth: 5,
					minimap: {enabled: false},
				}}
			/>
		</Container>
	);
};
