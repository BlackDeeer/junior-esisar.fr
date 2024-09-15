import HeroLayout from '@/components/HeroLayout';
import ServicesDetails from '@/components/services/ServicesDetails';
import Contact from '@/components/Contact';
import StepsSection from '@/components/services/StepsSection';

export default function Services() {
  return (
    <>
      <HeroLayout
        title='Nos Prestations'
        subtitle="Du développement logiciel à l'administration système en passant par le développement web et mobile, les étudiants de la Junior Entreprise Esisar sauront répondre à vos besoins."
      />
      <ServicesDetails />
      <StepsSection />
      <Contact
        title="C'est parti pour l'aventure ?"
        description='Partagez-nous votre projet...'
      />
    </>
  );
}
