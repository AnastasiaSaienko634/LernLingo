import { Formik, Form, Field } from "formik";
import css from "./BookingForm.module.css";
import { IoIosClose } from "react-icons/io";

type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

type Teacher = {
  id: number;
  avatar_url: string;
  conditions: string;
  experience: string;
  languages: string[];
  lesson_info: string;
  lessons_done: number;
  levels: string[];
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
  surname: string;
};

type Props = {
  teacher: Teacher;
  openBookingForm: (value: boolean) => void;
};

const BookingForm = ({ teacher, openBookingForm }: Props) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      openBookingForm(false);
    }
  };
  return (
    <div className={css.overlayForm} onClick={handleOverlayClick}>
      <div className={css.containerForm}>
        <button className={css.closeBtn} onClick={() => openBookingForm(false)}>
          <IoIosClose className={css.closeIcon} />
        </button>
        <h1 className={css.titleForm}>Book trial lesson</h1>
        <p className={css.descriptionForm}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>

        <div className={css.containerTeacher}>
          <img
            className={css.teacherPhoto}
            src={teacher.avatar_url}
            alt="Teacher Photo"
          />
          <div className={css.containerDescrip}>
            <p className={css.titleTeacher}>Your teacher</p>
            <h2 className={css.teacherName}>Jane Smith</h2>
          </div>
        </div>
        <Formik
          initialValues={{
            reason: "career",
            fullName: "",
            email: "",
            phone: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <h3 className={css.titleFormTeach}>
              What is your main reason for learning English?
            </h3>
            <div className={css.radioList}>
              <label>
                <Field type="radio" name="reason" value="career" />
                Career and business
              </label>

              <label>
                <Field type="radio" name="reason" value="kids" />
                Lesson for kids
              </label>

              <label>
                <Field type="radio" name="reason" value="abroad" />
                Living abroad
              </label>

              <label>
                <Field type="radio" name="reason" value="exams" />
                Exams and coursework
              </label>

              <label>
                <Field type="radio" name="reason" value="hobby" />
                Culture, travel or hobby
              </label>
            </div>

            <div className={css.containerFormTeach}>
              <Field
                className={css.teacherInput}
                name="fullName"
                placeholder="Full Name"
              />
              <Field
                className={css.teacherInput}
                name="email"
                placeholder="Email"
              />
              <Field
                className={css.teacherInput}
                name="phone"
                placeholder="Phone number"
              />
            </div>
            <button className={css.btnForm}>Book</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;
