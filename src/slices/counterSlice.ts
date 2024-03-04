import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  //definisce la parte iniziale della action type string
  //esempio: la stringa generata sarà in questo caso "counter/[action]"
  //se prendiamo l'azione "increment", la stringa finale sarà "counter/increment"
  name: 'counter',
  initialState: {value: 0},
  //ogni reducer è una funzione che ritorna un action
  reducers: {
    // descrive le azioni che createSlice andrà ad utilizzare con createAction()
    // NON sono la stessa cosa delle funzioni che andremo a chiamare
    // se forniamo solo un argomento (lo state), verrà prodotta la funzione
    // [action]: ActionCreatorWithoutPayload (noArguments: void)
    // mentre se forniamo un secondo argomento allora produrrà la funzione:
    // [action]: ActionCreatorWithPayload (payload: T)
    // ergo, il secondo argomento rappresenta il payload dell'azione (necessario).
    increment: (state, action: PayloadAction<number>) => {
      return {value: state.value + action.payload}
    },
    decrement: (state, action: PayloadAction<number>) => {
      if (state.value - action.payload <= 0) return {value: 0}
      return {value: state.value - action.payload}
    },
    set: (state, action: PayloadAction<number>) => {
      return {value: action.payload}
    },
  }
});

//poiche' i componenti di React non possono comunicare direttamente con lo store
// l'unico modo in react-redux di comunicare lo stato all'app
// e' quello di utilizzare una selector function
// l'hook useSelector() comunica direttamente con lo store (store.getState())
// se l'abbiamo conigurato all'interno di _App.tsx come <Provider store={store}>
// quindi tutto quello che dobbiamo fare e' passare questa funzione dentro useSelector()
export const selectCount = (state: {count: {value: number}}) => state.count.value;
export const { increment, decrement, set } = counterSlice.actions
//esportiamo il reducer
//affinche' lo store possa essere inizializzato con questo reducer
export default counterSlice.reducer;