
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import '../style/Navbar.css'
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <h2>Travel App</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/destinationsearch">DestinationSearch</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/booknow">BookNow</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/contact">Contact</Link>
                {!user ? (
                    <>  
                        
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                ) : (
                    <button className="btn" onClick={logout}>Logout</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
