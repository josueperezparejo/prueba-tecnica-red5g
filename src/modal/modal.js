import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useDispatch } from 'react-redux'
import { setBasico, setPro, setEmpresas } from '../slice/precioSlice'

export const modalSwal = () => {
    const dispatch = useDispatch()

    return () => {
        const MySwal = withReactContent(Swal)

        Swal.fire({
            title: 'Introduzca Tarifa Basica',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            showLoaderOnConfirm: true,
            preConfirm: (precio) => {
                dispatch(setBasico(precio))
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then(() => {
            Swal.fire({
                title: 'Introduzca Tarifa Pro',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
                showLoaderOnConfirm: true,
                preConfirm: (precio) => {
                    dispatch(setPro(precio))
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then(() => {
                Swal.fire({
                    title: 'Introduzca Tarifa para Empresas',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Aceptar',
                    showLoaderOnConfirm: true,
                    preConfirm: (precio) => {
                        dispatch(setEmpresas(precio))
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                })
            })
        })
    }
}