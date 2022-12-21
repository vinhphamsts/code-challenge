import { LanguagesDropdown } from './LanguagesDropDown.jsx';
import { CodeEditorWindow } from './CodeEditorWindow.jsx';

export const Landing = () => {
  const handleChange = (code, value) => {
    console.log('this is code::', value)
  }
	return (
		<div>
			<LanguagesDropdown/>
			<CodeEditorWindow onChange={handleChange}/>
		</div>
	);
};