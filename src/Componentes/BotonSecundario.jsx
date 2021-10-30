import { Button } from "@mui/material";

const BotonSecundario = (props) => {
  return (
    <Button
      color="secondary"
      variant="outlined"
      style={{
        height: props.alto,
        paddingTop: 6,
      }}
    >
      {props.texto}
    </Button>
  );
};

export default BotonSecundario;