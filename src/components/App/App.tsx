import Home from "../../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Teachers from "../../pages/Teachers/Teachers";
import SignUp from "../auth/SignUp.js";
import SignIn from "../auth/SignIn.js";
import AuthDetails from "../auth/AuthDetails.js";
const App = () => {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
      <SignUp />
      <SignIn />
      <AuthDetails />
    </>
  );
};

export default App;
