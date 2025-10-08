import './App.css';

import cao from './assets/imagem1.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';


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
      <div>
        <div>
          <ListRender/>
        </div>
        <ManageData />
      </div>
    </div>
  );
}
 
export default App;
