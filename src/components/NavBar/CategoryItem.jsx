import { NavLink } from "react-router-dom";

const CategoryItem = ({name, category}) => {
    return (
        <NavLink className="nav-link" to={`/category/${category}`}>{name}</NavLink>
    )
}

export default CategoryItem;