import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [theme, setTheme] = useState<Theme>(() => {
        return localStorage.getItem("theme") === "Dark"
            ? "Dark"
            : "Light";
    });

    useEffect(() => {

        document.body.classList.remove(
            "light-theme",
            "dark-theme"
        );

        document.body.classList.add(
            theme === "Dark"
                ? "dark-theme"
                : "light-theme"
        );

        localStorage.setItem("theme", theme);

    }, [theme]);

    return (

        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>

    );

}