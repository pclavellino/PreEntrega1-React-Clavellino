import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "../ItemCount/ItemCount";
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useGetProductById } from '../../hooks/useGetProductById';
import { CartContext } from '../../context/CartContext';
import "./ItemDetail.css";

const ItemDetail = ({itemId}) => {

    const { addItem, isInCart } = useContext(CartContext);

    const { product, isLoading } = useGetProductById(itemId);

    const handleOnAdd = (quantity) => {

        const item = {
            id : product.id,
            name : product.name,
            price : product.price,
            description : product.description        
        }

        addItem(item, quantity)

    }

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    if (product.length === 0) {
        return (
            <h1>No se encontraron productos</h1>
        )
    }

    return (
        <div>
            <Card sx={{ maxWidth: 275 }} className="Card">
            <CardMedia className="CardImage" component="img" alt={product.name} height="140" image={product.image}/>
            <CardContent className="CardContent">
                <Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">$ {product.price}</Typography>
            </CardContent>
            <CardActions>
                {   isInCart(product.id) ? 
                    <div className="alreadyInCart">
                        <p>Producto ya agregado al carrito</p>
                        <Link className="finalizarCompra" to="/cart">Finalizar Compra</Link>
                    </div> : 
                    <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd}/>        
                }
            </CardActions>
            <p>Stock Disponible: {product.stock}</p>
            </Card>
        </div>
    )
}

export default ItemDetail;