import React, { useState } from "react";
import "./styles.css";
import Login from "./components/Login";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [mouseOver, setMousedOver] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPasswordMatch(true);

    if (!name) {
      alert("Invalid Name");
    } else if (!surname) {
      alert("Invalid Surname");
    } else if (!email || !email.includes("@") || !email.includes(".")) {
      alert("Invalid Email");
    } else if (!password) {
      alert("Invalid Password");
    } else if (password !== confirm_password) {
      setPasswordMatch(false);
      setConfirmPassword("");
    } else {
      alert("Successfully registered!");
    }
  };

  return (
    <div className="container">
      <p className="RegInfo">Enter Your Details To Register</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!passwordMatch && <p>Passwords do not match.</p>}

        <button
          type="submit"
          style={{ backgroundColor: mouseOver ? "black" : "white" }}
          onMouseOver={() => {
            setMousedOver(true);
          }}
          onMouseOut={() => {
            setMousedOver(false);
          }}
        >
          Register{" "}
        </button>
      </form>
    </div>
    // <Login />;
  );
}

export default App;

import React, { useState } from "react";
// import "./styles.css";

function Login() {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}

export default Login;
