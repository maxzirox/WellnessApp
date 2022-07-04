import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Hours from '../Hours/Hours'
import { useState } from 'react'




const Schedule = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
    <Box sx={{ width: '100%', typography: 'body1', alignContent: 'center' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent:'center' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Lunes" value="1" />
            <Tab label="Martes" value="2" />
            <Tab label="Miercoles" value="3" />
            <Tab label="Jueves" value="4" />
            <Tab label="Viernes" value="5" />
            <Tab label="Sabado" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1"><Hours  /></TabPanel>
        <TabPanel value="2"><Hours  /></TabPanel>
        <TabPanel value="3"><Hours  /></TabPanel>
        <TabPanel value="4"><Hours  /></TabPanel>
        <TabPanel value="5"><Hours  /></TabPanel>
        <TabPanel value="6"><Hours  /></TabPanel>
      </TabContext>
    </Box>

    )
}

export default Schedule