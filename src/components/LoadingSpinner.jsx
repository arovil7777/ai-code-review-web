import React from "react";

const LoadingSpinner = () => (
    <div style={{ textAlign: "center", margin: "20px" }}>
        <div style={{ width: "40px", height: "40px", border: "4px solid rgba(0, 0, 0, 0.2)", borderTop: "4px solid #007bff", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}
        </style>
    </div>
);

export default LoadingSpinner;