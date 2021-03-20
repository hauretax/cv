import '../Style.css'

export default function Langue() {
    return (
        <div className='centremoi'>
            <h3>Anglais</h3>
            <hr />
            <div className = 'flex'>
                <div className="moov">
                    <div > technique </div>
                    <progress id="file" max="100" value="70" />
                    <div > oral </div>
                    <progress id="file" max="100" value="45"/>   
                     </div>
                <div>
                    <div > écrit </div>
                    <progress id="file" max="100" value="60" />
                    <div > lu </div>
                    <progress id="file" max="100" value="95"/> 
                    </div>
            </div>
        </div>
    )
}