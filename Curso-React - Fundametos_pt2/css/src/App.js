
import './App.css';
import MyComponent from '../src/components/MyComponent';

function App() {

  const redtitle = false;


  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React com css</h1>
      {/*CCS de Componente */}
      <MyComponent/>
      <p>Este para e do app.js</p>

      {/* Classe dinamica   */}
      <h2 className={redtitle ? "red-title" : "title" }>Este titulo vai ter classe dinamica</h2>


    </div>
  )
}

export default App;
