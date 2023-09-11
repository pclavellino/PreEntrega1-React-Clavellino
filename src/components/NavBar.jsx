import Brand from "./Brand"
import MenuButton from "./MenuButton"
import CategoryItem from "./CatergoryItem"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Brand />
                <MenuButton />
                <CartWidget />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item destacados">
                            <CategoryItem name="PRODUCTOS DESTACADOS"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="PC"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="NOTEBOOKS"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="IMPRESORAS"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem name="MONITORES"/>
                        </li>
                    </ul>       
                </div>
            </div>
        </nav>

    )
}

export default NavBar;
