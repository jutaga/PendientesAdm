import { useState } from "react"
import { Pendientes } from "../interfaces/form.interface";
import { v4 as uuidv4 } from 'uuid';


export const Formulario = ({ crearActividad }: any) => {

    //Crear el state de pendientes
    const [pendientes, setPendientes] = useState<Pendientes>({
        nombres: '',
        apellidos: '',
        fecha: '',
        descripcion: '',
        id: ''
    });

    const [error, setError] = useState<boolean>(false);

    //handleChange para actualizar el pendiente
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setPendientes((pendientes: Pendientes) => ({
            ...pendientes,
            [name]: value.trim(),
        }));

    };

    // Extrar valores
    const { apellidos, descripcion, fecha, nombres } = pendientes;

    //Enviar el formulario
    const submitPendiente = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Validar el formulario
        if (!nombres || !apellidos || !fecha || !descripcion) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        //Actualizar el error
        setError(false);

        //Asignar un ID
        const pendienteConId = {
            ...pendientes,
            id: uuidv4(),
        };
        setPendientes(pendienteConId);


        //Crear la cita
        crearActividad(pendienteConId);

        //Reiniciar el form
        setPendientes({
            nombres: '',
            apellidos: '',
            fecha: '',
            descripcion: '',
            id:''
        })
    }

    return (
        <>
            <h2>Crear Pendiente</h2>
            {
                error && <div className="alert alert-danger text-center" role="alert">
                    Debes llenar todos los campos</div>
            }

            <form onSubmit={submitPendiente}>
                <label htmlFor="nombre" className="form-label" >Nombres</label>
                <input value={nombres} onChange={handleChange} name="nombres" autoComplete="off" id="nombre" className="form-control mb-3" type="text" placeholder="Introduce el nombre" />

                <label htmlFor="apellidos" className="form-label" >Apellidos</label>
                <input value={apellidos} onChange={handleChange} name="apellidos" autoComplete="off" id="apellidos" className="form-control mb-3" type="text" placeholder="Introduce apellidos" />

                <label htmlFor="fecha" className="form-label" >Fecha</label>
                <input value={fecha} onChange={handleChange} name="fecha" id="fecha" className="form-control mb-3" type="date" />

                <label htmlFor="fecha" className="form-label" >Actividad - Descripcion</label>
                <textarea value={descripcion} onChange={handleChange} name="descripcion" style={{ height: '200px' }} id="fecha" className="form-control mb-3" />


                <button className="btn btn-outline-light float-lg-end">
                    Agregar Pendiente
                </button>
            </form>

        </>
    )
}
