// NavigationForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigationForm: React.FC = () => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleButtonClick = () => {
    if (address === "알카동 AX건물 1호") {
      navigate("/success");
    } else {
      alert("올바르지 않은 주소에요 ㅠㅠ");
    }
  };

  return (
    <>
    <img src='logo_nukki_2.png' className="main-image"/>
      <h2 className="title">
        알파카이<br />네비게이션
      </h2>
      <input
        type="text"
        placeholder="00동 00건물 00호"
        value={address}
        onChange={handleInputChange}
        className="input-field"
      />
      <button onClick={handleButtonClick} className="submit-button">
        출발!
      </button>
    </>
  );
};

export default NavigationForm;