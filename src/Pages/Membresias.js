import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import '../App.css';
import {useState, useEffect, useContext} from 'react';
import {  collection, getDocs } from 'firebase/firestore'
import dataBase from '../utils/firebaseConfig'
import CartContext from '../context/CartContext';
import Swal from 'sweetalert2'


function Membresias() {
  const { addProductToCart } = useContext(CartContext)
  const [membresia, setMembresia] = useState([]) 
  
  const getMembresias = async () => {
    const membresiasSnapshot = await getDocs(collection(dataBase, 'membresias'))
    const membresiaList = membresiasSnapshot.docs.map((item) => {
        let membresia = item.data()
        membresia.id = item.id
        return membresia
    })
    return membresiaList
}
  useEffect( () => {
    getMembresias()
    .then( (response) => {
      setMembresia(response)
      
      })

  }, [membresia])

   const onAdd = (membresia) => {
      addProductToCart({...membresia, cantidad: 1})
      Swal.fire(
        `${membresia.titulo} agregado`,
        `al carrito`,
        'success'
      )
   }

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container className='containerMem' disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Membresias
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Disfruta de nuestras ofertas en membresias, todos los planes son con matricula costo $0
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {membresia.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.id}
              xs={12}
              sm={tier.titulo === 'plan Standar' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.titulo}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.titulo === 'Plan Full' ? <StarIcon /> : null}
                  sx={{
                    backgroundColor: 'orange'
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.precio}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /clp
                    </Typography>
                  </Box>
                  <ul>
                    
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        style={{ display: 'flex', flexDirection: 'columns'}}
                      >
                        {tier.descripcion}
                      </Typography>
                    
                  </ul>
                </CardContent>
                <CardActions>
                  <Button  onClick={() => onAdd(tier)} fullWidth variant="outlined" style={{backgroundColor: 'orange', color: 'black'}}>
                    Agregar 
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </React.Fragment>

  );
}

export default  Membresias