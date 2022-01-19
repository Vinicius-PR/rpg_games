import { createContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("Light");

    function handleTheme() {
        setTheme(theme === "Light" ? "Dark" : "Light");
    }

    return (
        <ThemeContext.Provider
            value={{
                theme, handleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeContext;