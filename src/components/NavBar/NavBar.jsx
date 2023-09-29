import Brand from "../Brand/Brand"
import MenuButton from "./MenuButton"
import CategoryItem from "./CategoryItem"
import CartWidget from "../Cart/CartWidget"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Brand />
                <CartWidget />
                <MenuButton />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <CategoryItem name="PC" category="pc"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="NOTEBOOKS" category="notebooks"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="MONITORES" category="monitores"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="IMPRESORAS" category="impresoras"/>
                        </li>
                    </ul>       
                </div>
            </div>
        </nav>

    )
}

export default NavBar;
