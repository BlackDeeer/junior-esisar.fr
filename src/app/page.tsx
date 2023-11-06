import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceOffer from '@/components/ServiceOffer';
import LogoGrid from '@/components/LogoGrid';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServiceOffer />
      <LogoGrid />
      {/* <Terminal /> */}
    </main>
  );
}
