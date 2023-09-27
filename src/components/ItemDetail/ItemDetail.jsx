import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, nombre, precio, categoria, imagen, descripcion}) => {

    return (
        <div>
            <Card sx={{ maxWidth: 275 }} className="Card">
            <CardMedia className="CardImage" component="img" alt={nombre} height="140" image={imagen}/>
            <CardContent className="CardContent">
                <Typography gutterBottom variant="h5" component="div">{nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">{precio}</Typography>
            </CardContent>
            <CardActions>
                <ItemCount/>
            </CardActions>
            </Card>
        </div>
    )
}

export default ItemDetail;