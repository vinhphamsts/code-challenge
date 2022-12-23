import React, { useState } from 'react';

import Editor from '@monaco-editor/react';

export const CodeEditorWindow = ({onChange, languageLabel, code}) => {
	const [value, setValue] = useState(code || '');

	const handleEditorChange = (value) => {
		setValue(value);
		onChange(value);
	};

	return (
		<Editor
			height="50vh"
			// width={`100%`}
			language={languageLabel || 'javascript'}
			value={value}
			theme={''}
			// defaultValue="// Please do not change the function order" // use for default code template
			onChange={handleEditorChange}
		/>
	);
};
