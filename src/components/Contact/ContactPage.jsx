import React, { useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Contact from '../Education/Contact';
import Footer from '../Common/Footer';
import contactHero from '../../assets/Images/contact/contact-hero.png';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Navbar />
            {/* Navigation Spacer */}
            <div className="h-20"></div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white pt-12">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <div className="order-2 lg:order-1">
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[oklch(42.4%_0.199_265.638)] uppercase border border-[oklch(42.4%_0.199_265.638)]/30 bg-[oklch(42.4%_0.199_265.638)]/5 rounded-full">
                                Enterprise Power, SMB Agility.
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                                Let's Architect Your <br className="hidden md:block" />
                                <span className="text-[oklch(42.4%_0.199_265.638)]">Next Step.</span>
                            </h1>
                            <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl">
                                Whether you have a specific project in mind or just want to explore what's possible, our experts are ready to listen.
                            </p>
                        </div>

                        {/* Right Column: Image */}
                        <div className="order-1 lg:order-2 group">
                            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                                <img
                                    src={contactHero}
                                    alt="Contact Ladder7"
                                    className="w-full h-full object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default ContactPage;
