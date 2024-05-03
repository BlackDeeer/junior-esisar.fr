import ContactForm from '@/components/contact/ContactForm';
import HeroLayout from '@/components/HeroLayout';

export default function Devis() {
  return (
    <>
      <HeroLayout
        title='Nous Contacter'
        subtitle="Prêt à concrétiser vos idées ? Contactez-nous dès aujourd'hui et laissez-nous transformer vos projets en réalité !"
      />
      <ContactForm />
    </>
  );
}
