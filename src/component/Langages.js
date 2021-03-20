import '../Style.css'

export default function Langages() {
    return(<div>
        <h3>Langages</h3>
        <hr />
        <ul className = 'text'>
            <li><div>(c, Javascript, MongoDB)</div>
            <progress id="file" max="100" value="100" /> </li>
            <li><div>(c++, css, Python, NodeJS, PHP, MySQL, git) </div
            ><progress id="file" max="100" value="80" /></li>
            <li><div>(MySQL, typescript, go, solidity)</div> 
            <progress id="file" max="100" value="60" /></li>
        </ul>
        
    </div>)
}