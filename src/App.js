import logo from "./logo.svg";
import "./App.css";
import { Video } from "./components";
import { Home, LandingPage, Weddingphotoshoot } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Videography from "./pages/Videography";
import Commercial from "./pages/Commercial";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Photography from "./pages/Photography";

function App() {
  return (
    <BrowserRouter basename="sd">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weddingphotoshoot" element={<Weddingphotoshoot />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
