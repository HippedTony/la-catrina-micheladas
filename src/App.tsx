import { BrowserRouter, Route, Routes } from "react-router-dom";

import ComingSoon from "./pages/ComingSoon";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/dev" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
