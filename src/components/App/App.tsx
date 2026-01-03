import Home from "../../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Teachers from "../../pages/Teachers/Teachers";

const App = () => {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </>
  );
};

export default App;
