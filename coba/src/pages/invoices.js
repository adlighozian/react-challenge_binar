import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getContactList } from "../stores/actions/contactAction";
import "../App.css";

function App() {
  const { getListContactResult, getListContactLoading, getListContactError } =
    useSelector((state) => state.contactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactList());
  }, [dispatch]);
  console.log(getListContactResult)

  return (
    <div className="App">
      <div>
        <h1>Ini kakeknya</h1>
        <div>
          {getListContactResult.length > 0 && getListContactResult.map(item => {return (<h1>{item.name}</h1>)}) } 
        </div>
      </div>
    </div>
  );
}

export default App;
