import React from 'react';
import Select from 'react-select';

export const LanguagesDropdown = ({ onSelectChange, languageOptions }) => {
	const handleSelect = ({ languageId, name }) => {
		onSelectChange({
			languageId, name,
		});
	};
	return (<Select
			className="basic-single"
			placeholder="Select language. Default is javascript"
			options={languageOptions}
			// styles={customStyles}
			defaultValue="javascript"
			onChange={handleSelect}
		/>);
};

