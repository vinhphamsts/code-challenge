import React, { useState } from "react";

import Editor from "@monaco-editor/react";

export const CodeEditorWindow = ({ onChange, languageId, code, theme }) => {
    const [value, setValue] = useState(code || "");

    const handleEditorChange = (value) => {
        setValue(value);
        onChange("code", value);
    };

    return (
        <div className="code-editor">
            <Editor
                height="50vh"
                width={`100%`}
                language={languageId || "javascript"}
                value={value}
                theme={theme}
                defaultValue="// Please do not change the function order"
                onChange={handleEditorChange}
            />
        </div>
    );
};
