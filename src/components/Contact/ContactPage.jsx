import React, { useEffect } from 'react';
import Navbar from '../Home/Navbar';
import Contact from '../Education/Contact';
import Footer from '../Home/Footer';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-20">
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
};

export default ContactPage;
