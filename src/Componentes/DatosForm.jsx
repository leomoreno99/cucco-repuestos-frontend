
import { useForm, ValidationError } from '@formspree/react';
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from 'react';
import { Typography } from "@mui/material";






const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
    function DatosForm() {
      const [state, handleSubmit] = useForm("xgerglgv");
      let mensaje
      if (state.succeeded) {
        mensaje =  <Alert   style={{marginTop:"15px"}} severity="success">Mensaje enviado correctamente!</Alert>
      
    // }else if(state.errors){
    //     mensaje =  <Alert   style={{marginTop:"15px"}} severity="error">Error al enviar el mensaje!</Alert>
    }
      
      return (
        // <div className="contact">
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" fontWeight="500" align="left" style={{ marginBottom:"15px"}} >
              Dejanos un mensaje
            </Typography>
        <label htmlFor="text" style={{marginBottom:"5px" , fontSize:"16px"  }}  >
            Nombre
          </label>
          <input
            id="text"
            type="text" 
            name="text"
            placeholder="Matias Bustamante"
            className="form-control"
           style={{
            marginBottom:"15px"
           }}
          />
          <ValidationError 
            prefix="Text" 
            field="text"
            errors={state.errors}
          /> 



          <label htmlFor="email" style={{marginBottom:"5px"  , fontSize:"16px"}} >
            Email
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="matias@gmail.com"
            className="form-control"
            style={{
                marginBottom:"15px"
               }}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
         
         <label style={{marginBottom:"5px" , fontSize:"16px"}} >Mensaje</label>
          <textarea 
            id="message"
            name="message"
            className="form-control"
            style={{
                marginBottom:"15px",
                resize:"none"
               }}
          />
          
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="form-control btn " style={{marginTop : "20px",  background:"#F44336", color:"#fff"}}>
           Enviar
          </button>
          
          {mensaje}
          
        </form>
        // </div>
      );
    }
    export default DatosForm;


