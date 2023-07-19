import useSWR from 'swr'
import { productos as data} from '../data/Productos'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'
import clienteAxios from '../config/axios'

export default function Inicio() {

  const { categoriaActual } = useQuiosco()

  // Consulta WSR
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data)

  const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
    refreshInterval:1000
  })

  if(isLoading) return 'Cargando...';
  const productos = data.data.filter(producto => producto.categoria_id ===  categoriaActual.id)

  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
      <p className="my-10 text-2xl">
        Elige y personaliza tu pedido a continuación
      </p>

      <div className="grid grid-cols-1 gap-4 sm:col-span-2 md:grid-cols-3 xl:grid:cols:4">
        {productos.map(producto => (
          <Producto
            key={producto.imagen}
            producto={producto}
            botonAgregar={true}
          />
        ))}
      </div>
    </>
  )
}
