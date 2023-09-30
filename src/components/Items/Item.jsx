import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./Item.css"

const Item = ({id, nombre, imagen, precio = 0, descripcion}) => {

    return (
            <Card sx={{ maxWidth: 275 }} className="Card">
            <CardMedia className="CardImage" component="img" alt={nombre} height="140" image={imagen}/>
            <CardContent className="CardContent">
                <Typography gutterBottom variant="h5" component="div">{nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">$ {precio}</Typography>
            </CardContent>
            <CardActions>
                <Link to={`/item/${id}`}><button className="botonDetalle">Detalles</button></Link>
            </CardActions>
            </Card>
    )
}

export default Item;