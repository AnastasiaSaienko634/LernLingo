import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

// Test SingIn menu
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        setError("Sorry we didn't found your account!");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
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

        <button>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
