import { createContext, useState, useContext } from "react";

// Create the Language Context
const LanguageContext = createContext();

// Language Provider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // Default language

    const changeLanguage = (lang) => setLanguage(lang);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
