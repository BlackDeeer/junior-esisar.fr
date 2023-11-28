import Hero from '@/components/homepage/Hero';
import About from '@/components/homepage/About';
import ServiceOffer from '@/components/homepage/ServiceOffer';
import TextSlide from '@/components/homepage/TextSlide';
import Methodology from '@/components/homepage/Methodology';
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
