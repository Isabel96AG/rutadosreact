
import './App.css';
import Gatos from'./gatos';
import Perros from './perros';
import Enlaces from './enlaces';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Enlaces/>
            <Route path="/gatos">
                <Gatos />
            </Route>
            <Route path="/perros">
                <Perros />
            </Route>
    </BrowserRouter>
    
  );
}

export default App;
