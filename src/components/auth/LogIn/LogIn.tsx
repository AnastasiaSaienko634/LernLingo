import css from "./LogIn.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import toast from "react-hot-toast";

interface LogInProp {
  toggelLogInMenu: () => void;
  isOpenLogIn: boolean | undefined;
}

interface FormikValue {
  email: string;
  password: string;
}

// LogIn Form
const LogIn = ({ toggelLogInMenu, isOpenLogIn }: LogInProp) => {
  // User Information + Error
  const [, setEmail] = useState("");
  const [, setError] = useState("");

  // Validation Schema
  const logInSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Password is too Short!")
      .max(50, "Password is too Long!")
      .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  // Modal Window close per Overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggelLogInMenu();
    }
  };

  // Modal Window close per Keyboard
  useEffect(() => {
    const handleKeyboardClick = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        toggelLogInMenu();
      }
    };

    document.addEventListener("keydown", handleKeyboardClick);

    return () => {
      document.removeEventListener("keydown", handleKeyboardClick);
    };
  }, [toggelLogInMenu]);

  // Submit Form
  const handleSubmit = async (values: FormikValue) => {
    const { email, password } = values;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      toggelLogInMenu();
    } catch (error) {
      console.log(error);
      toast.error("Oh Sorry...something went wrong!");
    }
  };
  return (
    <>
      {isOpenLogIn && (
        <div className={css.modalOverlay} onClick={handleOverlayClick}>
          <div className={css.modal}>
            <button onClick={toggelLogInMenu} className={css.closeBtn}>
              <IoIosClose className={css.closeIcon} />
            </button>
            <h1 className={css.logInTitle}>Log In</h1>
            <p className={css.loginDescription}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </p>
            <Formik
              validationSchema={logInSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={css.logInForm}>
                  <Field
                    className={css.emailField}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.schemaValidation}
                  />
                  <Field
                    className={css.passwordField}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={css.schemaValidation}
                  />
                  <button
                    type="submit"
                    className={css.loginSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <p>Loading....</p> : <p> Log In</p>}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
