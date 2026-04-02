import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/LADDER 7 LOGO.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // EDUCATION is centered at /education and /products, IT is at / and others
  const isEducation = location.pathname.startsWith("/education") || location.pathname.startsWith("/products");
  const [activeToggle, setActiveToggle] = useState(isEducation ? "EDUCATION" : "IT");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCareersClick = (e) => {
    if (location.pathname === "/careers") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleHashClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
    setDropdownOpen(false);
  };

  const menuData = {
    services: [
      { name: "Digital Experience & Web Engineering", path: "/services#web-app-dev" },
      { name: "AI & Intelligent Automation", path: "/services#product-dev" },
      { name: "Strategy & Technology Consulting", path: "/services#it-consultancy" },
    ],
    products: [
      { name: "My Ladder", path: "/program/1" },
      { name: "Mind gym", path: "/program/2" },
      { name: "Mirror me", path: "/program/3" },
      { name: "Fill Dots", path: "/program/4" },
      { name: "Amiu", path: "#programs" }
    ],
    programs: [
      { name: "Take off", path: "#our-programs" },
      { name: "Experience The First job", path: "#our-programs" },
      { name: "Earn more", path: "#our-programs" },
      { name: "Best pick", path: "#our-programs" }
    ]
  };

  const handleLinkClick = (e, path) => {
    if (path.startsWith("#")) {
      handleHashClick(e, path);
    } else {
      navigate(path);
      setDropdownOpen(false);
      setOpen(false);
    }
  };

  return (
    <nav className="bg-[oklch(0.97_0_0)] text-gray-900 w-full z-50 fixed top-0 left-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Ladder7 Logo" className="h-10 w-auto object-contain mr-2" />
          <span className="text-xl font-bold tracking-tight text-gray-900">Ladder7</span>
        </Link>

        {/* Right Section: Menu items and Action buttons Grouped */}
        <div className="flex items-center gap-10">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <Link to="/about" className="hover:text-blue-600 transition py-2 whitespace-nowrap" onClick={(e) => handleLinkClick(e, "/about")}>Who we are</Link>
            <div
              ref={dropdownRef}
              className="relative group/menu"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/services"
                onClick={() => {
                  setDropdownOpen(false);
                  setOpen(false);
                }}
                className="flex items-center hover:text-blue-600 transition focus:outline-none py-2 whitespace-nowrap"
              >
                What we do
                <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>

              {/* Mega Menu Dropdown */}
              {dropdownOpen && (
                <div
                  className="fixed left-0 w-full bg-[oklch(0.99_0_0)]/95 backdrop-blur-2xl border-b border-gray-200 shadow-2xl z-40 animate-fadeIn"
                  style={{ top: '72px' }}
                >


                  <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
                    <div className="grid grid-cols-3 gap-x-20 justify-items-start text-left">
                      {/* Our Services */}
                      <div className="w-full max-w-[250px]">
                        <Link
                          to="/services"
                          className="text-gray-900 font-bold text-lg mb-8 flex items-center justify-start gap-2 cursor-pointer hover:underline underline-offset-8 transition-all group/header hover:text-blue-600"
                          onClick={(e) => handleLinkClick(e, "/services")}
                        >
                          <span className="w-1.5 h-6 bg-blue-500 rounded-full group-hover/header:scale-110 transition-transform"></span>
                          Our services
                        </Link>
                        <div className="flex flex-col gap-4 items-start ml-3.5">
                          {menuData.services.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-all hover:scale-105 hover:underline underline-offset-4 whitespace-nowrap"
                              onClick={(e) => handleLinkClick(e, item.path)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Products */}
                      <div className="w-full max-w-[250px]">
                        <h4
                          className="text-gray-900 font-bold text-lg mb-8 flex items-center justify-start gap-2 cursor-pointer hover:underline underline-offset-8 transition-all group/header hover:text-purple-600"
                          onClick={(e) => handleLinkClick(e, "#programs")}
                        >
                          <span className="w-1.5 h-6 bg-purple-500 rounded-full group-hover/header:scale-110 transition-transform"></span>
                          Products
                        </h4>
                        <div className="flex flex-col gap-4 items-start ml-3.5">
                          {menuData.products.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="text-gray-600 hover:text-purple-600 font-medium text-sm transition-all hover:scale-105"
                              onClick={(e) => handleLinkClick(e, item.path)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Our Programs */}
                      <div className="w-full max-w-[250px]">
                        <h4
                          className="text-gray-900 font-bold text-lg mb-8 flex items-center justify-start gap-2 cursor-pointer hover:underline underline-offset-8 transition-all group/header hover:text-green-600"
                          onClick={(e) => handleLinkClick(e, "#our-programs")}
                        >
                          <span className="w-1.5 h-6 bg-green-500 rounded-full group-hover/header:scale-110 transition-transform"></span>
                          Our Programs
                        </h4>
                        <div className="flex flex-col gap-4 items-start ml-3.5">
                          {menuData.programs.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="text-gray-600 hover:text-green-600 font-medium text-sm transition-all hover:scale-105"
                              onClick={(e) => handleLinkClick(e, item.path)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/" className="hover:text-blue-600 transition py-2 whitespace-nowrap" onClick={(e) => handleLinkClick(e, "/")}>What we think</Link>
            <Link to="/careers" onClick={handleCareersClick} className="hover:text-blue-600 transition py-2 whitespace-nowrap">Careers</Link>
            <Link to="/contact" className="hover:text-blue-600 transition py-2 whitespace-nowrap" onClick={(e) => handleLinkClick(e, "/contact")}>Contact Us</Link>
          </div>

          {/* Toggle Button */}
          <div className="hidden lg:flex bg-[#f1f5f9] p-1 rounded-full relative text-[11px] font-black tracking-widest w-[220px] shrink-0 border border-slate-200/50">
            <div 
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-in-out ${activeToggle === 'EDUCATION' ? 'translate-x-full' : 'translate-x-0'}`}
            />
            <button 
              onClick={() => {
                setActiveToggle('IT');
                navigate('/');
              }}
              className={`relative z-10 flex-1 py-1.5 text-center transition-colors duration-300 ${activeToggle === 'IT' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-700'}`}
            >
              IT
            </button>
            <button 
              onClick={() => {
                setActiveToggle('EDUCATION');
                navigate('/education');
              }}
              className={`relative z-10 flex-1 py-1.5 text-center transition-colors duration-300 ${activeToggle === 'EDUCATION' ? 'text-purple-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              EDUCATION
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-2xl text-gray-800"
              onClick={() => setOpen(!open)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 shadow-xl relative z-50 max-h-[85vh] overflow-y-auto w-full text-gray-800">
          <Link to="/about" className="block hover:text-blue-600 py-3 border-b border-gray-100 font-medium" onClick={(e) => handleLinkClick(e, "/about")}>Who we are</Link>

          <div className="space-y-4 border-b border-gray-100 pb-2">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 focus:outline-none font-bold flex-1 text-left"
              >
                What we do
              </Link>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="p-2 focus:outline-none"
              >
                <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            {mobileDropdownOpen && (
              <div className="pl-4 space-y-6 border-l-2 border-gray-200 ml-1 pb-4">
                {/* Services Section */}
                <div>
                  <Link
                    to="/services"
                    className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3 cursor-pointer hover:underline underline-offset-4 transition-all block"
                    onClick={(e) => handleLinkClick(e, "/services")}
                  >
                    Our Services
                  </Link>
                  <div className="space-y-3">
                    {menuData.services.map(item => (
                      <Link key={item.name} to={item.path} className="block text-gray-500 font-medium text-sm hover:text-blue-600 transition-all whitespace-nowrap" onClick={(e) => handleLinkClick(e, item.path)}>{item.name}</Link>
                    ))}
                  </div>
                </div>

                {/* Products Section */}
                <div>
                  <h5
                    className="text-purple-600 text-xs font-bold uppercase tracking-wider mb-3 cursor-pointer hover:underline underline-offset-4 transition-all"
                    onClick={(e) => handleLinkClick(e, "#programs")}
                  >
                    Products
                  </h5>
                  <div className="space-y-3">
                    {menuData.products.map(item => (
                      <Link key={item.name} to={item.path} className="block text-gray-500 font-medium text-sm hover:text-purple-600 transition-all" onClick={(e) => handleLinkClick(e, item.path)}>{item.name}</Link>
                    ))}
                  </div>
                </div>

                {/* Programs Section */}
                <div>
                  <h5
                    className="text-green-600 text-xs font-bold uppercase tracking-wider mb-3 cursor-pointer hover:underline underline-offset-4 transition-all"
                    onClick={(e) => handleLinkClick(e, "#our-programs")}
                  >
                    Our Programs
                  </h5>
                  <div className="space-y-3">
                    {menuData.programs.map(item => (
                      <Link key={item.name} to={item.path} className="block text-gray-500 font-medium text-sm hover:text-green-600 transition-all" onClick={(e) => handleLinkClick(e, item.path)}>{item.name}</Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/" className="block hover:text-blue-600 py-3 font-medium border-b border-gray-100" onClick={() => setOpen(false)}>What we think</Link>
          <Link to="/careers" className="block hover:text-blue-600 py-3 font-medium" onClick={(e) => { handleCareersClick(e); setOpen(false); }}>Careers</Link>
          <Link to="/contact" className="block hover:text-blue-600 py-3 font-medium text-gray-800" onClick={(e) => handleLinkClick(e, "/contact")}>Contact Us</Link>

          {/* Mobile Toggle Button */}
          <div className="flex bg-[#f1f5f9] p-1 rounded-full relative text-[12px] font-black tracking-widest w-full max-w-[280px] mx-auto mt-8 mb-4 border border-slate-200/50">
            <div 
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${activeToggle === 'EDUCATION' ? 'translate-x-full' : 'translate-x-0'}`}
            />
            <button 
              onClick={() => {
                setActiveToggle('IT');
                setOpen(false);
                navigate('/');
              }}
              className={`relative z-10 flex-1 py-2 text-center transition-colors duration-300 ${activeToggle === 'IT' ? 'text-blue-600 font-bold' : 'text-slate-500'}`}
            >
              IT
            </button>
            <button 
              onClick={() => {
                setActiveToggle('EDUCATION');
                setOpen(false);
                navigate('/education');
              }}
              className={`relative z-10 flex-1 py-2 text-center transition-colors duration-300 ${activeToggle === 'EDUCATION' ? 'text-purple-600' : 'text-slate-500'}`}
            >
              EDUCATION
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
