export default function Services() {
  return (
    <div
      className='flex flex-col items-center space-y-32 p-12'
      style={{
        backgroundImage:
          'linear-gradient(0deg, hsl(220deg 14% 96%) 0%, hsl(299deg 28% 66%) 43%, hsl(297deg 52% 36%) 100%)',
      }}
    >
      {/* Prestation 1 */}

      <div className='w-full p-5 px-56 md:w-2/3'>
        <h2 className='text-xl font-semibold'>Osez le numérique !</h2>
        <p>
          Dans un monde de plus en plus connecté, le passage au numérique de
          l&apos;ensemble de son activité est devenu une priorité pour
          développer son entreprise. La Junior Esisar vous accompagne et vous
          conseille dans vos démarches de digitalisation grâce à
          l&apos;expertise de ses étudiants dans les systèmes cyber-physiques et
          la cybersécurité en électronique, automatique informatique et réseaux.{' '}
        </p>
      </div>

      {/* Prestation 2 */}
      <div className='w-full p-5 pl-28 md:w-2/3'>
        <h2 className='text-xl font-semibold'>Pourquoi nous choisir ? </h2>
        <p>
          Les étudiants de l&apos;Esisar maîtrisent la majorité des systèmes
          cyber-physiques et sont donc capables de créer une solution numérique
          qui correspond à vos besoins. Nos 2 filières leur permettent une
          spécialisation technique, tout en restant suffisement généraliste pour
          pouvoir travailler avec toutes sortes de systèmes.
          <ul>
            <li> - Cybersécurité comme constante au sein des cursus</li>
            <li> - Electronique embarquée, Informatique et automatique </li>
            <li> - Informatique, Réseaux et cybersécurité</li>
            <li> - Systèmes Complexes Intelligents</li>
          </ul>
        </p>
      </div>

      {/* Prestation 3 */}
      <div className='w-full border border-black p-5 md:w-2/3'>
        <h2 className='text-xl font-semibold'>Développement logiciel</h2>
        <p>
          Nous sommes spécialisés dans le développement et le design de
          logiciels sur mesure ainsi que la mise en place d&apos;interfaces
          utilisateurs. Nous sommes formés en développement logiciel et
          connaissons plusieurs langages de programmation tels que le C, le Java
          et le Python.{' '}
        </p>
      </div>

      {/* Prestation 4 */}
      <div className='w-full border border-black p-5 md:w-2/3'>
        <h2 className='text-xl font-semibold'>Développement web</h2>
        <p>
          Les applications Web sont omniprésentes dans un monde de plus en plus
          connecté. Il est donc nécessaire de proposer des offres qui
          correspondent à vos besoins
        </p>
      </div>

      {/* Prestation 5 */}
      <div className='w-full border border-black p-5 md:w-2/3'>
        <h2 className='text-xl font-semibold'>Développement Embarqué</h2>
        <p>
          {' '}
          Nous sommes en capacité de développer sur des systèmes embarqués,
          notamment sur des cartes électroniques. Nous pouvons développer des
          bancs de tests pour vous permettre de garantir la fiabilité et la
          qualité de vos systèmes embarqués.
        </p>
      </div>

      {/* Prestation 6 */}
      <div className='w-full border border-black p-5 md:w-2/3'>
        <h2 className='text-xl font-semibold'>Administration système</h2>
        <p>
          Nos formations nous permettent de configurer, de maintenir et
          d&apos;optimiser des systèmes complexes. Nous pouvons aussi mettre en
          place et optimiser vos bases de données pour vous assurer une mise en
          place complète de vos systèmes.{' '}
        </p>
      </div>

      {/* ... Ajoutez d'autres prestations de la même manière si nécessaire ... */}
    </div>
  );
}
