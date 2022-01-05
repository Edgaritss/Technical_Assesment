import Store from './components/Store';
import {useState} from "react";

function App(){
  const [storeItem,setStoreItem] = useState([
  {
    title:"Computer",
    price:100
  },
  {
    title:"Mouse",
    price:400
  },
  {
    title:"TV",
    price:600
  }
]);


  return(
  <div>
    <Store items= {storeItem} onItemAdd ={(itemData)=>{
        setStoreItem([...storeItem, itemData]);
    }}
    />
  </div>
  );
}

export default App