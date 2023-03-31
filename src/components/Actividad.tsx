export const Actividad = ({actividad, eliminarActividad}: any) => {

  const {nombres, apellidos, id, descripcion, fecha} = actividad;

   return (
    <div className="actividad">
      <p>Nombre: <span>{nombres}</span></p>
      <p>Apellidos: <span>{apellidos}</span></p>
      <p>Description: <span>{descripcion}</span></p>
      <p>Fecha: <span>{fecha}</span></p>

      <button onClick={()=> {eliminarActividad(id)}} className="btn btn-danger">Eliminar &times;</button>
    </div>
  );
}
