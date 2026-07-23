import { useState } from "react";

import "./SecuritySettings.css";

import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

function SecuritySettings() {

    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    const handleSave = () => {

        alert("Security Settings Updated Successfully!");

    };

    return (

        <div className="settings-card">

            <h2>Security Settings</h2>

            <div className="settings-form">

                <Input
                    label="Current Password"
                    type="password"
                    placeholder="Enter Current Password"
                />

                <Input
                    label="New Password"
                    type="password"
                    placeholder="Enter New Password"
                />

                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm New Password"
                />

                <div className="switch-row">

                    <span>Enable Two-Factor Authentication</span>

                    <input
                        type="checkbox"
                        checked={twoFactorEnabled}
                        onChange={() =>
                            setTwoFactorEnabled(!twoFactorEnabled)
                        }
                    />

                </div>

                <Button
                    text="Update Password"
                    onClick={handleSave}
                />

                <Button
                    text="Logout From All Devices"
                    variant="danger"
                    onClick={() =>
                        alert("Logged out from all devices!")
                    }
                />

            </div>

        </div>

    );

}

export default SecuritySettings;