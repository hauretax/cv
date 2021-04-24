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
      </div>
      <div className='page'>
        <About />
        <div className='flex divide'>
          <Experience />
          <div className ='ranger'>
            <Competence />
            <Formation />
            <Langages />
            <Langue />
            <Etre />
            <Interet />
          </div>
        </div>
      </div>
      <a href="https://github.com/hauretax/cv"><footer></footer></a>
    </div>
  );
}

export default App;
