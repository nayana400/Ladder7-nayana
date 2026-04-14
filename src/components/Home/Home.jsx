import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../Common/Navbar';
import Hero from './Hero';
import Introduction from './Introduction';
import Strategy from './Strategy';
import Innovators from './Innovators';
import TechStack from './TechStack';
import Revenue from './Revenue';
import FAQ from './FAQ';

import Footer from '../Common/Footer';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]"
                style={{ scaleX }}
            />

            {/* Core Components */}
            <Navbar />
            <main>
                <Hero />
                <Introduction />
                <Strategy />
                <Innovators />
                <TechStack />
                <Revenue />
                <FAQ />


                {/* Future sections will be added here as separate components */}
            </main>
            <Footer />
        </div>
    );
};

export default Home;