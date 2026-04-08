import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import ProductDetail from "./components/Education/Products/ProductDetail";
import CareersPage from "./components/Careers/CareersPage";
import ServicesPage from "./components/Services/ServicesPage";
import ContactPage from "./components/Contact/ContactPage";
import AboutPage from "./components/About/AboutPage";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
