import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceOffer from '@/components/ServiceOffer';
import LogoGrid from '@/components/LogoGrid';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Hero />
      <About />
      <ServiceOffer />
      <LogoGrid />
      {/* <Terminal /> */}
    </main>
  );
}
