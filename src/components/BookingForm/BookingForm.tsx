import { Formik, Form, Field } from "formik";
import css from "./BookingForm.module.css";

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
  opneBookingForm: () => void;
};

const BookingForm = ({ teacher, opneBookingForm }: Props) => {
  const handleSubmit = () => {};
  return (
    <div className={css.overlayForm}>
      <div className={css.containerForm}>
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
        {/* <Formik
          initialValues={{ name: "", email: "", number: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field />
          </Form>
        </Formik> */}
      </div>
    </div>
  );
};

export default BookingForm;
