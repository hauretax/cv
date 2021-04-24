import '../Style.css'

export default function Experience() {
    return (
        <div className='magie'>
            <h3> Expériences</h3>
            <hr />


            <div id='exp'>
            <p>2021</p>
            <div>
                    <h2 className='projet'>Création d'une console de jeux:</h2>
                    <ul className='ok'>
                        <li> Conception d'un cahier des charges</li>
                        <li>  utilisation des protocoles spi, i2c, sur une atmega 2560 (en c avec avr-gcc)</li>
                        <li> utilisation de périphériques (bouton, ecran, capteur rfid, led)</li>
                        <li>lecture de datasheet</li>
                    </ul>
                </div>

                <div>
                    <h2 className='projet'> Projets webs personnels:</h2>
                    <ul className='ok'>
                        <li>création d une api (nodejs, mongodb)</li>
                        <li>développement d'une progressive web app (reactjs)</li>
                        <li>mise en place d'affichages cohérent et clair pour l'utilisateur (angular, js)</li>
                    </ul>
                </div>
            
                <p>2020</p>



                <div>
                    <h2 className='projet'>Stage à l'Institut National de l'Audiovisuel:</h2>
                    <ul className='ok'>
                        <li>création d'un site web(nodejs)</li>
                        <li>développement d'outile de gestion d'images pour les documentalistes (ts)</li>
                    </ul>

                </div>
                <div>

                    <h2 className='projet'>Conception d'un <a href='https://github.com/hauretax/mydoom'>jeux en 3d</a>:</h2>
                    <ul className='ok'>
                        <li>gestion d'une équipe de 4 personnes </li>
                        <li>utilisation d'une librairie graphique (sdl2)</li>
                        <li>développement d'un moteur de jeu baser sur du raytracing</li>
                        <li>développement de physique réaliste </li>
                    </ul>

                </div>
                <p>2019</p>
                <div>
                    <h2 className='projet'> Réalisation de projets graphiques</h2>
                    <ul className='ok'>
                        <a href='https://github.com/hauretax/Fractale'> <li>afficheur de fractale </li></a>
                        <a href='https://github.com/hauretax/projet-fdf'><li>affichage 3d en fils de fer </li></a>
                    </ul>

                </div>
                <p>2018</p>
                <div>
                    <h2 className='projet'> Projets de l'école 42 (langage c et c++)</h2> <br />
                    <ul className='ok'>
                        <li>gestion de groupe de 2 à 4 personnes </li>
                        <li>création d'algorithmes mis en place au sein d'un programme pour répondre à des demandes spécifiques</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}