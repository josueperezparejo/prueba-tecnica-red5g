import React from 'react'
import { useSelector } from 'react-redux'

export const Cards = () => {

    const precioBasico = useSelector(state => state.precio.basico)
    const precioPro = useSelector(state => state.precio.pro)
    const precioEmpresas = useSelector(state => state.precio.empresas)
    const planMensual = useSelector(state => state.precio.mensual)

    const descuentoPorcentaje = 40

    const descuentoBasico = precioBasico * 12 / 100 * descuentoPorcentaje
    const descuentoPro = precioPro * 12 / 100 * descuentoPorcentaje
    const descuentoEmpresas = precioEmpresas * 12 / 100 * descuentoPorcentaje

    const precioBasicoAnual = precioBasico * 12 - descuentoBasico
    const precioProAnual = precioPro * 12 - descuentoPro
    const precioEmpresasAnual = precioEmpresas * 12 - descuentoEmpresas


    return (
        <>
            <div className="d-flex flex-wrap gap-4 justify-content-center mb-4">
                <div className="border p-4 rounded-5 bg-black cards" style={{ width: '330px' }}>
                    <h1 className="fw-bold text-white">Básico</h1>
                    <p>Plan individual</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h2 className="fw-bold">${planMensual ? precioBasico : precioBasicoAnual}<span className="fs-6">USD<span className="text-secondary">/{planMensual ? 'Mensual' : 'Anual'}</span></span></h2>
                    <p className="fw-bold">¿Qué esta incluido?</p>

                    <ul className="lis-group m-0 p-0">
                        <li className="list-group-item opacity-25">
                            <p>✔️ Acceso de por vida a los cursos que completes</p>
                        </li>
                        <li className="list-group-item opacity-25">
                            <p>✔️ Acceso a todos los cursos</p>
                        </li>
                        <li className="list-group-item">
                            <p>✔️ Acceso a todos los proyectos</p>
                        </li>
                        <li className="list-group-item">
                            <p>✔️ Acceso a Discord</p>
                        </li>
                    </ul>

                    <a href='https://github.com/josueperezparejo' target='_blank' className="btn btn-primary rounded-5 w-100 py-2" style={{ backgroundColor: '#7f5af0' }}>Empezar</a>
                </div>

                <div className="border p-4 rounded-5 bg-dark-subtle cards" style={{ width: '330px' }}>
                    <h1 className="fw-bold text-white">Pro</h1>
                    <p>Plan individual</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h2 className="fw-bold">${planMensual ? precioPro : precioProAnual}<span className="fs-6">USD<span className="text-secondary">/{planMensual ? 'Mensual' : 'Anual'}</span></span></h2>
                    <p className="fw-bold">¿Qué esta incluido?</p>

                    <ul className="lis-group m-0 p-0">
                        <li className="list-group-item opacity-25">
                            <p>✔️ Acceso de por vida a los cursos que completes</p>
                        </li>
                        <li className="list-group-item">
                            <p>✔️ Acceso a todos los cursos</p>
                        </li>
                        <li className="list-group-item">
                            <p>✔️ Acceso a todos los proyectos</p>
                        </li>
                        <li className="list-group-item">
                            <p>✔️ Acceso a Discord</p>
                        </li>
                    </ul>

                    <a href='https://github.com/josueperezparejo' target='_blank' className="btn btn-primary rounded-5 w-100 py-2" style={{ backgroundColor: '#7f5af0' }}>Empezar</a>
                </div>

                <div className="border p-4 rounded-5 bg-black cards" style={{ width: '330px' }}>
                    <h1 className="fw-bold text-white">Empresas</h1>
                    <p>Plan para 5 miembros</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h2 className="fw-bold">${planMensual ? precioEmpresas : precioEmpresasAnual}<span className="fs-6">USD<span className="text-secondary">/{planMensual ? 'Mensual' : 'Anual'}</span></span></h2>
                    <p className="fw-bold">¿Qué esta incluido?</p>

                    <ul className="lis-group m-0 p-0">
                        <li className="list-group-item">
                            <p>✔️ Acceso de por vida a los cursos que completes</p>
                        </li>
                        <li className="list-group-item">
                            <p>✔️ Acceso a todos los cursos</p>
                        </li>
                        <li className="list-group-item">
                            <p>✔️ Acceso a todos los proyectos</p>
                        </li>
                        <li className="list-group-item">
                            <p>✔️ Acceso a Discord</p>
                        </li>
                    </ul>

                    <a href='https://github.com/josueperezparejo' target='_blank' className="btn btn-primary rounded-5 w-100 py-2" style={{ backgroundColor: '#7f5af0' }}>Empezar</a>
                </div>
            </div>
        </>
    )
}
