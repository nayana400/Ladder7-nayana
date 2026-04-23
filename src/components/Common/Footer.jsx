import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/LADDER 7 LOGO.png";

function Footer() {
  const location = useLocation();

  // Route definitions (synchronized with Navbar)
  const educationRoutes = ["/", "/products", "/my-ladder", "/mind-gym", "/mirror-me", "/fill-dots", "/amiu", "/internship"];
  const itRoutes = ["/it"];

  const checkIsEducation = (path) => educationRoutes.some(route => {
    if (route === "/") return path === "/";
    return path.startsWith(route);
  });
  const checkIsIT = (path) => itRoutes.some(route => path === route || path.startsWith(route));

  const [isEducationPage, setIsEducationPage] = useState(() => {
    const saved = localStorage.getItem("ladder7_mode");
    if (saved) return saved === "EDUCATION";
    return checkIsEducation(location.pathname);
  });

  useEffect(() => {
    if (checkIsEducation(location.pathname)) {
      setIsEducationPage(true);
    } else if (checkIsIT(location.pathname)) {
      setIsEducationPage(false);
    } else {
      const saved = localStorage.getItem("ladder7_mode");
      if (saved) setIsEducationPage(saved === "EDUCATION");
    }
  }, [location.pathname]);
  return (
    <footer className="bg-[oklch(0.97_0_0)] text-gray-900 pt-16 pb-8 px-6 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-8">

        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col gap-6 min-w-[180px]">
          <Link to={isEducationPage ? "/" : "/it"} className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Ladder7 Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-blue-900">Ladder7</span>
              <span className="text-[10px] text-gray-600 font-medium whitespace-nowrap">NextStep Solutions</span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" className="hover:text-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
            </a>
          </div>
        </div>

        {/* Links Sections Container */}
        <div className={`flex-1 grid grid-cols-1 sm:grid-cols-2 ${isEducationPage ? 'md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-6' : 'md:grid-cols-4 gap-8'}`}>

          {/* Column 2: Products */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-gray-900">Products</h4>
            <div className="flex flex-col gap-2 text-xs">
              <Link to="/amiu" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Amiu</Link>
              <Link to="/mirror-me" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Mirror Me</Link>
              <Link to="/my-ladder" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">My Ladder</Link>
              <Link to="/mind-gym" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Mind Gym</Link>
              <Link to="/fill-dots" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Fill Dots</Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-gray-900">Company</h4>
            <div className="flex flex-col gap-2 text-xs">
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Blogs</Link>
              <Link to="/careers" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Careers</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Contact Form</Link>
              <Link to="/it#faq" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">FAQ</Link>
            </div>
          </div>

          {/* Column 4: Our Locations */}
          <div className="flex flex-col gap-4 min-w-[150px]">
            <h4 className="text-base font-bold text-gray-900">Our Locations</h4>
            <div className="flex flex-col gap-4 text-xs text-gray-600">
              <div>
                <p className="font-bold text-gray-800">Cochin</p>
                <p className="text-[11px] leading-relaxed">WEE SPACES Ernakulam</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Trivandrum</p>
                <p className="text-[11px] leading-relaxed">Kinfra Film and IT Park<br />Trivandrum</p>
              </div>
            </div>
          </div>

          {/* Column 5: Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-gray-900">Contact Us</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a href="tel:+918137979401" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">+91 8137979401</a>
              <a href="mailto:info@ladder7.in" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">info@ladder7.in</a>
            </div>
          </div>

          {/* Column 6: Certified Program (Education Only) */}
          {isEducationPage && (
            <div className="flex flex-col col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 mt-4 lg:mt-0">
              <div className="bg-white rounded-[14px] border border-gray-100 p-4 shadow-sm flex items-start gap-4">
                <div className="text-blue-400 mt-1 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-600 font-bold text-[10px] tracking-widest uppercase mb-0.5">CERTIFIED PROGRAM</span>
                  <span className="text-gray-900 font-bold text-[15px] mb-1 leading-tight">Internship</span>
                  <p className="text-gray-500 text-[11px] mb-2 leading-relaxed">Official certification provider for advanced Information Technology (IT) internships</p>
                  <Link to="/internship" className="text-blue-600 font-bold text-[11px] tracking-widest uppercase hover:underline">LEARN MORE</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p className="text-gray-500">
          © 2026 <span className="text-gray-800">Ladder7 NextStep Solutions.</span> All rights reserved.
        </p>
        <Link to="/" className="text-gray-500 hover:text-gray-800 transition-colors italic">
          Privacy Policy
        </Link>
      </div>

    </footer>
  );
}

export default Footer;
