import { Fade } from "react-awesome-reveal";

export const Services = () => {
    return (
        <div className="p-12 flex flex-col items-center space-y-32" 
             style={{ backgroundImage: 'linear-gradient(0deg, hsl(220deg 14% 96%) 0%, hsl(299deg 28% 66%) 43%, hsl(297deg 52% 36%) 100%)' }}>
            
            {/* Prestation 1 */}

            <Fade direction="left" duration={800}>
                <div className="p-5 w-full md:w-2/3">
                    <h2 className="text-xl font-semibold">Osez le digital !</h2>
                    <p>Dans un monde de plus en plus connecté, digitaliser son activité est devenu une priorité pour développer son entreprise. C’est dans ce contexte que N7 Consulting vous accompagne et vous conseille dans toutes vos démarches de transformation digitale grâce à l’expertise de pointe de ses intervenants en Sciences du Numérique.</p>
                </div>
            </Fade>
            
            {/* Prestation 2 */}
            <Fade direction="right" duration={1000}>
                <div className="p-5 w-full md:w-2/3 pl-28">
                    <h2 className="text-xl font-semibold">Pourquoi nous choisir ? </h2>
                    <p>

                        Les étudiants de l’ENSEEIHT en filière Sciences du Numérique maîtrisent une multitude de langages de programmation et sont donc capables de créer une solution numérique correspondant parfaitement à votre besoin.

                        Depuis plus de 45 ans, le développement de ces solutions représente 80 % de notre activité.

                        Nous sommes référencés comme « Prestataire Numérique » auprès de : FranceNum et de PrestaNum (Cci Occitanie)

                        Nos différents parcours de masters leur permettent d’être spécialisés dans leur domaine technique.

                    <Fade cascade>
                        <ul>
                            <li> - Cybersécurité avec le master TLS-SEC</li>
                            <li> - Télécoms sans fil et Objets connectés</li>
                            <li> - Infrastructure Big Data et IoT</li>
                            <li> - Systèmes Embarqués et IoT Industriel</li>
                            <li> - Système Logiciel, Image et Multimédia</li>
                            <li> - Calcul haute performance et Big Data</li>
                            <li> - Systèmes de communication satellite avec le Master of Science (SATCOM)</li>
                        </ul>
                    </Fade>

                </p>
                </div>
            </Fade>
            
            {/* Prestation 3 */}
            <Fade direction="left" duration={1300}>
                <div className="p-5 border border-black w-full md:w-2/3">
                    <h2 className="text-xl font-semibold">Prestation 3</h2>
                    <p>Description de la prestation 3...</p>
                </div>
            </Fade>
            
            {/* Prestation 4 */}
            <Fade direction="right" duration={1700}>
                <div className="p-5 border border-black w-full md:w-2/3">
                    <h2 className="text-xl font-semibold">Prestation 4</h2>
                    <p>Description de la prestation 4...</p>
                </div>
            </Fade>

            {/* ... Ajoutez d'autres prestations de la même manière si nécessaire ... */}
            
        </div>
    );
}
