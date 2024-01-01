import { useDispatch } from "react-redux";
import Header from "./Component/Header";
import { useEffect } from "react";
import Item from "./Page/Item";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_ITEMS" });
  }, []);

  return (
    <>
      <Header />
      <Item />
    </>
  );
}

export default App;
