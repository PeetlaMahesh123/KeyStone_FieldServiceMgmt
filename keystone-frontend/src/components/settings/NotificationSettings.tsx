import { useState } from "react";

import "./NotificationSettings.css";

import Button from "../common/Button/Button";

function NotificationSettings() {

    const [email, setEmail] = useState(true);
    const [sms, setSms] = useState(false);
    const [push, setPush] = useState(true);
    const [workOrderReminder, setWorkOrderReminder] = useState(true);
    const [lowStockAlert, setLowStockAlert] = useState(true);

    const handleSave = () => {

        alert("Notification Settings Updated Successfully!");

    };

    return (

        <div className="settings-card">

            <h2>Notification Settings</h2>

            <div className="notification-list">

                <label className="switch-row">

                    <span>Email Notifications</span>

                    <input
                        type="checkbox"
                        checked={email}
                        onChange={() => setEmail(!email)}
                    />

                </label>

                <label className="switch-row">

                    <span>SMS Notifications</span>

                    <input
                        type="checkbox"
                        checked={sms}
                        onChange={() => setSms(!sms)}
                    />

                </label>

                <label className="switch-row">

                    <span>Push Notifications</span>

                    <input
                        type="checkbox"
                        checked={push}
                        onChange={() => setPush(!push)}
                    />

                </label>

                <label className="switch-row">

                    <span>Work Order Reminders</span>

                    <input
                        type="checkbox"
                        checked={workOrderReminder}
                        onChange={() =>
                            setWorkOrderReminder(!workOrderReminder)
                        }
                    />

                </label>

                <label className="switch-row">

                    <span>Low Stock Alerts</span>

                    <input
                        type="checkbox"
                        checked={lowStockAlert}
                        onChange={() =>
                            setLowStockAlert(!lowStockAlert)
                        }
                    />

                </label>

            </div>

            <Button
                text="Save Notification Settings"
                onClick={handleSave}
            />

        </div>

    );

}

export default NotificationSettings;