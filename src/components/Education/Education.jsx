import Navbar from "../Home/Navbar";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import OurJourney from "./OurJourney";
import OurPrograms from "./OurPrograms";
import Advisor from "./Advisor";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "../Home/Footer";

const Education = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Hero />
            <Products />
            <OurJourney />
            <Testimonials />
            <OurPrograms />
            <Partners />
            <Advisor />
            <Footer />
        </div>
    );
};

export default Education;
