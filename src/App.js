import Store from './components/Store';
import {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Welcome from "./components/JSX/Welcome"
import LoginPage from "./components/JSX/Login"

function App(){
  const [storeItem,setStoreItem] = useState([])



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
      <Route path="/Welcome">
        <Welcome/>
      </Route >    
      <Route path="/Login">
        <LoginPage/>
      </Route >     
    <Route path="/product/:id"  component={props => <Product {...props}/> }/>
        <Route>404 page</Route>
      </Switch>
    </Router>
   
    );
}

export default App;