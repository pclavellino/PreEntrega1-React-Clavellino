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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <CategoryItem name="PRODUCTOS DESTACADOS"/>
                            </li>
                            <li className="nav-item">
                                <CategoryItem name="PC"/>
                            </li>
                            <li className="nav-item">
                                <CategoryItem name="Notebooks"/>
                            </li>
                            <li className="nav-item">
                                <CategoryItem name="Impresoras"/>
                            </li>
                            <li className="nav-item">
                                <CategoryItem name="Monitores"/>
                            </li>
                        </ul>         
                    </div>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
