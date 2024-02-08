import { useAppDispatch, useAppSelector } from "../app/hooks";
import { amountAdded, incremented } from "../features/counter/counter-slice";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  
  //console.log(marker);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(amountAdded(3));
  }

  return (
    <>
      <button onClick={handleClick}>count is: {count}</button>
    </>
  );
}
