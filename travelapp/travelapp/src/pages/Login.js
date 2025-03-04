
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../style/Auth.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = { email };
        login(userData);
        navigate("/");
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleLogin}>
            <h2>Login</h2>
                <input type="email"  placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)}  required />
                <input  type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
