import useSWR from 'swr'
import clienteAxios from '../config/axios'
import Producto from '../components/Producto'

export default function Productos() {

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher =() => clienteAxios('/api/productos', {
    headers: {
      Authorization:`Bearer ${token}`
    }
  }).then(datos => datos.data)

  const { data, error, isLoading } = useSWR('(api/productos', fetcher, {refreshInterval:10000})

  if(isLoading) return 'Cargando...'
  return (
    <div>
      <h1 className="text-4xl font-black">Productos</h1>
      <p className="my-10 text-2xl">
        Maneja la disponibilidad desde aquí.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:col-span-2 md:grid-cols-3 xl:grid:cols:4">
        {data.data.map(producto => (
          <Producto
            key={producto.imagen}
            producto={producto}
            botonDisponible={true}
          />
        ))}
      </div>

    </div>
  )
}
