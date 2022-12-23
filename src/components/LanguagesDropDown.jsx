import React from 'react';
import Select from 'react-select';
import { LIGHT_COLOR, MAIN_COLOR } from '../styles/colors.js';

const customStyles = {
	placeholder: (baseStyles) => ({
		...baseStyles,
		color: MAIN_COLOR,
	}),
	option: (baseStyles, { isDisabled, isSelected }) => ({
		...baseStyles,
		backgroundColor: 'transparent',
		// backgroundColor: isSelected ? 'transparent' : data.color,
		color: MAIN_COLOR,
		cursor: isDisabled ? 'not-allowed' : 'pointer',
		':hover': {
			...baseStyles[':hover'],
			backgroundColor: MAIN_COLOR,
			color: LIGHT_COLOR,
		},
		':active': {
			...baseStyles[':active'],
			backgroundColor: isSelected ? MAIN_COLOR : '#000',
		},
	}),
	singleValue: (baseStyles) => ({
		...baseStyles,
		color: MAIN_COLOR,
		fontWeight: 'bold',
	}),
};

export const LanguagesDropdown = ({ onSelectChange, languageOptions }) => {
	const handleSelect = ({ languageId, name }) => {
		onSelectChange({
			languageId, name,
		});
	};

	return (<Select
		name="language"
		isClearable
		isSearchable
		styles={customStyles}
		onChange={handleSelect}
		defaultValue="javascript"
		options={languageOptions}
		placeholder="Default is javascript"
	/>);
};

