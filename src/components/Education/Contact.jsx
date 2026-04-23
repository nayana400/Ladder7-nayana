import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[oklch(0.99_0_0)]/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-gray-100 shadow-2xl shadow-blue-100/50"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us more about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white/50 resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Direct Contact</h3>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@ladder7.in" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors underline-offset-4 hover:underline text-wrap break-all">info@ladder7.in</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Our Experts</p>
                  <a href="tel:+918137979401" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">+91 8137979401</a>
                  <p className="text-xs text-gray-500 mt-1">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Office Locations</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-bold text-gray-800">Ernakulam Office</p>
                      <p className="text-gray-600">Ravipuram, Cochin, Kerala</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">Trivandrum Office</p>
                      <p className="text-gray-600">Kinfra Film and IT Park, Trivandrum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
