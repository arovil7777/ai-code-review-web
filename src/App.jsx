import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CodeReviewPage from "./pages/CodeReviewPage";
import CodeGeneratePage from "./pages/CodeGeneratePage";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>AI 코드 도우미</h1>
        <nav>
          <Link to="/review" style={{ marginRight: "10px" }}>
            코드 리뷰
          </Link>
          <Link to="/generate">코드 생성</Link>
        </nav>
        <Routes>
          <Route path="/review" element={<CodeReviewPage />} />
          <Route path="/generate" element={<CodeGeneratePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;