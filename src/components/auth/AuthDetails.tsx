import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(authUser);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const handleClick = () => {
    signOut(auth)
      .then(() => console.log("Success"))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {authUser ? (
        <div>
          <p>Sigined as {authUser.email}</p>
          <button onClick={handleClick}>Logout</button>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
