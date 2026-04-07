import { createUserWithEmailAndPassword } from "firebase/auth";
import css from "./Register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import * as Yup from "yup";
import { auth } from "../../../firebase";
import toast from "react-hot-toast";

interface RegisterProp {
  toggelRegister: () => void;
  isOpenRegister: boolean | undefined;
}

interface Formikvalue {
  email: string;
  password: string;
  copyPassword: string;
}
const Register = ({ isOpenRegister, toggelRegister }: RegisterProp) => {
  const [, setEmail] = useState("");
  const [, setError] = useState("");

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Password is too Short!")
      .max(50, "Password is too Long!")
      .required("Password is required"),
    copyPassword: Yup.string()
      .min(2, "Password is too Short!")
      .max(50, "Password is too Long!")
      .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      toggelRegister();
    }
  };

  // Submit Form
  const handleSubmit = async (values: Formikvalue) => {
    const { email, password, copyPassword } = values;

    if (copyPassword !== password) {
      setError("Passwords didn't match!");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (!user) {
        return;
      }
      toast.success("🎉 Welcome to LearnLingo!");
      setEmail(email);
      setError("");
      toggelRegister();
    } catch (err) {
      toast.error("Something went wrong...");
      console.log(err);
    }
  };
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
              initialValues={{ email: "", password: "", copyPassword: "" }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={css.registerForm}>
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
                  <Field
                    className={css.passwordField}
                    type="password"
                    name="copyPassword"
                    placeholder="Repeat Password"
                  />
                  <ErrorMessage
                    name="copyPassword"
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
