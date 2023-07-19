import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import Resumen_Producto from "./Resumen_Producto";
import { useAuth } from "../hooks/useAuth";

export default function Resumen() {

  const {pedido, total, handleSubmitNuevaOrden} = useQuiosco();
  const { logout } = useAuth({});

  const comprobarPedido = () => pedido.length === 0;

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmitNuevaOrden(logout);
  }

  return (
    <aside className="h-screen p-5 overflow-y-scroll w-72">
      <h1 className="text-4xl font-black">
        Mi Pedido
      </h1>
      <p className="my-5 text-lg">
        Aquí podras ver el resumen y totales de tu pedido
      </p>

      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-2xl text-center">
            No hay elementos en tu pedido aún 
          </p>
        ) : (
          pedido.map(producto => (
            <Resumen_Producto 
              key={producto.id}
              producto={producto}
            />
          ))
        )}
      </div>

      <p className="mt-10 text-xl">
        Total: {''}
        {formatearDinero(total)}
      </p>

      <form 
        className="w-full"
        onSubmit={handleSubmit}
      >

        <div className="mt-5">
          <input
            type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-100' :  'bg-indigo-600 hover:bg-indigo-800'} w-full px-5 py-2 font-bold text-center text-white uppercase rounded cursor-pointer `}
            value={'Confirmar Pedido'}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </aside>
  )
}
