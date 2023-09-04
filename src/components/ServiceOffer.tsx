
export const ServiceOffer = () => {
    const services = [
        {
            title: "IA - Data Science",
            description: "Les sciences des données, vecteur d'amélioration de vos performances"
        },
        {
            title: "Développement web",
            description: "Le web, pilier de la communication"
        },
        {
            title: "Développement mobile",
            description: "Les fonctionnalités d'un ordinateur dans votre poche"
        },
        {
            title: "Développement logiciel",
            description: "Développez vos outils internes ou concrétisez vos projets logiciel"
        },
        {
            title: "Modélisation & mathématiques appliquées",
            description: "Modéliser des phénomènes complexes, grâce à de puissants outils"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
            {services.map((service, index) => (
                <div key={index} className=" hover:animate-pulse animate-infinite animate-ease-linear p-4 border border-gray-100 rounded cursor-pointer hover:bg-purple-esisar-50 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-purple-esisar">{service.title}</h3>
                    <p className="text-black">{service.description}</p>
                </div>
            ))}
        </div>
    );
}
