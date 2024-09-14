import Hero from '@/components/homepage/Hero';
import About from '@/components/homepage/About';
import ServiceOffer from '@/components/homepage/ServiceOffer';
import TextSlide from '@/components/homepage/TextSlide';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServiceOffer />
      <TextSlide />
      <WhyChooseUs />
      <Contact
        title="Alors, c'est parti ?"
        description='Partagez-nous votre projet...'
      />
    </main>
  );
}
