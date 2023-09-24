import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect } from 'react';

const ItemDetail = ({id}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            setTimeout(()=> {
                fetch("products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .finally(() => setIsLoading(false));
            }, 2000)       
    },[])


    if (isLoading) {
        return (
            <h1>Cargando...</h1>
        )
    }

    if (products.length === 0) {
        return (
            <h1>No se encontraron productos</h1>
        )
    }

    const detalle = products.find((product) => product.id == id)

    return (
        <div>
            <Card sx={{ maxWidth: 275 }} className="Card">
            <CardMedia className="CardImage" component="img" alt={detalle.nombre} height="140" image={detalle.imagen}/>
            <CardContent className="CardContent">
                <Typography gutterBottom variant="h5" component="div">{detalle.nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {detalle.descripcion}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">{detalle.precio}</Typography>
            </CardContent>
            <CardActions>
                <ItemCount/>
            </CardActions>
            </Card>
            
        </div>

    )
}

export default ItemDetail;