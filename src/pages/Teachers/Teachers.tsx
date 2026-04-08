import { getDatabase, ref, get } from "firebase/database";
import TeacherList from "../../components/TeacherList/TeacherList";
import css from "./Teachers.module.css";
import { useState } from "react";

const Teachers = () => {
  const [teaches, setTeachers] = useState([]);
  // Connect to Database
  const db = getDatabase();

  async function getAllData() {
    // Object with data
    const snapshot = await get(ref(db, "/"));

    if (snapshot.exists()) {
      setTeachers(snapshot.val());
    } else {
      console.log("No data");
    }
  }

  getAllData();

  return (
    <div className={css.container}>
      <TeacherList teachers={teaches} />
    </div>
  );
};

export default Teachers;
