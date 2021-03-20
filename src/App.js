import Moi from './component/name.js';
import Formation from './component/formation.js';
import Experience from './component/experience.js';
import Competence from './component/competence.js';
import Etre from './component/savoirEtre'
import About from './component/About.js';
import Interet from './component/interet'
import './Style.css'
import Langue from './component/Langue.js';
import Langages from './component/Langages.js';

function App() {
  return (
    <div className="App" >
      <div className='fond'>
        <Moi />
        <hr />
      </div>
      <div className='page'>
        <About />
        <div className= 'flex'>
          <Experience />
          <Formation />
        </div>
          <Competence />
        <div className='flex'>
          <Langages/>
          <Langue/>
        </div>
          <Etre />
        <Interet />
      </div>
    </div>
  );
}

export default App;
