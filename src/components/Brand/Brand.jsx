import "./Brand.css";
import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div>
            <Link className="navbar-brand" to={"/"}>
                <img src="/assets/logoPrincipal.png" alt="Logo Bonomo Sistemas" className="logoPrincipal"></img>
            </Link>
        </div>
    )
}

export default Brand;