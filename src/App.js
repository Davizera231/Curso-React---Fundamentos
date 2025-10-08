import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import './App.css';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <TemplateExpression/>
      <FirstComponent/>
      <Events/>
      <h1>Fundamentos React</h1>
    </div>
  );
}
 
export default App;
