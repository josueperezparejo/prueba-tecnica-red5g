import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basico: 0,
    pro: 0,
    empresas: 0,
    mensual: true
}

export const precioSlice = createSlice({
    name: 'precio',
    initialState,
    reducers: {
        setBasico: (state, { payload }) => {
            state.basico = payload
        },
        setPro: (state, { payload }) => {
            state.pro = payload
        },
        setEmpresas: (state, { payload }) => {
            state.empresas = payload
        },
        changePlan: (state) => {
            state.mensual = !state.mensual
        }
    },
})

export const { setBasico, setPro, setEmpresas, changePlan } = precioSlice.actions

export default precioSlice.reducer