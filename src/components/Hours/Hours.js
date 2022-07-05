import { Button, TextField, Grid } from '@mui/material'
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {addDoc, collection} from 'firebase/firestore'
import dataBase from '../../utils/firebaseConfig'
import Swal from 'sweetalert2'

const horas = [
  '8:30 a 9:30 am',
  '10:00 a 11:00 am',
  '11:30 a 12:30 PM',
  '13:00 a 14:00 PM',
  '14:30 a 15:30 PM',
  '16:00 a 17:00 PM',
  '17:30 a 18:30 PM',
  '19:00 a 20:00 PM',
  '20:30 a 21:30 PM'
];



const Hours = () =>{
    const [value, setValue] = useState([]);
    const [success, setSuccess] = useState()

    const agendar = async (newAgenda) => {
      const agendaFirebase = collection(dataBase, 'agenda')
      const agendaDoc = await addDoc(agendaFirebase, newAgenda)
      setSuccess(agendaDoc.id)
      console.log("agendaDocID: ", agendaDoc.id)
    }

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    const [formValue, setFormValue] = useState({
        nombre: '',
        mail: '',
        horario: ''
        
    })

    const handleChanges = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
    };
  
    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormValue({...formValue, horario: value})
        agendar({...formValue, horario: value})
        Swal.fire(
          'felicidades se agendo con exito',
          `Cod: ${success} <br><br> ${formValue.nombre} se ha enviado el detalle a su correo ${formValue.mail} <br> Horario agendado: ${value}`,
          'success'
        )
        console.log("succes: ", success)
    }

    return(
        
        <form onSubmit={handleSubmit}>
          <Grid item container direction="column" xs={12} sm={12}>
            <TextField
              required
              id="nombre"
              name="nombre"
              label="Nombre"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={formValue.nombre}
              onChange={handleChanges}
              sx={{ width: 250, alignSelf: 'center', marginTop: 2 }}
            />
            <TextField
              required
              id="mail"
              name="mail"
              label="Mail"
              fullWidth
              autoComplete="Mail"
              variant="standard"
              value={formValue.mail}
              onChange={handleChanges}
              sx={{ width: 250, alignSelf: 'center', marginTop: 2 }}
            />
          
            <InputLabel id="demo-simple-select-label" >horas</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="horas"
              onChange={handleChange}
              sx={{ width: 250, alignSelf: 'center', marginTop: 2 }}
              
            >
              {horas.map((hora) => (
                <MenuItem
                  key={hora}
                  value={hora}
                  sx={{ width: 250, alignSelf: 'center', marginTop: 2 }}
                >
                  {hora}
                </MenuItem>
              ))}
            </Select>
            <Button
              sx={{ width: 250, alignSelf: 'center', marginTop: 2, backgroundColor: '#ff8800' }}
              type='submit'
              variant='contained'
              
            >
                Agendar
            </Button>
          </Grid>
        </form>
    
    )
}

export default Hours