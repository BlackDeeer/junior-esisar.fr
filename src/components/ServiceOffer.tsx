export default function ServiceOffer() {
  const services = [
    {
      title: 'Développement logiciel',
      description:
        'Développez vos outils internes ou concrétisez vos projets logiciel',
    },
    {
      title: 'Développement web',
      description: 'Le web, pilier de la communication',
    },
    {
      title: 'Développement embarqué',
      description:
        'Mettez en place des bancs de tests, développez sur vos cartes électroniques ou vos éléments embarqués',
    },
    {
      title: 'Administration système',
      description:
        'Configurez, maintenez, optimisez vos systèmes Linux ou mettez en place des systèmes complexes',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-4 p-10 md:grid-cols-2'>
      {services.map((service) => (
        <div
          key={service.title}
          className='animate-infinite animate-ease-linear hover:bg-purple-esisar-50 cursor-pointer rounded border border-gray-100 p-4 transition-colors duration-300 hover:animate-pulse'
        >
          <h3 className='text-purple-esisar text-xl font-bold'>
            {service.title}
          </h3>
          <p className='text-black'>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
