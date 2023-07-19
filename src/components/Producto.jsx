import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {

    const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useQuiosco();
    const { nombre, imagen, precio } = producto

    return (
        <div className="p-3 bg-white border shadow-md">
            <img 
                src={`/img/${imagen}.jpg`} 
                alt={`imagen ${nombre}`}
                className="w-full" 
            />

            
                <h3 className="p-5 text-2xl font-bold">{nombre}</h3>
                <div className="">
                    <p className="text-4xl font-extrabold text-amber-500">
                        {formatearDinero(precio)}
                    </p>

                    {botonAgregar && (
                        <button
                            type="button"
                            className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 hover:bg-indigo-800"
                            onClick={() => {
                                handleClickModal();
                                handleSetProducto(producto);
                            }}
                        >
                            Agregar
                        </button>
                    )}
                    
                    {botonDisponible && (
                        <button
                            type="button"
                            className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 hover:bg-indigo-800"
                            onClick={() => handleClickProductoAgotado(producto.id)}
                        >
                            Producto Agotado
                        </button>
                    )}
            </div>
        </div>
    )
}
