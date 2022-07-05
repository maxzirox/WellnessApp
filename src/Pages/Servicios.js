import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import serviciosMock from '../utils/serviciosMock';
import { useState, useEffect } from 'react';
import '../css/servicios.css';
import Swal from 'sweetalert2'


const Servicios = () => {
    const [servicio, setServicio] = useState([])

    const getServicios = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() =>{
            resolve(serviciosMock)
          }, 2000)
        })
      }
    
    useEffect( () => {
        getServicios()
        .then( (respuesta) => {
        setServicio(respuesta)
        })
    }, [])



    return (
        <>
        <div className='section-title text-center'>
          <h2>Agenda uno de nuestros servicios</h2>
        </div>
        
        { servicio.map((d, i) => (
                
                <Card  key={i} variant="outlined" style={ {background: 'aliceblue', marginBottom: 40 }}>
                  <div className='cardServ'>
                <Typography gutterBottom variant="h4" component="div" color="text.primary">
                    {d.job}
                  </Typography>
                <CardMedia
                  component="img"
                  alt="persona"
                  height="140"
                  image={`${d.img}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {d.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {d.text}
                  </Typography>
                </CardContent>
                <CardActions className='botonesServ'>
                  <Button 
                    onClick={()=>{Swal.fire({
                    title: `${d.job}`,
                    text: `${d.desc}`,
                    imageUrl: `${d.img}`,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: `${d.name}`,
                    })}} 
                    className='botonB' 
                    variant="outlined" 
                    size="small"
                    >
                      Mas info
                    </Button>
                </CardActions>
                </div>
              </Card>
              
            
              ))
            }
        
        
      </>
    )
}

export default Servicios