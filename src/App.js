import { useState } from 'react';
import style from './App.module.css'
import Afnan from './components/Afnan';

function App() {
  const [isloading, setisloading] = useState(true);
  const [show, setShow] = useState(false);

  const [count, setCount] = useState(0)

  function abc(){
    setisloading(!isloading)
    setShow(!show)
    setCount(count+1)
  }

  return (
    <>
      {
        isloading && <img src='https://i.gifer.com/ZKZg.gif' style={{width: "20px"}} />
      }
      {
        show && <p>Welcome To Class</p>
      }
      <h1>{count}</h1>
      <input type='button' value={show ? "Chupao": "Dikhao"} onClick={abc} /> 

      <Afnan />
    </>
  );
}

export default App;
