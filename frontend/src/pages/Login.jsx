import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({
        username,
        password,
        role: isAdmin ? "admin" : "user",
      });

      login(res.data.access_token, isAdmin ? "admin" : "user");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{isAdmin ? "Admin Login" : "User Login"}</h1>

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
            <span>Login as Admin</span>
          </div>


          <button type="submit">
            {isAdmin ? "Login as Admin" : "Login"}
          </button>
        </form>

        <p className="auth-footer">
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}