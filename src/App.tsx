import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { Pendientes } from "./interfaces/form.interface"
import { Actividad } from "./components/Actividad";

export const App = () => {

  // Arreglo de los pendientes
  const [actividades, setActividades] = useState<Pendientes[]>([]);

  // funcion toma las actividades actuales y las agrega

  const crearActividad = (actividad: Pendientes) => {

    setActividades([
      ...actividades,
      actividad
    ]);
  }

  //Eliminar actividad por Id

  const eliminarActividad = (id: string) => {

    const nuevasActividades = actividades.filter(actividad => actividad.id !== id);
    setActividades(nuevasActividades);
  }

  return (

    <>
      <h1>Administrador de Pendientes</h1>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Formulario crearActividad={crearActividad} />
          </div>
          <div className="col-6">
            <h2>{actividades.length === 0 ? 'No hay Pendientes' : 'Administra tus pendientes'}</h2>
            {
              actividades.map((actividad: Pendientes) => (
                <Actividad eliminarActividad={eliminarActividad} key={actividad.id} actividad={actividad} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
