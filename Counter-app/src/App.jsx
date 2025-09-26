import { useState } from 'react';
import './App.css'

function App() {
  
  let [count, setCount] = useState(0)
  console.log(count);

  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }
  return (
    <>
      <div className='container'>
     <h1>Counter App</h1>
     <p>Count : {count}</p>
      <div className='buttons'>
     <button onClick={increment}>➕ INCREMENT</button>
     <button onClick={decrement}>➖ DECREMENT</button>
     <button onClick={reset}>🔄 RESET</button>
     </div>
     </div>
    </>
  )
}

export default App
