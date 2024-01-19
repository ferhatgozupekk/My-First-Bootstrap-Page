import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Favs from "./pages/Favs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/giris" element={<Login />} />
              <Route path="/favoriler" element={<Favs />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
