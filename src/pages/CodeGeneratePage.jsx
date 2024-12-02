import React, { useState } from "react";
import axios from "axios";
import CodeEditor from "../components/CodeEditor";
import ResultDisplay from "../components/ResultDisplay";
import LoadingSpinner from "../components/LoadingSpinner";

const CodeGeneratePage = () => {
    const [prompt, setPrompt] = useState("코드 생성에 필요한 설명을 입력하세요.");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGenerate = async () => {
        setLoading(true);
        setError("");
        setResult("");

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/generate-code`, { prompt });
            setResult(response.data);
        } catch (err) {
            setError("코드 생성 요청 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>코드 생성</h1>
            <CodeEditor code={prompt} setCode={setPrompt} placeholder="설명을 입력하세요" />
            <button onClick={handleGenerate} style={{ marginTop: "10px", padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
                생성 요청
            </button>
            {loading && <LoadingSpinner />}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {result && <ResultDisplay result={result} />}
        </div>
    );
};

export default CodeGeneratePage;