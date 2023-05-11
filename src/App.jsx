import { useEffect } from 'react'
import { Cards, PlanForm } from './components'
import { modalSwal } from './modal/modal'

function App() {

  const modal = modalSwal()

  useEffect(() => {
    modal()
  }, [])

  return (
    <>
      <div className="container">
        <p className='text-center mt-5 ' style={{ color: '#7f5af0' }}>PRECIOS</p>
        <h2 className="text-center fw-bold text-white">Desbloquea tu creatividad.</h2>
        <h2 className="text-center fw-bold text-white">¡Prueba el plan Pro gratis!.</h2>

        <p className="text-center mx-auto" style={{ width: '330px' }}>Comienza tu prueba gratuita con acceso a todo el contenido de manera gratuita por 7 días.</p>

        <PlanForm />

        <Cards />

      </div>
    </>
  )
}

export default App
