import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material'
import './Card.css'
import { Link } from 'react-router-dom'


const CardItem = ({ imagen, titulo, precio, descripcion, stock, id, categoria }) => {

    return(

        <CardContent className='cardContenedor'>
            <div className="cardItem">    
            <img src={`/${imagen}`} alt="Producto"/>       
            <h3>{titulo}</h3>
            <Button  variant={'contained'} style={{backgroundColor: 'orange'}} >
                <Link to={`/productos/${id}`} style={ {textDecoration: 'none', color: 'aliceblue' } } >Detalles</Link>
            </Button>  
            </div>
        </CardContent>
        
        
    )
}

export default CardItem