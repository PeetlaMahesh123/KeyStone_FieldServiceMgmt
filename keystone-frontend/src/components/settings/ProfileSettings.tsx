import "./ProfileSettings.css";

import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

function ProfileSettings() {

    const handleSave = () => {

        alert("Profile Updated Successfully!");

    };

    return (

        <div className="settings-card">

            <h2>Profile Settings</h2>

            <div className="settings-form">

                <Input
                    label="First Name"
                    placeholder="John"
                />

                <Input
                    label="Last Name"
                    placeholder="Smith"
                />

                <Input
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                />

                <Input
                    label="Phone Number"
                    placeholder="9876543210"
                />

                <Input
                    label="Department"
                    placeholder="Operations"
                />

                <Button
                    text="Save Profile"
                    onClick={handleSave}
                />

            </div>

        </div>

    );

}

export default ProfileSettings;