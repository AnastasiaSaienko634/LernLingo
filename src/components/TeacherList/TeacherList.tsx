import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeacherList.module.css";

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
  teachers: Teacher[];
};

const TeacherList = ({ teachers }: Props) => {
  return (
    <div>
      {teachers ? (
        <>
          <ul className={css.teacherList}>
            {teachers.map((teacher) => (
              <li key={teacher.id}>
                <TeacherItem teacher={teacher} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TeacherList;
