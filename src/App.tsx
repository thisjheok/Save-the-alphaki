// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavigationForm from "./pages/NavigationForm";
import SuccessPage from "./pages/SuccessPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<NavigationForm />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;