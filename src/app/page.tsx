import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceOffer from '@/components/ServiceOffer';
import TextSlide from '@/components/TextSlide';
import Methodology from '@/components/Methodology';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServiceOffer />
      <TextSlide />
      <Methodology />
      <Contact />
    </main>
  );
}
