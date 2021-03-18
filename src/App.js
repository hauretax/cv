import Moi from './component/name.js';
import Diplome from './component/diplome.js';
import Contacte from './component/contacte.js';
import Experience from './component/experience.js';
import Informatique from './component/Informatique.js';
import Langue from './component/Langue.js';
import About from './component/About.js';
import Interet from './component/interet'
import './Style.css'

function App() {
  return (
    <div className="App" >
      <div className='fond'>
      <Moi />
      <h2 className="info">Information</h2>
      <hr/>
      <Contacte/>
      <Informatique/>
      <Langue/>
      </div>
      <div>
      <About/>
      <Diplome />
      <Experience/>
      <Interet/>
      </div>
     
    </div>
  );
}

export default App;
