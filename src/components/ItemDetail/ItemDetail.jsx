import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "../ItemCount/ItemCount";
import { useGetProductById } from '../../hooks/useGetProductById';
import Loading from '../Loading/Loading';

const ItemDetail = ({itemId}) => {

    const { product, isLoading } = useGetProductById(parseInt(itemId));

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
                <ItemCount stock={product.stock} initial={1}/>
            </CardActions>
            <p>Stock Disponible: {product.stock}</p>
            </Card>
        </div>
    )
}

export default ItemDetail;