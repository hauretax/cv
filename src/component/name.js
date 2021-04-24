import '../Style.css'
import Contact from './contact'
import tete from "../img/tete.jpeg";
function Moi(){
    return( <div>
        <h1> Huggo Tricottet (21ans) </h1>
        <img src={tete} alt='tete' ></img>
        <div className="truc">
          <Contact />
        </div>
        <h2 className="info">Développeur IT</h2>
        </div>);
}

export default Moi;