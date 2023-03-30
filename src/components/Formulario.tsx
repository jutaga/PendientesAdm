export const Formulario = () => {

    return (
        <>

            <h2>Crear Pendiente</h2>

            <form >
                <label htmlFor="nombre" className="form-label" >Nombres</label>
                <input autoComplete="off" id="nombre" className="form-control mb-3" type="text" placeholder="Introduce el nombre" />

                <label htmlFor="apellidos" className="form-label" >Apellidos</label>
                <input autoComplete="off" id="apellidos" className="form-control mb-3" type="text" placeholder="Introduce apellidos" />

                <label htmlFor="fecha" className="form-label" >Fecha</label>
                <input id="fecha" className="form-control mb-3" type="date" />

                <label htmlFor="fecha" className="form-label" >Actividad - Descripcion</label>
                <textarea style={{ height: '200px' }} id="fecha" className="form-control mb-3" />


                <button className="btn btn-outline-light float-lg-end">
                    Agregar Pendiente
                </button>

            </form>
        </>
    )
}
