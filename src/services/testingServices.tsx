import axios from "axios"

//TODO Si la ruta api cambia, la cambiamos aqui y no en todos los componentes que la usan

export const testingServices = () => {
    return axios.get("https://rickandmortyapi.com/api/character/2")

}
