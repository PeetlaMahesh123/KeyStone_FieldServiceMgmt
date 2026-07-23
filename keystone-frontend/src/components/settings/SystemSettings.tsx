import { useState } from "react";

import "./SystemSettings.css";

import Button from "../common/Button/Button";
import Select from "../common/Select/Select";

import { useTheme } from "../../context/ThemeContext";

function SystemSettings() {

    const { theme, toggleTheme } = useTheme();

    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState("INR");
    const [timezone, setTimezone] = useState("Asia/Kolkata");
    const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");

    const handleSave = () => {

        // Later you can save these settings to your backend

        alert("System Settings Updated Successfully!");

    };

    return (

        <div className="settings-card">

            <h2>System Settings</h2>

            <div className="settings-form">

                <Select
                    name="theme"
                    label="Theme"
                    value={theme}
                    onChange={(e) =>
                        toggleTheme(
                            e.target.value as "Light" | "Dark"
                        )
                    }
                    options={[
                        {
                            label: "Light",
                            value: "Light",
                        },
                        {
                            label: "Dark",
                            value: "Dark",
                        },
                    ]}
                />

                <Select
                    name="language"
                    label="Language"
                    value={language}
                    onChange={(e) =>
                        setLanguage(e.target.value)
                    }
                    options={[
                        {
                            label: "English",
                            value: "English",
                        },
                        {
                            label: "Telugu",
                            value: "Telugu",
                        },
                        {
                            label: "Hindi",
                            value: "Hindi",
                        },
                    ]}
                />

                <Select
                    name="currency"
                    label="Currency"
                    value={currency}
                    onChange={(e) =>
                        setCurrency(e.target.value)
                    }
                    options={[
                        {
                            label: "Indian Rupee (INR)",
                            value: "INR",
                        },
                        {
                            label: "US Dollar (USD)",
                            value: "USD",
                        },
                        {
                            label: "Euro (EUR)",
                            value: "EUR",
                        },
                    ]}
                />

                <Select
                    name="timezone"
                    label="Time Zone"
                    value={timezone}
                    onChange={(e) =>
                        setTimezone(e.target.value)
                    }
                    options={[
                        {
                            label: "Asia/Kolkata",
                            value: "Asia/Kolkata",
                        },
                        {
                            label: "UTC",
                            value: "UTC",
                        },
                        {
                            label: "America/New_York",
                            value: "America/New_York",
                        },
                    ]}
                />

                <Select
                    name="dateFormat"
                    label="Date Format"
                    value={dateFormat}
                    onChange={(e) =>
                        setDateFormat(e.target.value)
                    }
                    options={[
                        {
                            label: "DD/MM/YYYY",
                            value: "DD/MM/YYYY",
                        },
                        {
                            label: "MM/DD/YYYY",
                            value: "MM/DD/YYYY",
                        },
                        {
                            label: "YYYY-MM-DD",
                            value: "YYYY-MM-DD",
                        },
                    ]}
                />

                <Button
                    text="Save System Settings"
                    onClick={handleSave}
                />

            </div>

        </div>

    );

}

export default SystemSettings;