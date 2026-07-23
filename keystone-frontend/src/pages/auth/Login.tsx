import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import "./Login.css";

import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Temporary Login
        const response = await login({

    email,

    password

});

localStorage.setItem("token", response.token);

navigate("/dashboard");

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <div className="login-header">

                    <h1>KEYSTONE</h1>

                    <p>Field Service Management Platform</p>

                </div>

                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />

                    <Button
                        text="Login"
                        type="submit"
                    />

                </form>

                <div className="login-footer">

                    <Link to="/forgot-password">

                        Forgot Password?

                    </Link>

                </div>

                <div className="register-link">

                    <span>Don't have an account?</span>

                    <Link to="/register">

                        Register

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Login;