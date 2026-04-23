import React from 'react';
import { Link } from 'react-router-dom';

import advisor1 from "../../assets/Images/advisor1.jpg"
const Advisor = () => {
    const features = [
        "Personalised Goal Setting",
        "Free Career Counselling",
        "Free Access to Ladder7 Events"
    ];

    return (
        <section className="bg-white text-gray-900 py-12 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Text Content */}
                <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-1 leading-tight text-gray-900">
                        Talk to our Advisor
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-4 mt-2 max-w-2xl">
                        Ready to take the next step? Our expert advisors are here to provide personalized guidance tailored to your specific business needs. Schedule a strategy session today.
                    </p>


                    <div className="flex flex-col gap-3 mb-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className="text-[oklch(42.4%_.199_265.638)] text-xl font-bold">✓</span>
                                <span className="text-lg font-bold text-gray-800">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Link to="/contact" className="inline-block mt-2 bg-[oklch(42.4%_.199_265.638)] text-white py-4 px-10 rounded text-base font-bold shadow-xl hover:bg-[oklch(42.4%_.199_265.638)]/90 transition-colors">
                        Request a call
                    </Link>
                </div>

                {/* Illustration */}
                <div className="flex-1 relative">
                    <div className="relative z-10 w-full max-w-[500px] mx-auto lg:mr-0">
                        <img
                            src={advisor1}
                            alt="Talk to our Advisor"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advisor;
