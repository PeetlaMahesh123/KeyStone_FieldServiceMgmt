import "./Unauthorized.css";

function Unauthorized() {
    return (
        <div className="unauthorized-container">

            <div className="unauthorized-card">

                <h1>403</h1>

                <h2>Unauthorized Access</h2>

                <p>
                    You don't have permission to access this page.
                </p>

                <a href="/login">
                    Back to Login
                </a>

            </div>

        </div>
    );
}

export default Unauthorized;