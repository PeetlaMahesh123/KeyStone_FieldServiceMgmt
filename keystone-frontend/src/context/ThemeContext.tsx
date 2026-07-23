import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

export type Theme = "Light" | "Dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [theme, setTheme] = useState<Theme>(() => {

        const savedTheme = localStorage.getItem("theme");

        return savedTheme === "Dark"
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

    const toggleTheme = (newTheme: Theme) => {

        setTheme(newTheme);

    };

    return (

        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>

    );

}

export function useTheme() {

    const context = useContext(ThemeContext);

    if (context === undefined) {

        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );

    }

    return context;

}