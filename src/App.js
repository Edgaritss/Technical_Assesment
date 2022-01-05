import Store from './components/Store';
import {useState, useEffect} from "react";
import axios from 'axios';

function App(){
  const [storeItem,setStoreItem] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios.get('https://fakestoreapi.com/products').then(({data}) =>{
    setStoreItem(data);
    setLoading(false);
  })
}, [])


  return(
  <div>
    <Store items= {storeItem} 
    loading={loading}
    onItemAdd ={(itemData)=>{
        setStoreItem([...storeItem, itemData]);
    }}
    />
  </div>
  );
}

export default App