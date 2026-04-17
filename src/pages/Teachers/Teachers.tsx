import { getDatabase, ref, get } from "firebase/database";
import TeacherList from "../../components/TeacherList/TeacherList";
import css from "./Teachers.module.css";
import { useEffect, useState } from "react";
import Filters from "../../components/Filtes/Filters";
import { useCourseFilterStore } from "../../store/Filters";

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

const Teachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const { level, price, language } = useCourseFilterStore();

  const db = getDatabase();

  useEffect(() => {
    async function getAllData() {
      const snapshot = await get(ref(db, "/"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setTeachers(data);
      } else {
        console.log("No data");
      }
    }

    getAllData();
  }, []);

  const filteredTeachers = teachers.filter((teacher: Teacher) => {
    const matchesLanguage =
      !language ||
      teacher.languages?.some(
        (l) => l.toLowerCase() === language.toLowerCase(),
      );

    const matchesLevel =
      !level ||
      teacher.levels?.some((l) =>
        l.toLowerCase().includes(level.toLowerCase()),
      );

    const priceNumber = Number(price);

    const matchesPrice =
      !price ||
      Number.isNaN(priceNumber) ||
      teacher.price_per_hour <= priceNumber;

    return matchesLanguage && matchesLevel && matchesPrice;
  });

  return (
    <div className={css.container}>
      <Filters />
      {filteredTeachers.length > 0 ? (
        <TeacherList teachers={filteredTeachers} />
      ) : (
        <p>Nothing was find...</p>
      )}
    </div>
  );
};

export default Teachers;
