import { Button } from "@mui/material";

const BotonPrimario = (props) => {
  return (
    <Button
      color="secondary"
      variant="contained"
      href={props.href}
      onClick={()=>{props.funcionOnClick()}}
      style={{
        height: 46,
        paddingTop: 6,
      }}
    >
      {props.texto}
    </Button>
  );
};

export default BotonPrimario;
