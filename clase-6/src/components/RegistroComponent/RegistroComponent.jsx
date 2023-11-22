import { useState } from "react"

export const RegistroComponent = () => {

    const [formState, setFormState] = useState({
        nombre: '',
        apellido:'',
        email:'',
        telefono:'',
        password1:'',
        password2:''

    })

    const { nombre, apellido, email, telefono, password1, password2 } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        
        setFormState({
            ...formState,
            [name]: value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Ingrese su nombre"
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        placeholder="Ingrese su apellido"
                        
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tel">Teléfono</label>
                    <input
                        type="number"
                        className="form-control"
                        name="tel"
                        placeholder="Ingrese su número de teléfono"
                        
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Ingrese su email"
                        
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirmar password</label>
                    <input type="confirmPassword"
                        className="form-control"
                        name="ConfirmPassword"
                        placeholder="Vuelva a ingresar su contraseña"
                        
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>

    )
}

export default RegistroComponent 