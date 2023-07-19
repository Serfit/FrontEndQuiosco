import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'


export default function AdminSidebar() {

    const { logout } = useAuth({middleware: 'auth'});
    return (
        <aside className="h-screen md:w-72">
            <div className="p 4">
                <img
                    src='/img/logo.svg'
                    alt='Imagen logotipo'
                    className='w-40'
                />
            </div>

            <nav className='flex flex-col p-4'>
                <Link to="/admin" className='flex items-center gap-4 border w-full p-3 bg-amber-400 hover:bg-amber-400 cursor-pointer'>Ordenes</Link>
                <Link to="/admin/productos" className='flex items-center gap-4 border w-full p-3 bg-amber-400 hover:bg-amber-400 cursor-pointer'>Productos</Link>
            </nav>

            <div className="px-5 my-5">
                <button
                    type="button" 
                        className="w-full p-3 font-bold text-center text-white truncate bg-red-500"
                        onClick={logout}
                    >
                        Cerra Sesión
                </button>
            </div>
        </aside>
    )
}
