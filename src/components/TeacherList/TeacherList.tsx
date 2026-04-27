import { useState } from "react";
import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeacherList.module.css";
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
  teachers: Teacher[];
};

const TeacherList = ({ teachers }: Props) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const visiableTeachers = teachers.slice(0, visibleCount);
  return (
    <div className={css.teacherListContainer}>
      {visiableTeachers ? (
        <>
          <ul className={css.teacherList}>
            {visiableTeachers.map((teacher) => (
              <li key={teacher.name}>
                <TeacherItem teacher={teacher} />
              </li>
            ))}
          </ul>
          {visibleCount < teachers.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className={css.loadMoreBtn}
            >
              Load More
            </button>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TeacherList;
