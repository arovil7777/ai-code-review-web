import React from "react";

const ResultDisplay = ({ result }) => {
    return (
        <div>
            <h3>결과:</h3>
            <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                {result || "결과가 여기에 표시됩니다."}
            </pre>
        </div>
    );
};

export default ResultDisplay;