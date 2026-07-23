import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import "./Register.css";

import Input from "../../components/common/Input/Input";
import Select from "../../components/common/Select/Select";
import Button from "../../components/common/Button/Button";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        employeeId: "",
        department: "",
        role: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {

        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            alert("Passwords do not match.");

            return;

        }

        const response = await register({

    firstName: formData.firstName,

    lastName: formData.lastName,

    username: formData.username,

    employeeId: formData.employeeId,

    email: formData.email,

    phone: formData.phone,

    department: formData.department,

    password: formData.password,

    roleName: formData.role

});

alert(response.message);

navigate("/login");

    };

    return (

        <div className="register-page">

            <div className="register-card">

                <h1>Create Account</h1>

                <p>Create your Field Service account</p>

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <Input
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter First Name"
                        />

                        <Input
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter Last Name"
                        />

                    </div>

                    <div className="form-row">

                        <Input
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter Username"
                        />

                        <Input
                            label="Employee ID"
                            name="employeeId"
                            value={formData.employeeId}
                            onChange={handleChange}
                            placeholder="EMP001"
                        />

                    </div>

                    <div className="form-row">

                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                        />

                        <Input
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                        />

                    </div>

                    <div className="form-row">

                        <Select
                            label="Department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            options={[
                                {
                                    label: "Select Department",
                                    value: "",
                                },
                                {
                                    label: "Operations",
                                    value: "Operations",
                                },
                                {
                                    label: "Maintenance",
                                    value: "Maintenance",
                                },
                                {
                                    label: "Service",
                                    value: "Service",
                                },
                                {
                                    label: "Administration",
                                    value: "Administration",
                                },
                            ]}
                        />

                        <Select
                            label="Role"
                            name = "role"
                            value={formData.role}
                            onChange={handleChange}
                            options={[
                                {
                                    label: "Select Role",
                                    value: "",
                                },
                                {
                                    label: "Admin",
                                    value: "Admin",
                                },
                                {
                                    label: "Manager",
                                    value: "Manager",
                                },
                                {
                                    label: "Customer",
                                    value: "Customer",
                                },
                                {
                                    label: "Dispatcher",
                                    value: "Dispatcher",
                                },
                                {
                                    label: "Technician",
                                    value: "Technician",
                                },
                            ]}
                        />

                    </div>

                    <div className="form-row">

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                        />

                        <Input
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                        />

                    </div>

                    <div className="button-container">

                        <Button
                            text="Create Account"
                            type="submit"
                        />

                    </div>

                </form>

                <div className="login-link">

                    Already have an account?

                    <Link to="/login">

                        Login

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Register;