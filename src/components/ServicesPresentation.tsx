import { Fade } from "react-awesome-reveal";

export const Services = () => {
    return (
        <div className="p-12 flex flex-col items-center space-y-32" 
             style={{ backgroundImage: 'linear-gradient(0deg, hsl(220deg 14% 96%) 0%, hsl(299deg 28% 66%) 43%, hsl(297deg 52% 36%) 100%)' }}>
            
            {/* Prestation 1 */}

            <Fade direction="left" duration={800}>
                <div className="p-5 w-full md:w-2/3 px-56">
                    <h2 className="text-xl font-semibold">Osez le numérique !</h2>
                    <p>Dans un monde de plus en plus connecté, le passage au numérique de l'ensemble de son activité est devenu une priorité pour développer son entreprise. La Junior Esisar vous accompagne et vous conseille dans vos démarches de digitalisation grâce à l’expertise de ses étudiants dans les systèmes cyber-physiques et la cybersécurité en électronique, automatique informatique et réseaux. </p>
                </div>
            </Fade>
            
            {/* Prestation 2 */}
            <Fade direction="right" duration={1000}>
                <div className="p-5 w-full md:w-2/3 pl-28">
                    <h2 className="text-xl font-semibold">Pourquoi nous choisir ? </h2>
                    <p>

                        Les étudiants de l'Esisar maîtrisent la majorité des systèmes cyber-physiques et sont donc capables de créer une solution numérique qui correspond à vos besoins.
                        Nos 2 filières leur permettent une spécialisation technique, tout en restant suffisement généraliste pour pouvoir travailler avec toutes sortes de systèmes.

                    <Fade cascade>
                        <ul>
                            <li> - Cybersécurité comme constante au sein des cursus</li>
                            <li> - Electronique embarquée, Informatique et automatique </li>
                            <li> - Informatique, Réseaux et cybersécurité</li>
                            <li> - Systèmes Complexes Intelligents</li>
                        </ul>
                    </Fade>

                </p>
                </div>
            </Fade>
            
            {/* Prestation 3 */}
            <Fade direction="left" duration={1300}>
                <div className="p-5 border border-black w-full md:w-2/3">
                    <h2 className="text-xl font-semibold">Développement logiciel</h2>
                    <p>Nous sommes spécialisés dans le développement et le design de logiciels sur mesure ainsi que la mise en place d'interfaces utilisateurs. 
                    Nous sommes formés en développement logiciel et connaissons plusieurs langages de programmation tels que le C, le Java et le Python. </p>
                </div>
            </Fade>
            
            {/* Prestation 4 */}
            <Fade direction="right" duration={1700}>
                <div className="p-5 border border-black w-full md:w-2/3">
                    <h2 className="text-xl font-semibold">Développement web</h2>
                    <p>Les applications Web sont omniprésentes dans un monde de plus en plus connecté. Il est donc nécessaire de proposer des offres qui correspondent à vos besoins</p>
                </div>
            </Fade>
            
            {/* Prestation 5 */}
            <Fade direction="right" duration={1700}>
                <div className="p-5 border border-black w-full md:w-2/3">
                    <h2 className="text-xl font-semibold">Développement Embarqué</h2>
                    <p> Nous sommes en capacité de développer sur des systèmes embarqués, notamment sur des cartes électroniques. Nous pouvons développer des bancs de tests pour vous permettre de garantir la fiabilité et la qualité de vos systèmes embarqués.
                    </p>
                </div>
            </Fade>
            
            {/* Prestation 6 */}
            <Fade direction="left" duration={1700}>
                <div className="p-5 border border-black w-full md:w-2/3">
                    <h2 className="text-xl font-semibold">Administration système</h2>
                    <p>Nos formations nous permettent de configurer, de maintenir et d'optimiser des systèmes complexes. Nous pouvons aussi mettre en place et optimiser vos bases de données pour vous assurer une mise en place complète de vos systèmes. </p>
                </div>
            </Fade>

            {/* ... Ajoutez d'autres prestations de la même manière si nécessaire ... */}
            
        </div>
    );
}
