
export const ServiceOffer = () => {
    const services = [
        {
            title: "Développement logiciel",
            description: "Développez vos outils internes ou concrétisez vos projets logiciel"
        },
        {
            title: "Développement web",
            description: "Le web, pilier de la communication"
        },
 
        {
            title: "Développement embarqué",
            description: "Mettez en place des bancs de tests, développez sur vos cartes électroniques ou vos éléments embarqués"
        },
        {
            title: "Administration système",
            description: "Configurez, maintenez, optimisez vos systèmes Linux ou mettez en place des systèmes complexes"
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
