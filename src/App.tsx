import { useState, useEffect } from 'react'

import './App.css'
import { testingServices } from './services/testingServices'

function App() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [morty, setMorty] = useState({} as any)

  const fetchMorty = async () => {
    const { data } = await testingServices()
    setMorty(data)
  }

  useEffect(() => {
    try {
      fetchMorty()
    } catch (error) {
      console.log(error);
    }


  }, [])


  return (

    <pre className="pre">
      {JSON.stringify(morty)}
    </pre>

  )
}

export default App
