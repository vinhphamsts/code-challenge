// LanguagesDropdown.js

import React from "react";
import Select from "react-select";

export const LanguagesDropdown = ({ onSelectChange }) => {
    return (
        <Select
            placeholder={`Filter By Category`}
            // options={languageOptions}
            // styles={customStyles}
            // defaultValue={languageOptions[0]}
            onChange={(selectedOption) => onSelectChange(selectedOption)}
        />
    );
};

