import { Formik, Form, Field } from "formik";
import css from "./LogIn.module.css";
import { IoIosClose } from "react-icons/io";

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
  return (
    <>
      {isOpenLogIn && (
        <div className={css.modalOverlay}>
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
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
            >
              <Form className={css.logInForm}>
                <Field
                  className={css.emailField}
                  name="email"
                  placeholder="Email"
                />
                <Field
                  className={css.passwordField}
                  name="password"
                  placeholder="Password"
                />
                <button type="submit" className={css.loginSubmit}>
                  Log In
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
