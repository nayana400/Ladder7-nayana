import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    // 1. Automatic Scroll Reset or Hash Navigation on Route Change
    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            const element = document.getElementById(hash.replace("#", ""));
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - 120; // 120px offset for the fixed navbar

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    }, [pathname, hash]);

    // 2. Control visibility of the "Back to Top" button
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return null;
};

export default ScrollToTop;
