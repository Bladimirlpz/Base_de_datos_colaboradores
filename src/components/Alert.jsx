import Alert from "react-bootstrap/Alert";

// alerta que se dispara en caso de que las condiciones de formulario se cumplan o no
const FormAlert = ({ variant, exito, errores }) => {
  return (
    <>
      <Alert className="bootstrap-alert" variant={variant}>
        {exito}
        {errores}
      </Alert>
    </>
  );
};

export default FormAlert;
