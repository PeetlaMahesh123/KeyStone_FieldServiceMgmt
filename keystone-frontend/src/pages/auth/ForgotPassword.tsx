import "./ForgotPassword.css";

function ForgotPassword() {
    return (
        <div className="forgot-container">

            <div className="forgot-card">

                <div className="forgot-header">
                    <h1>Forgot Password</h1>
                    <p>
                        Enter your registered email address.
                    </p>
                </div>

                <form className="forgot-form">

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <button
                        type="submit"
                        className="forgot-btn"
                    >
                        Send Reset Link
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ForgotPassword;