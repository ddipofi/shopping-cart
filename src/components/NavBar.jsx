import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="cart">Cart</Link>
        </nav>
    );
};

export default NavBar;
