import React, { useState } from "react";
import axios from "axios";
import CodeEditor from "../components/CodeEditor";
import ResultDisplay from "../components/ResultDisplay";
import LoadingSpinner from "../components/LoadingSpinner";

const CodeReviewPage = () => {
    const [code, setCode] = useState("// 여기에 코드를 입력하세요.");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleReview = async () => {
        setLoading(true);
        setError("");
        setResult("");

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/review-code`, { code });
            setResult(response.data);
        } catch (err) {
            setError("리뷰 요청 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>코드 리뷰</h1>
            <CodeEditor code={code} setCode={setCode} />
            <button onClick={handleReview} style={{ marginTop: "10px", padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
                리뷰 요청
            </button>
            {loading && <LoadingSpinner />}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {result && <ResultDisplay result={result} />}
        </div>
    );
};

export default CodeReviewPage;