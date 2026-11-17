import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/reusableComponents/Header";
import Home from "./components/pages/Home";
import Footer from "./components/reusableComponents/Footer";
import Services from "./components/pages/Services";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
