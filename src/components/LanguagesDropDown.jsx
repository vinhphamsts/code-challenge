import React from 'react';
import Select from 'react-select';

export const LanguagesDropdown = ({onSelectChange, languageOptions}) => {
	return (
		<Select
			className="basic-single"
			placeholder="Select language. Default is javascript"
			options={languageOptions}
			// styles={customStyles}
			defaultValue="javascript"
			onChange={(selectedOption) => onSelectChange(selectedOption.languageId, selectedOption.label)}
		/>
	);
};

