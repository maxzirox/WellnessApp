import { Container, Divider, Grid, Paper, Typography} from '@mui/material';
import { Button } from '@mui/material'
import Modal from '../Modal/Modal'
import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './Item.css'

//creamos un componente funcional en una constante funcional de tipo flecha y le pasamos propiedades
const Item = ({ imagen, titulo, precio, descripcion, stock, id }) => {

    return(
        
        <Container maxWidth='lg'>
            
            
        <Paper  variant="outlined">
        <h2>{titulo}</h2>
        <Grid container spacing={2} alignItems="center" justifyContent="space-evenly" flexWrap='wrap'>
        <div className="detail-product-image">
                <img src={`/${imagen}`} alt="imgProduct"/>
            </div>
            <Grid >
                <Paper elevation={4}>
                <Container className='controlContainer'>
                <Grid container direction="column" justifyContent="center" alignItems="flex-end">
                
                    <Grid textAlign='center'><h3> $ {precio}</h3></Grid>
                    <ItemCount stockPro={stock} initial={1}/>
                </Grid>
                </Container >
                </Paper>
            </Grid>
        </Grid>
        <h3>Descripción:</h3>
        <Typography variant="body1" margin="20px">{descripcion}</Typography>
        </Paper>
        <Divider variant="middle" />
    
    </Container>
    )
}
//exportamos el componente
export default Item