import React, { useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Internship from './Internship';

const InternshipPage = () => {
    return (
        <div className="bg-[oklch(0.93_0.01_0)] min-h-screen">
            <Navbar />
            <Internship />
            <Footer />
        </div>
    );
};

export default InternshipPage;
