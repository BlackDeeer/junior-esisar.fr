import HeroLayout from '@/components/HeroLayout';
import ServicesDetails from '@/components/services/ServicesDetails';
import Contact from '@/components/Contact';

export default function Services() {
  return (
    <>
      <HeroLayout
        title='Nos prestations'
        subtitle="Du développement logiciel à l'administration système en passant par le développement web et mobile, les étudiants de la Junior Entreprise Esisar sauront répondre à vos besoins."
      />
      <ServicesDetails />

      <div className='flex flex-col items-center gap-12 p-12 text-xl'>
        <div className='w-full p-5 md:w-2/3'>
          <h2 className='mb-4 text-4xl font-extrabold'>Osez le numérique !</h2>
          <p>
            Dans un monde de plus en plus connecté, le passage au numérique de
            l&apos;ensemble de son activité est devenu une priorité pour
            développer son entreprise. La Junior Esisar vous accompagne et vous
            conseille dans vos démarches de digitalisation grâce à
            l&apos;expertise de ses étudiants dans les systèmes cyber-physiques
            et la cybersécurité en électronique, automatique informatique et
            réseaux.
          </p>
        </div>

        <div className='w-2/3 p-5 text-xl'>
          <h2 className='mb-4 text-4xl font-extrabold'>
            Pourquoi nous choisir ?
          </h2>
          <p className='mb-4'>
            Les étudiants de l&apos;Esisar maîtrisent la majorité des systèmes
            cyber-physiques et sont donc capables de créer une solution
            numérique qui correspond à vos besoins. Nos 2 filières leur
            permettent une spécialisation technique, tout en restant suffisement
            généraliste pour pouvoir travailler avec toutes sortes de systèmes.
          </p>
          <ul className='list-disc pl-4'>
            <li>Cybersécurité comme constante au sein des cursus</li>
            <li>Electronique embarquée, Informatique et automatique </li>
            <li>Informatique, Réseaux et cybersécurité</li>
            <li>Systèmes Complexes Intelligents</li>
          </ul>
        </div>
      </div>
      <Contact />
    </>
  );
}
