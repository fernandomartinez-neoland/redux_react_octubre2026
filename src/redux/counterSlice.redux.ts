import { createSlice } from '@reduxjs/toolkit'


export interface CounterState{
    valor:number
}


const initialState: CounterState = {
  valor: 0
}

export const counterSlice = createSlice({
    name:'contador',
    initialState,
    reducers:{
        incrementar: state=>{
            state.valor+=1;
        },
        decrementar: state=>{
            state.valor-=1;
        },
        reiniciar: state=>{

            state.valor=0
        }

    }
})


export const { incrementar, decrementar, reiniciar } = counterSlice.actions

export default counterSlice.reducer