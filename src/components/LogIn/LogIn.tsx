import css from "./LogIn.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoIosClose } from "react-icons/io";
import { useEffect } from "react";

interface LogInProp {
  toggelLogInMenu: () => void;
  isOpenLogIn: boolean | undefined;
}

interface Formikvalue {
  email: string;
  password: string;
}

const LogIn = ({ toggelLogInMenu, isOpenLogIn }: LogInProp) => {
  const handleSubmit = (values: Formikvalue) => {
    console.log(values.email);
    console.log(values.password);
    toggelLogInMenu();
  };

  // Validation Schema
  const logInSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Password is too Short!")
      .max(50, "Password is too Long!")
      .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  // Close the modal when clicking on modal overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggelLogInMenu();
    }
  };

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
  });
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
                    Log In
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
