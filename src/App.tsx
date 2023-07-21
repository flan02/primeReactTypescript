import { useState, useEffect } from 'react'
import { SnackbarProvider } from 'notistack'
import './App.css'
import { testingServices } from './services/testingServices'
import { SnackbarkConfig } from './utilities/snackbarConfig'

function App() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [morty, setMorty] = useState({} as any)

  const fetchMorty = async () => {
    const { data } = await testingServices()
    setMorty(data)
  }

  useEffect(() => {
    fetchMorty()  // El posible error de que no se pueda obtener el personaje se maneja en el interceptor
  }, [])


  return (
    <SnackbarProvider>
      <SnackbarkConfig />
      <pre className="pre">
        {JSON.stringify(morty)}
      </pre>

    </SnackbarProvider>
  )
}

export default App
