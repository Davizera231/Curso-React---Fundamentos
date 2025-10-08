import './App.css';

import cao from './assets/imagem1.jpg';

function App() {
  return (
    <div className="App">      
      <h1>Fundamentos React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/logo192.png" alt="Logo" />
      </div>
      <div>
        {/* Imagem em assets */}
        <img src={cao} alt="Cidade" />
      </div>
    </div>
  );
}
 
export default App;
