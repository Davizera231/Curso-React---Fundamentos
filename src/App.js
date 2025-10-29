import './App.css';

import cao from './assets/imagem1.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';


function App() {

  const name = "Valores direto no componente";
  const [userName] = useState("Maria");

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
        <ConditionalRender/>
        <ShowUserName
          name={userName}
        />
      </div>
    </div>
  );
}
 
export default App;
