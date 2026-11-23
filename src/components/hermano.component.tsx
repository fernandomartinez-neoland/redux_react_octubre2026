import { useAppDispatch, useAppSelector } from "../redux/hooks.redux";
import { incrementar, decrementar,reiniciar } from "../redux/counterSlice.redux";

export function Hermano() {
  const count = useAppSelector((state) => state.contador.valor);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Hermano</h1>
      <h2>contador Hermano: {count}</h2>
      <button
        onClick={() => {
          dispatch(incrementar());
        }}
      >
        Incrementar +1
      </button>
      <button
        onClick={() => {
          dispatch(decrementar());
        }}
      >
        decrementar -1
      </button>
      <button
        onClick={() => {
          dispatch(reiniciar());
        }}
      >
        reiniciar
      </button>
    </>
  );
}
