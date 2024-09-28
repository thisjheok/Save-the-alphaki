import React from "react";
import { Link } from "react-router-dom";

const SuccessPage: React.FC = () => {
  return (
    <div className="success-page">
      <h2 className="title">성공!</h2>
      <p>올바른 주소를 입력하셨습니다.</p>
      <Link to="/" className="back-button">돌아가기</Link>
    </div>
  );
};

export default SuccessPage;