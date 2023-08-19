import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AdminPanel from "./components/AdminPanel";
import BlogList from "./components/BlogList";
import ContentWriterPanel from "./components/ContentWriterPanel";
import LoginForm from "./components/LoginForm";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setUserType(type);
  };

  const isAdmin = userType === "admin";

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/home" element={<Home />} />{" "}
        {/* This route will match your homepage */}
        {isAdmin && <Route path="/admin" element={<AdminPanel />} />}
        {isAdmin && <Route path="/admin/blogs" element={<BlogList />} />}
        {userType === "writer" && (
          <Route path="/content-writer" element={<ContentWriterPanel />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
