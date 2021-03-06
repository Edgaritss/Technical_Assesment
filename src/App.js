import Store from './components/Store';
import {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Welcome from "./components/JSX/Welcome"
import LoginPage from "./components/JSX/Login"
import firebase from 'firebase/compat/app';

function App(){
  const [storeItem,setStoreItem] = useState([])
  /*const [userSignedIn,setUserSignedIn] = useState(true);*/

  /*firebase.auth().onAuthStateChanged((user) =>{
    if(user){
     return setUserSignedIn(true);
    }
    setUserSignedIn(false);
  })
  

  if (userSignedIn ===true){

  }*/ /*Redireccionamiento de página cuando esté Logeado*/
  
    return (
      <Router>
        <Switch>  
        <Route path="/Login" component={LoginPage}>
        </Route >


          <Route path="/Home" exact component = {(props) =>(
          <Store
            onItemAdd ={(itemData)=>{
          setStoreItem([...storeItem, itemData]);
          console.log("Item", itemData);
    }}
    />
      )}
    />
    
       
    <Route path="/product/:id"  component={props => <Product {...props}/> }/>
        <Route path="/" component={Welcome} ></Route>
      </Switch>
    </Router>
   
    );
}

export default App;