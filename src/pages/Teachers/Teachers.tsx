import React from "react";
import Header from "../../components/Header/Header";
import { getDatabase, ref, get } from "firebase/database";

const Teachers = () => {
  // Connect to Database
  const db = getDatabase();

  async function getAllData() {
    // Object with data
    const snapshot = await get(ref(db, "/"));

    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data");
    }
  }

  getAllData();

  return (
    <>
      <Header />
    </>
  );
};

export default Teachers;
