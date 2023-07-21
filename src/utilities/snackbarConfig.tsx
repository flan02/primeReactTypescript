import { useSnackbar, VariantType, } from "notistack"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let useSnackbarRef: any

export const SnackbarkConfig: React.FC = () => {
    useSnackbarRef = useSnackbar()
    return null

}

export const Snackbar = {

    toast(msg: string, variant: VariantType = "default") {
        useSnackbarRef.enqueueSnackbar(msg, { variant }) //va poniendo los mensajes en la cola 
    },
    success(msg: string) {
        this.toast(msg, "success")
    },
    error(msg: string) {
        this.toast(msg, "error")
    },
    warning(msg: string) {
        this.toast(msg, "warning")
    },
    info(msg: string) {
        this.toast(msg, "info")
    }

}
