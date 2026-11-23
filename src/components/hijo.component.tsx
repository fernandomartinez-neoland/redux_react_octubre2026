import { useAppDispatch, useAppSelector } from "../redux/hooks.redux";
import { incrementar, decrementar,reiniciar } from "../redux/counterSlice.redux";

export function Hijo() {
  const count = useAppSelector((state) => state.contador.valor);
  const dispatch=useAppDispatch()
  return (
    <>
      <h1>Hijo</h1>
      <h2>contador Hijo: {count}</h2>
      <button onClick={()=>{dispatch(incrementar())}}>Incrementar +1</button>
      <button onClick={()=>{dispatch(decrementar())}}>decrementar -1</button>
      <button onClick={()=>{dispatch(reiniciar())}}>reiniciar</button>
    </>
  );
}
