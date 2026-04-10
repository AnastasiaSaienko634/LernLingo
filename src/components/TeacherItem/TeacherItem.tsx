import css from "./TeacherItem.module.css";

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
  reviews: number;
  surname: string;
};

type Props = {
  teacher: Teacher;
};

const TeacherItem = ({ teacher }: Props) => {
  return (
    <div className={css.teacherContainer}>
      <div className={css.cardContent}>
        <div className={css.teacherPhotoContainer}>
          <img
            className={css.teacherPhoto}
            src={teacher.avatar_url}
            alt="photo"
          />
        </div>

        <div className={css.infoContainer}>
          <div className={css.headerContainer}>
            <p className={css.languagesTitle}>Languages</p>

            <ul className={css.teacherInfo}>
              <li>Lessons online</li>
              <li>Lessons done: {teacher.lessons_done}</li>
              <li>Rating: {teacher.rating}</li>
              <li>Price / 1 hour: {teacher.price_per_hour}$</li>
            </ul>
          </div>

          <h2 className={css.teacherName}>
            {teacher.name} {teacher.surname}
          </h2>

          <p className={css.languages}>
            Speaks: {teacher.languages.join(", ")}
          </p>

          <p className={css.lessonInfo}>{teacher.lesson_info}</p>

          <p className={css.conditions}>{teacher.conditions}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherItem;
