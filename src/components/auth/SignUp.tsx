import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (copyPassword !== password) {
      setError("Passwords didn't match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <input
          value={copyPassword}
          placeholder="Password"
          onChange={(event) => setCopyPassword(event.target.value)}
          type="password"
        />
        <button>Create</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
