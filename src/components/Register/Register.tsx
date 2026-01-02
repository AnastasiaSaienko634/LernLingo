import css from "./Register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import * as Yup from "yup";

interface RegisterProp {
  toggelRegister: () => void;
  isOpenRegister: boolean | undefined;
}

interface Formikvalue {
  name: string;
  email: string;
  password: string;
}
const Register = ({ isOpenRegister, toggelRegister }: RegisterProp) => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too Short!")
      .max(50, "Name is too Long!")
      .required("Name is required"),
    password: Yup.string()
      .min(2, "Password is too Short!")
      .max(50, "Password is too Long!")
      .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values: Formikvalue) => {
    console.log(values.email);
    console.log(values.password);
    toggelRegister();
  };

  // Close the modal when clicking on the modal overlay
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      toggelRegister();
    }
  };

  // Close the modal when pushing Escape
  useEffect(() => {
    const handleKeyboardClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggelRegister();
      }
    };
    document.addEventListener("keydown", handleKeyboardClick);

    return () => {
      document.removeEventListener("keydown", handleKeyboardClick);
    };
  }, [toggelRegister]);
  return (
    <>
      {isOpenRegister && (
        <div className={css.modalOverlay} onClick={handleOverlayClick}>
          <div className={css.modal}>
            <button onClick={toggelRegister} className={css.closeBtn}>
              <IoIosClose className={css.closeIcon} />
            </button>
            <h1 className={css.registerTitle}>Registration</h1>
            <p className={css.registerDescription}>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information
            </p>
            <Formik
              validationSchema={SignupSchema}
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={css.registerForm}>
                  <Field
                    className={css.nameField}
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={css.schemaValidation}
                  />
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
                    type="password"
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
                    className={css.registerSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Loading..." : "Sign Up"}
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

export default Register;
