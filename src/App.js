import React, { useState } from "react";
import LoginForm from "./components/Login/LoginForm";
import HomePage from "./components/HomePage/HomePage";
const App = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged");
      setUser({ name: details.name, email: details.email });
    } else {
      console.log("Not match");
      setError("Mail or Password is wrong");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <HomePage Logout={Logout} user={user} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default App;
