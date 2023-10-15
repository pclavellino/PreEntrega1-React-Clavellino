import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "../ItemCount/ItemCount";
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useGetProductById } from '../../hooks/useGetProductById';
import { CartContext } from '../../context/CartContext';
import "./ItemDetail.css";

const ItemDetail = ({itemId}) => {

    const { addItem } = useContext(CartContext);

    let [ quantity, setQuantity ] = useState(0)

    const { product, isLoading } = useGetProductById(parseInt(itemId));

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const item = {
            id : product.id,
            nombre : product.nombre,
            precio : product.precio        
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
            <CardMedia className="CardImage" component="img" alt={product.nombre} height="140" image={product.imagen}/>
            <CardContent className="CardContent">
                <Typography gutterBottom variant="h5" component="div">{product.nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.descripcion}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">$ {product.precio}</Typography>
            </CardContent>
            <CardActions>
                { quantity > 0 ? 
                <Link className="finalizarCompra" to="/cart">Finalizar Compra</Link> : 
                <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd}/>
                }
            </CardActions>
            <p>Stock Disponible: {product.stock}</p>
            </Card>
        </div>
    )
}

export default ItemDetail;