import '../Style.css'

export default function Langue() {
    return(
        <div className='centremoi'>
            <h3>langue</h3>
            <div > francais </div>
             <progress id="file" max="100" value="97"/> 
            <div > anglais </div>
             <progress id="file" max="100" value="65"> 70% </progress>
        </div>
    )
}