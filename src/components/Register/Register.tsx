import css from "./Register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoIosClose } from "react-icons/io";
import * as Yup from "yup";

interface RegisterProp {
  toggelRegister: () => void;
  isOpenRegister: boolean | undefined;
}

interface Formikvalue {
  email: string;
  password: string;
}
const Register = ({ isOpenRegister, toggelRegister }: RegisterProp) => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleSubmit = (values: Formikvalue) => {
    console.log(values.email);
    console.log(values.password);
    toggelRegister();
  };
  return (
    <>
      {isOpenRegister && (
        <div className={css.modalOverlay}>
          <div className={css.modal}>
            <button onClick={toggelRegister} className={css.closeBtn}>
              <IoIosClose className={css.closeIcon} />
            </button>
            <h1 className={css.logInTitle}>Registration</h1>
            <p className={css.loginDescription}>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information
            </p>
            <Formik
              validationSchema={SignupSchema}
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={handleSubmit}
            >
              <Form className={css.logInForm}>
                <Field
                  className={css.emailField}
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
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.schemaValidation}
                />
                <button type="submit" className={css.loginSubmit}>
                  Sign Up
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
