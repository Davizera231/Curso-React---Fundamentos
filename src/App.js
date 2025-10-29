import './App.css';

import cao from './assets/imagem1.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import ComponentsDetails from './components/ComponentsDetails';
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
        {/* destructuring */}
        <ComponentsDetails 
          brand="Ferrari"
          distance={1000}
          color="Vermelho"
          new_car={true}
        />
        <ComponentsDetails 
          brand="Kawasaki"
          distance={500}
          color="Verde"
          new_car={false}
        />
        <ComponentsDetails 
          brand="Honda"
          distance={750}
          color="Azul"
          new_car={true}
        />

      </div>
    </div>
  );
}
 
export default App;
