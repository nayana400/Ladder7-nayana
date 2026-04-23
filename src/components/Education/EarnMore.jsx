import { Link } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import heroImg from '../../assets/Images/earn_more_hero.png';
import mentorImg from '../../assets/Images/become_mentor.png';
import consultantImg from '../../assets/Images/become_consultant.png';

const EarnMore = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[oklch(0.57_0.26_302.67)]/5 -skew-x-12 transform translate-x-1/4"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 space-y-6 md:space-y-8 text-left order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase">
                                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                Now Hiring Part-Time Experts
                            </div>
                            <h1 className="text-3xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Transform Your <br />
                                <span className="text-[oklch(0.57_0.26_302.67)]">Expertise into Earnings</span>
                            </h1>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                                Unlock new income opportunities for IT consultants and trainers. Join a global network of professionals redefining the future of remote work.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link to="/contact" className="px-8 md:px-10 py-4 md:py-5 bg-[oklch(0.57_0.26_302.67)] text-white text-base md:text-lg font-bold rounded-full hover:brightness-110 transition-all shadow-xl shadow-[oklch(0.57_0.26_302.67)]/20 transform hover:scale-105 inline-block text-center w-full sm:w-auto">
                                    Explore Opportunities
                                </Link>
                            </div>
                        </div>

                        {/* Right side Image */}
                        <div className="flex-1 relative order-1 lg:order-2 w-full lg:w-auto">
                            <div className="relative z-10 w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border-4 md:border-8 border-white max-h-[400px] md:max-h-[500px] lg:max-h-none mx-auto">
                                <img
                                    src={heroImg}
                                    alt="Professional working remotely"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating decorative elements */}
                            <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-16 h-16 md:w-24 md:h-24 bg-[oklch(0.57_0.26_302.67)] rounded-2xl rotate-12 opacity-10 blur-xl"></div>
                            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Program Section */}
            <section className="pt-24 pb-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Empowering <span className="text-[oklch(0.57_0.26_302.67)]">Professionals</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-[oklch(0.57_0.26_302.67)] mx-auto rounded-full"></div>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            EarnMore is a revolutionary program that empowers IT consultants and trainers to work from home on their own terms. It combines flexibility, real-world projects, and opportunities to maximize income effortlessly.
                        </p>
                    </div>
                </div>
            </section>
            <section className="pt-0 pb-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Flexibility",
                                desc: "Set your own schedule and work from anywhere in the world. Your career, your rules.",
                                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" // schedule icon
                            },
                            {
                                title: "Expertise",
                                desc: "Apply your years of specialized knowledge to solve complex business challenges.",
                                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" // psychology/bulb icon
                            },
                            {
                                title: "Income",
                                desc: "Diversify your revenue streams with competitive part-time compensation models.",
                                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // payments icon
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[oklch(0.57_0.26_302.67)] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Paths Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                            Available <span className="text-[oklch(0.57_0.26_302.67)]">Paths</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-medium">
                            Choose how you want to share your expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Mentor Path */}
                        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col group border border-slate-100">
                            <div className="h-64 overflow-hidden relative">
                                <img src={mentorImg} alt="Become a Mentor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">Mentorship</div>
                            </div>
                            <div className="p-10 flex-1 flex flex-col">
                                <h3 className="text-3xl font-black text-slate-900 mb-6">Become a Mentor</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-8 flex-1">
                                    Join the EarnMore program as a Mentor and use your expertise to guide the next generation of IT professionals. Benefit from the flexibility of part-time work while increasing your income on your terms.
                                </p>
                                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-[oklch(0.57_0.26_302.67)] transition-all transform hover:scale-105 w-fit">
                                    Apply Now
                                </Link>
                            </div>
                        </div>

                        {/* Consultant Path */}
                        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col group border border-slate-100">
                            <div className="h-64 overflow-hidden relative">
                                <img src={consultantImg} alt="Become a Consultant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">Consulting</div>
                            </div>
                            <div className="p-10 flex-1 flex flex-col">
                                <h3 className="text-3xl font-black text-slate-900 mb-6">Become a Consultant</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-8 flex-1">
                                    Join the EarnMore program as an IT Consultant and apply your expertise to help businesses thrive. Take advantage of the flexibility of part-time work while boosting your income on your terms.
                                </p>
                                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-[oklch(0.57_0.26_302.67)] transition-all transform hover:scale-105 w-fit">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default EarnMore;
