import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/authApi";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await registerUser({
                username,
                password,
                role: isAdmin ? "admin" : "user",
            });
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.detail || "Registration failed");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>{isAdmin ? "Admin Registration" : "User Registration"}</h1>

                {error && <p className="error-text">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="checkbox-row">
                        <input
                            type="checkbox"
                            checked={isAdmin}
                            onChange={() => setIsAdmin(!isAdmin)}
                        />
                        <span>Register as Admin</span>
                    </div>


                    <button type="submit">
                        {isAdmin ? "Register as Admin" : "Register"}
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}