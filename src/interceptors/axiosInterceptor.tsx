import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export const axiosInterceptor = () => {

    const updateHeader = (config: AxiosRequestConfig) => {
        const token = "ABCDEF" // El token se maneja de adentro desde el localStorage, no usar un provider de Redux porque se replica en toda la app.
        const newHeaders = {
            Authorization: token,
            "Content-Type": "application/json",
        }
        config.headers = newHeaders
        return config
    }

    axios.interceptors.request.use((config) => {
        if (config.url?.includes("assets")) return config
        return updateHeader(config)
    }
        , (error) => {
            console.log('axiosInterceptor request error', error)
            return Promise.reject(error)
        })

    axios.interceptors.response.use(
        (response: AxiosResponse) => {
            console.log("response", response);
            return response
        },
        (error) => {
            console.log('axiosInterceptor response error', error)
            return Promise.reject(error)
        }
    )
}
