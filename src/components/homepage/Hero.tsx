import { AiOutlineFilePdf } from 'react-icons/ai';
import Octopus from '@/components/homepage/Octopus';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className='relative min-h-[20rem] pt-28 md:flex md:h-[calc(100vh-var(--nav-height))] md:items-center md:pt-0'>
      <div className='w-fit px-8 md:pb-[20vh] md:pl-[10vw]'>
        <h1 className='text-6xl font-extrabold md:text-8xl'>Junior Esisar</h1>
        <p className='mb-8 mt-4 text-3xl font-semibold md:text-4xl'>
          Réalisez vos projets{' '}
          <span className='relative after:absolute after:left-[10%] after:top-[58%] after:-z-10 after:block after:h-[35%] after:w-full after:bg-accent'>
            aujourd&apos;hui
          </span>{' '}
          <br></br>avec les ingénieurs de{' '}
          <span className='relative after:absolute after:left-[10%] after:top-[58%] after:-z-10 after:block after:h-[35%] after:w-full after:bg-accent'>
            demain
          </span>
          .
        </p>
        <Button
          href='plaquette_junior_esisar.pdf'
          title='Télécharger la plaquette'
          icon={<AiOutlineFilePdf size={24} />}
          download
        />
      </div>
      <div className='aspect-square w-full max-w-52 md:absolute md:bottom-0 md:right-0 md:w-1/2 md:max-w-2xl'>
        <Octopus />
      </div>
    </section>
  );
}
