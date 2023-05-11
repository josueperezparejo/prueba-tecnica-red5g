import React from 'react'
import { useDispatch } from 'react-redux'
import { changePlan } from '../slice/precioSlice'

export const PlanForm = () => {
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(changePlan())
    }

    return (
        <>
            <div className="d-flex gap-2 justify-content-center text-white mb-3">
                <p>Mensual</p>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onChange={() => handleChange()} role="switch" id="flexSwitchCheckDefault" />
                </div>
                <p>Anualmente (-40%)</p>
            </div>
        </>
    )
}
