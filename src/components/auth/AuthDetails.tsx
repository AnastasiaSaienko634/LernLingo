import css from "./AuthDetails.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
// firebase
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
// Icon
import { MdOutlineExitToApp } from "react-icons/md";

// AuthDetails
const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  // Logout
  const handleClick = () => {
    signOut(auth)
      .then(() => console.log("Success"))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {authUser && (
        <div className={css.logOutConatiner}>
          <button onClick={handleClick} className={css.logOutButton}>
            <MdOutlineExitToApp className={css.iconLogOut} /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthDetails;
