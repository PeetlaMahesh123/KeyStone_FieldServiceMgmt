import { useState } from "react";

import "./UserRoleSettings.css";

import Button from "../common/Button/Button";
import Select from "../common/Select/Select";

function UserRoleSettings() {

    const [user, setUser] = useState("John Smith");
    const [role, setRole] = useState("Manager");
    const [status, setStatus] = useState("Active");

    const handleSave = () => {

        alert("User Role Updated Successfully!");

    };

    return (

        <div className="settings-card">

            <h2>User & Role Management</h2>

            <div className="settings-form">

                <Select
                    name="user"
                    label="Select User"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    options={[
                        { label: "John Smith", value: "John Smith" },
                        { label: "David Miller", value: "David Miller" },
                        { label: "Michael Johnson", value: "Michael Johnson" },
                    ]}
                />

                <Select
                    name="role"
                    label="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    options={[
                        { label: "Admin", value: "Admin" },
                        { label: "Manager", value: "Manager" },
                        { label: "Supervisor", value: "Supervisor" },
                        { label: "Dispatcher", value: "Dispatcher" },
                        { label: "Technician", value: "Technician" },
                    ]}
                />

                <Select
                    name="status"
                    label="Account Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    options={[
                        { label: "Active", value: "Active" },
                        { label: "Inactive", value: "Inactive" },
                    ]}
                />

                <Button
                    text="Save User Role"
                    onClick={handleSave}
                />

            </div>

        </div>

    );

}

export default UserRoleSettings;