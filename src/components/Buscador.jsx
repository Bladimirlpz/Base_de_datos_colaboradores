import Form from "react-bootstrap/Form";

// componente que realiza el seteo de la búsqueda que se ingresa en el input buscador
const Buscador = ({ searchPerson, buscarColaborador }) => {
  return (
    <>
      <Form.Control
        className="buscador"
        placeholder="Buscar colaborador"
        value={searchPerson}
        onChange={buscarColaborador}
      />
    </>
  );
};

export default Buscador;
