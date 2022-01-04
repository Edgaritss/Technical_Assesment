import Store from './components/Store';


function App(){
  const StoreItems = [{
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

];
  return(
  <div>
    <Store items= {StoreItems}/>
  </div>
  );
}

export default App