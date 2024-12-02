import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode, placeholder }) => {
    const handleEditorChange = (value) => {
        setCode(value || "");
    };

    return (
        <div style={{ border: "1px solid #ddd", borderRadius: "5px" }}>
            <Editor height="300px" defaultLanguage="javascript" value={code} onChange={handleEditorChange} placeholder={placeholder} options={{ minimap: { enabled: false }, fontSize: 14 }} />
        </div>
    );
};

export default CodeEditor;