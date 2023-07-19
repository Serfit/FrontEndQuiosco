import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/alerta";
import { useAuth } from '../hooks/useAuth';

export default function Registro() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([])
    const {registro} = useAuth({middleware: 'guest', url: '/'})

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        registro(datos, setErrores)
       
    }

  return (
    <>
        <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
        <p className="">crea tu cuenta llenando el formulario</p>

        <div className="px-5 py-10 mt-10 bg-white rounded-md shadow-md">   
            <form 
                onSubmit={handleSubmit}
                noValidate
            >
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null }

                <div className="mb-4">
                    <label 
                        className="text-slate-800" 
                        htmlFor="name"
                    >Nombre: </label>
                    <input 
                        type="text" 
                        id="name"
                        className="w-full p-3 mt-2 bg-gray-50"
                        name="name"
                        placeholder="Tu Nombre"   
                        ref={nameRef}                     
                    />
                </div>

                <div className="mb-4">
                    <label 
                        className="text-slate-800" 
                        htmlFor="email"
                    >Email: </label>
                    <input 
                        type="email" 
                        id="email"
                        className="w-full p-3 mt-2 bg-gray-50"
                        name="email"
                        placeholder="Tu Email"  
                        ref={emailRef}                      
                    />
                </div>

                <div className="mb-4">
                    <label 
                        className="text-slate-800" 
                        htmlFor="password"
                    >Password: </label>
                    <input 
                        type="password" 
                        id="password"
                        className="w-full p-3 mt-2 bg-gray-50"
                        name="password"
                        placeholder="Tu Password"   
                        ref={passwordRef}                     
                    />
                </div>

                <div className="mb-4">
                    <label 
                        className="text-slate-800" 
                        htmlFor="password_confirmation"
                    >Repetir Password: </label>
                    <input 
                        type="password" 
                        id="password_confirmation"
                        className="w-full p-3 mt-2 bg-gray-50"
                        name="password_confirmation"
                        placeholder="Repite Password" 
                        ref={passwordConfirmationRef}                       
                    />
                </div>
                
                <input 
                    type="submit" 
                    value="Crear Cuenta"
                    className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 cursor-pointer hover:bg-indigo-800"
                />
            </form>
        </div>
        <nav className="mt-5">
            <Link to="/auth/login" className="hover:text-indigo-600">
                ¿Ya tienes cuenta? Inicia Sesión
            </Link>
        </nav>
    </>
  )
}
