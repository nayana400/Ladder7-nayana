import React, { useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { motion } from 'framer-motion';
import independenceImg from '../../assets/Images/blog/Independence Day-celebration.webp';
import ai1Img from '../../assets/Images/blog/Ai1.webp';
import ai2Img from '../../assets/Images/blog/Ai2.jpg';
import christmasImg from '../../assets/Images/blog/Christmas-celebration.webp';
import onamImg from '../../assets/Images/blog/Onam-celebration.webp';

const recentPosts = [
    {
        id: 1,
        title: "The Role of AI in Personalizing Web User Experiences",
        excerpt: "In today’s fast-evolving digital landscape, personalization has become a cornerstone of customer engagement. With users constantly expecting tailored, relevant, and seamless interactions, businesses must leverage cutting-edge technologies to meet these demands.",
        category: "Technical Insights",
        date: "Oct 24, 2023",
        readTime: "8 min read",
        image: ai1Img
    },
    {
        id: 2,
        title: "Tips for Collaborating with AI Tools in Web Development Teams",
        excerpt: "Maximize the potential of AI tools in web development by selecting the right tools, fostering AI literacy within the team, automating repetitive tasks, and integrating AI into Agile workflows. Cultivate a collaborative environment where AI complements human creativity, prioritizes security, and enhances cross-team collaboration for more efficient and innovative digital solutions.",
        category: "Web Development",
        date: "Oct 18, 2023",
        readTime: "10 min read",
        image: ai2Img
    },
    {
        id: "spacer",
        isEmpty: true
    },
    {
        id: 3,
        title: "Lux Noel: A Magical Christmas Celebration of Togetherness and Festivity",
        excerpt: "On December 19, 2024, Ladder7’s highly anticipated Christmas celebration, Lux Noel, elevated the festive spirit to a whole new level.",
        category: "Events",
        date: "Oct 21, 2023",
        readTime: "15 min read",
        image: christmasImg
    },
    {
        id: 4,
        title: "Festive Moments and Lasting Memories: Ladder7’s Grand Onam Celebration",
        excerpt: "Onam, the festival of joy, unity, and prosperity, brings people together to celebrate Kerala’s rich traditions. At Ladder7 Next Step Solution, this year’s Onam celebration was filled with vibrant colors, delicious food, fun games, and shared laughter.",
        category: "Events",
        date: "Oct 15, 2023",
        readTime: "6 min read",
        image: onamImg
    }
];

const Blog = () => {
    // Feature image
    const demoImage = independenceImg;

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">



                {/* Top Section Featured Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-50 rounded-3xl overflow-hidden flex flex-col md:flex-row mb-20 group hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                    {/* Image Container */}
                    {/* Note: You can replace 'demoImage' with a local path like '/assets/Images/your-photo.jpg' once you add photos to your image folder */}
                    <div className="md:w-1/2 h-72 md:h-auto relative overflow-hidden">
                        <img
                            src={demoImage}
                            alt="Featured Blog Post"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                            Celebrating Unity and Responsibility: Independence Day at Ladder7
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                            As we honor our nation's independence, we reflect on the liberty to innovate, build, and transform the digital landscape for a brighter future.
                        </p>
                        <div className="mt-auto">
                            <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors text-lg">
                                Read Article
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Recent Posts Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Latest Insights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map((post, index) => (
                            post.isEmpty ? (
                                <div key={post.id} className="hidden lg:block"></div>
                            ) : (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                                >
                                    <div className="h-56 relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow transition-all duration-500 group-hover:bg-[#a855f7]">
                                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-300">
                                            {post.category}
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-white transition-colors duration-300">
                                            {post.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 group-hover:text-gray-100 transition-colors duration-300">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-xs text-gray-400 mb-6 space-x-2 font-medium group-hover:text-gray-200 transition-colors duration-300">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-gray-200"></span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <div className="mt-auto">
                                            <button className="inline-flex items-center text-blue-600 font-medium group-hover:text-white transition-colors text-sm">
                                                Read More
                                                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Blog;
