import { memo } from 'react';
import Select from 'react-select';
import { LIGHT_COLOR, MAIN_COLOR } from '../../styles/colors.js';

const customStyles = {
	placeholder: (baseStyles) => ({
		...baseStyles, color: MAIN_COLOR,
	}), option: (baseStyles, { isDisabled }) => ({
		...baseStyles, backgroundColor: 'transparent',
		color: MAIN_COLOR, cursor: isDisabled ? 'not-allowed' : 'pointer', ':hover': {
			...baseStyles[':hover'], backgroundColor: MAIN_COLOR, color: LIGHT_COLOR,
		},
	}), singleValue: (baseStyles) => ({
		...baseStyles, color: MAIN_COLOR, fontWeight: 'bold',
	}),
};

const CodeLanguages = ({ onSelectChange, languageOptions }) => {
	const handleSelect = ({ languageId, name }) => {
		onSelectChange({
			languageId, name,
		});
	};

	return (
		<Select
			name="language"
			isSearchable
			styles={customStyles}
			onChange={handleSelect}
			defaultValue="javascript"
			options={languageOptions}
			placeholder="Default is javascript"
		/>
	);
};

export default memo(CodeLanguages);
