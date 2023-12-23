import Table from "react-bootstrap/Table";

// componente listado que muestra la lista de colaboradores base más los usuarios nuevos
const Listado = ({ listaColaboradores }) => {
  return (
    <div className="container__table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {listaColaboradores.map((colaborador, indice) => (
            <tr key={indice}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
