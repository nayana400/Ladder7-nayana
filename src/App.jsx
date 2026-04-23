import { Routes, Route } from "react-router-dom";
import IT from "./components/IT/IT";
import Education from "./components/Education/Education";
import ProductDetail from "./components/Education/Products/ProductDetail";
import Internship from "./components/Internship/InternshipPage";
import CareersPage from "./components/Careers/CareersPage";
import ServicesPage from "./components/Services/ServicesPage";
import ContactPage from "./components/Contact/ContactPage";
import AboutPage from "./components/About/AboutPage";
import Blog from "./components/Blog/Blog";
import MyLadder from "./components/Education/Products/MyLadder";
import MindGym from "./components/Education/Products/MindGym";
import EarnMore from "./components/Education/EarnMore";
import ScrollToTop from "./components/Common/ScrollToTop";
import MirrorMe from "./components/Education/Products/MirrorMe";
import FillDots from "./components/Education/Products/FillDots";
import Amiu from "./components/Education/Products/Amiu";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Education />} />
        <Route path="/it" element={<IT />} />
        <Route path="/my-ladder" element={<MyLadder />} />
        <Route path="/mind-gym" element={<MindGym />} />
        <Route path="/mirror-me" element={<MirrorMe />} />
        <Route path="/fill-dots" element={<FillDots />} />
        <Route path="/amiu" element={<Amiu />} />
        <Route path="/earn-more" element={<EarnMore />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/internship" element={<Internship />} />
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
