import { Link} from 'react-router-dom';
function Enlaces() {
    return (
    <div>
      <ul>
             <li>
            
              <Link to="/gatos">Gatos</Link>
            </li>
            <li>
            
              <Link to="/perros">Perros</Link>
            </li>
            </ul>
        </div>
        
        );
    }
    export default Enlaces;