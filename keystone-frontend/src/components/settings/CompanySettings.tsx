import "./CompanySettings.css";

import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

function CompanySettings() {

    const handleSave = () => {

        alert("Company Settings Updated Successfully!");

    };

    return (

        <div className="settings-card">

            <h2>Company Settings</h2>

            <div className="settings-form">

                <Input
                    label="Company Name"
                    placeholder="KEYSTONE Pvt Ltd"
                />

                <Input
                    label="GST Number"
                    placeholder="22AAAAA0000A1Z5"
                />

                <Input
                    label="Company Email"
                    type="email"
                    placeholder="info@keystone.com"
                />

                <Input
                    label="Company Phone"
                    placeholder="+91 9876543210"
                />

                <Input
                    label="Website"
                    placeholder="https://www.keystone.com"
                />

                <Input
                    label="Address"
                    placeholder="Company Address"
                />

                <div className="logo-upload">

                    <label>Company Logo</label>

                    <input type="file" />

                </div>

                <Button
                    text="Save Company Settings"
                    onClick={handleSave}
                />

            </div>

        </div>

    );

}

export default CompanySettings;