import '../Style.css'
import C from '../img/100.png'
import Q from '../img/80.png'
import S from '../img/60.png'


export default function Informatique() {
    return(<div>
        <h3>Langages et frameworks</h3>
        <ul className = 'text'>
            <li><div>(c, Javascript, MongoDB)</div> <img src = {C} width="25px" alt='c'/> </li>
            <li><div>(c++, css, Python, NodeJS, PHP, MySQL, git) </div><img src = {Q} width="25px" alt='q'/></li>
            <li><div>(MySQL, typescript, go, solidity)</div> <img src = {S} width="25px" alt='s'/></li>
        </ul>
    </div>)
}