import Navbar from "../Common/Navbar";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import OurJourney from "./OurJourney";
import OurPrograms from "./OurPrograms";
import Advisor from "./Advisor";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "../Common/Footer";

const Education = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Hero />
            <Products />
            <OurJourney />
            <Testimonials />
            <OurPrograms />
            <Advisor />
            <Footer />
        </div>
    );
};

export default Education;
