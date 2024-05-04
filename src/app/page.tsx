import Hero from '@/components/homepage/Hero';
import About from '@/components/homepage/About';
import ServiceOffer from '@/components/homepage/ServiceOffer';
import TextSlide from '@/components/homepage/TextSlide';
import Methodology from '@/components/homepage/Methodology';
import Contact from '@/components/Contact';
import SectionLayout from '@/components/SectionLayout';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServiceOffer />
      <TextSlide />
      <Methodology />
      <SectionLayout title='Pourquoi nous ?'>
        <div className='mx-auto w-full max-w-2xl text-xl md:w-2/3'>
          <p className='mb-4'>
            Les étudiants de l&apos;Esisar maîtrisent la majorité des systèmes
            cyber-physiques et sont donc capables de créer une solution
            numérique correspondant à vos besoins. Les filières nous permettent
            une spécialisation technique, tout en restant suffisamment
            généraliste pour pouvoir travailler avec toutes sortes de systèmes.
          </p>
          <ul className='list-disc pl-4'>
            <li>Cybersécurité comme constante au sein des cursus</li>
            <li>Electronique embarquée, Informatique et automatique </li>
            <li>Informatique, Réseaux et cybersécurité</li>
            <li>Systèmes Complexes Intelligents</li>
          </ul>
        </div>
      </SectionLayout>
      <Contact
        title="Alors, c'est parti ?"
        description='Partagez-nous votre projet...'
      />
    </main>
  );
}
