import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";

const AnimatedShape = ({ position, color, speed, distort }) => {
    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} position={position} scale={0.6}>
                <MeshDistortMaterial
                    color={color}
                    speed={speed}
                    distort={distort}
                    radius={1}
                />
            </Sphere>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-60">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

                <AnimatedShape position={[-3, 2, 0]} color="#ff6b6b" speed={2} distort={0.4} />
                <AnimatedShape position={[3, -2, 0]} color="#4facfe" speed={3} distort={0.5} />
                <AnimatedShape position={[2, 2, -2]} color="#f9d423" speed={2.5} distort={0.3} />
                <AnimatedShape position={[-2, -2, -1]} color="#a18cd1" speed={1.5} distort={0.6} />

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

const Amiu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const highlights = [
        {
            title: "Talent Discovery",
            desc: "Identifying natural inclinations and hidden strengths in children through playful, structured assessments.",
            icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Holistic Development",
            desc: "Focusing on cognitive, emotional, and social growth to build a well-rounded foundation for life.",
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Navbar />
            <div className="h-20"></div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white pt-12 text-left">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <div className="order-2 lg:order-1">
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-purple-600 uppercase border border-purple-200 bg-purple-50 rounded-full">
                                For the Next Generation
                            </span>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                                Amiu - <span className="text-purple-600">Igniting the Genius</span> in Every Child.
                            </h1>
                            <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl">
                                A specialized program designed for children to identify their unique talents and prepare for a brighter, more confident future through engaging and insightful experiences.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-purple-600 hover:brightness-110 text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-purple-200"
                                >
                                    Explore the Program
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="order-1 lg:order-2 group">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-video lg:aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
                                    alt="Children Future Genius"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                Nurturing <span className="text-purple-600">Hidden Potential</span> From an Early Age.
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We believe every child has a unique set of dots to connect. Our program acts as the bridge between curiosity and competence.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {highlights.map((item, index) => (
                                    <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors group">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* Decorative Elements for Children's Theme */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-100/50 to-blue-100/50 blur-3xl -z-10 rounded-full"></div>
                            <div className="bg-white p-10 rounded-[3rem] shadow-3xl border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[100px]"></div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Program Focus Areas</h3>
                                <div className="space-y-6">
                                    {[
                                        { label: "Creative Thinking", value: 95, color: "bg-purple-500" },
                                        { label: "Problem Solving", value: 88, color: "bg-blue-500" },
                                        { label: "Emotional Resilience", value: 92, color: "bg-pink-500" },
                                        { label: "Curiosity Driven Learning", value: 98, color: "bg-yellow-500" }
                                    ].map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">{skill.label}</span>
                                                <span className="text-gray-500">{skill.value}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                                                    style={{ width: `${skill.value}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Invest in Your Child's <span className="text-purple-400">Future Today.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Give your child the gift of self-discovery and a roadmap to success. Join the Amiu community of young achievers.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-12 py-5 bg-white text-slate-900 font-extrabold text-xl rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
                    >
                        Register Now
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Amiu;
