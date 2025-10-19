'use client';
import { useNavigate } from "react-router-dom";
// for single page navigation
// use:
// const handleScrollToSubscription = () => {
//   scrollToSection("sales-benefits");
// };
export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
// for different page navigation
// use:
//  const ScrollToSectionOnPage = useScrollToSectionOnPage();
//   const handleScrollToSubscription = () => {
//     ScrollToSectionOnPage("/", "sales-benefits");
//   };
export const useScrollToSectionOnPage = () => {
    const navigate = useNavigate();
    const scrollToSectionOnPage = (path, sectionId) => {
        // Navigate to the desired path with query parameter
        navigate(`${path}?sectionId=${sectionId}`);
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    };
    return scrollToSectionOnPage;
};
