import Form from "react-bootstrap/Form";

// componente que realiza la búsqueda que se ingresa en el input buscador
const Buscador = ({ setFiltro, listaColaboradores }) => {
  const buscarColaborador = (event) => {
    if (event.target.value === "") {
      setFiltro(listaColaboradores);
    } else {
      const results = [...listaColaboradores].filter((colaborador) =>
        Object.values(colaborador).some((valor) =>
          String(valor).toLowerCase().includes(event.target.value)
        )
      );
      setFiltro(results);
    }
  };
  return (
    <>
      <Form.Control
        className="buscador"
        placeholder="Buscar colaborador"
        onChange={buscarColaborador}
      />
    </>
  );
};

export default Buscador;
