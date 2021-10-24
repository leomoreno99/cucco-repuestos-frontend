import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import publ from '../img/publicidad.jpg';

const useStyle = makeStyles({
    imgPub: {
        maxHeight:'100%',
        margin:'auto',
        hoverflow:'hidden'
    }
  })

export default function Publicidad() {

  const classes = useStyle();

  return (
    
         <Box component="div" sx={{m:0, p:0, boxSizing:"border-box", maxHeight:'100%', margin:'auto', hoverflow:'hidden' }}>
            
                <img className={classes.imgPub} src={publ} alt=""/>

        </Box>
  );
}