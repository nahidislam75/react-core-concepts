import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks=['Anwer','Jafor','Alongir','Salman'];
  const products=[
    {name:'Photoshop',price:'$99.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader',price:'$6.99'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok=> <li>{nayok}</li>)
          }
          {
            products.map(product =><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product=><Product product={product}></Product>)
        }
        <Person name="Munna" jobs="footballs"></Person>
        <Person name="Masum" jobs="Dorshok"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count,setCount]=useState(10);
  const hendleIncrease=()=>setCount(count+1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRedius:'5px',
    backgroundColor:'lightGray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h4>{props.product.name}</h4>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:"2px solid red",
    margin:"10px",
    width:'400px'
  }
  return (
  <div style={personStyle}>
    <h3>Name:{props.name}</h3>
    <p>My profession:{props.jobs}</p>
  </div>
  )
}

export default App;
