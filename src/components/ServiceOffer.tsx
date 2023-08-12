
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
        <div className="p-10 space-y-5">
            <h2 className="text-2xl font-semibold">Nos offres de prestations</h2>
            {services.map((service, index) => (
                <div key={index} className="transition-transform transform scale-100 hover:scale-105 hover:shadow-xl p-4 rounded border border-gray-200 cursor-pointer">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}
