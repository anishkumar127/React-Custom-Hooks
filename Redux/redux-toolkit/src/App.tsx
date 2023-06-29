import Counter from "./components/Counter";
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { decrement, increment } from "./store/slices/counter";

function App() {
  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <span>count is : {count} </span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <hr />

      <Counter />
    </>
  )
}

export default App
