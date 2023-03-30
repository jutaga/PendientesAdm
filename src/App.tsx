import { Formulario } from "./components/Formulario"

export const App = () => {
  return (

    <>
      <h1>Administrador de Pendientes</h1>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Formulario/>
          </div>
          <div className="col-6">
            <p className="text-light">
              
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
