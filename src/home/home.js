import "./home.css";
import Logo from "../assets/logo.png"

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <div className="header-content">
                    <h1 className="header-content-h1">Find your first project</h1>
                </div>
            </div>
            <div className="professions">
                <div className="professions-item"></div>
                <div className="professions-item"></div>
                <div className="professions-item"></div>
                <div className="professions-item"></div>
                <div className="professions-item"></div>
                <div className="professions-item"></div>
            </div>
        </div>
    );
}

export default Home;