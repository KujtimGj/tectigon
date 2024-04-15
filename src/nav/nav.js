import "./nav.css"
import Logo from "../assets/logo.png";

const Nav = () => {
    return (
        <div className="nav">
            <img src={Logo} alt="Logo" />
            <div className="navigimet">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <button>Log out</button>
        </div>
    );
}

export default Nav;