import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// Pages
import Teachers from "../../pages/Teachers/Teachers";
import Home from "../../pages/Home/Home";

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
