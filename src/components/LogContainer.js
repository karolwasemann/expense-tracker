import React from "react";
import { Nav, Alert } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./LogContainer.scss";

export default function LogContainer() {
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  const cutEmail = () => {
    const index = currentUser.email.split("").indexOf("@");
    const login = currentUser.email.split("").slice(0, index);
    return login;
  };
  cutEmail();
  return (
    <div className="log">
      <Nav variant="tabs" className="justify-content-around">
        {error && <Alert>{error}</Alert>}
        <Nav.Item>
          <Nav.Link href="/login" style={{ color: "#212121" }}>
            Log In
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link>{currentUser ? cutEmail() : "not"}</Nav.Link>
        </Nav.Item> */}
      </Nav>
    </div>
  );
}
