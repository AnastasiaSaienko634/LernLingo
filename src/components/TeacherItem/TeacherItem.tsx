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
      <div className={css.teacherPhotoContainer}>
        <img
          className={css.teacherPhoto}
          src={teacher.avatar_url}
          alt="photo"
        />
      </div>

      <div className={css.headerContainer}>
        <h3 className={css.languagesTitle}>Languages</h3>
        <ul className={css.teacherInfo}>
          <li>
            <p>Lessons online</p>
          </li>
          <li>
            <p>Lessons done: {teacher.lessons_done}</p>
          </li>
          <li>
            <p>Rating: {teacher.rating} </p>
          </li>
          <li>
            <p>Price / 1 hour: {teacher.price_per_hour}$</p>
          </li>
        </ul>
      </div>
      <h2 className={css.teacherName}>{teacher.name}</h2>
    </div>
  );
};

export default TeacherItem;
