import Home from "../../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Teachers from "../../pages/Teachers/Teachers";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
      {/* Toaster */}
      <Toaster />
    </>
  );
};

export default App;
