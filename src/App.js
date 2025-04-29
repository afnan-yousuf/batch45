import style from './App.module.css'
import Afnan from './components/Afnan'

function App() {
  return (
    <>
      <h1>Afnan Yousuf</h1>
      <p>
        This is paragraph
      </p>
      <h1 className={style.myheading}>Testing</h1>
      <button className={style.button}>OK</button>
      <Afnan />
    </>
  );
}

export default App;
