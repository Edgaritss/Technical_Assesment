import Store from './components/Store';
import {useState, useEffect} from "react";
import {BrowserRouter as Router,Link,Routes} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Product from "./components/Product";

function App(){
  const [storeItem,setStoreItem] = useState([]);

    return (
      <Router>
        <Switch>
          <Route path="/" exact component = {(props) =>(
          <Store
            onItemAdd ={(itemData)=>{
          setStoreItem([...storeItem, itemData]);
          console.log("Item", itemData);
    }}
    />
      )}
    />    
    <Route path="/product/:id"  component={props => <Product {...props}/> }/>
        <Route>404 page</Route>
        </Switch>
      </Router>
    );
}

export default App