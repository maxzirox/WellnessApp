import CardItem from '../Card/Card';
import {Container, Grid} from '@mui/material'


const CardList = ({products}) => {
   
   
    return(
      <>
        
        <Grid container spacing={4}  className='generalContainer'>
          {
            products.map( (producto) =>{
              return(
                  <Grid item lg={3} md={4} sm={6} xs={15} key={producto.id}>
                    <CardItem titulo={producto.titulo} precio={producto.precio} imagen={producto.imagen} descripcion={producto.descripcion} stock={producto.stock} id={producto.id} categoria={producto.categoria}/>
                  </Grid>
              )
            })
          }
        </Grid>
        
      </>
    )
}
export default CardList;


