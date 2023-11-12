import { AiOutlineFilePdf } from 'react-icons/ai';
import Octopus from '@/components/Octopus';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className='relative flex h-[calc(100vh-var(--nav-height))] min-h-[20rem] items-center'>
      <div className='w-fit pb-[20vh] pl-[10vw]'>
        <h1 className='text-8xl font-extrabold'>Junior Esisar</h1>
        <p className='mb-8 mt-4 text-4xl font-semibold'>
          Réalisez vos projets aujourd&apos;hui <br></br>avec les ingénieurs de
          demain.
        </p>
        <Button
          href='#'
          title='Télécharger la plaquette'
          icon={<AiOutlineFilePdf size={24} />}
        />
      </div>
      <div className='absolute bottom-0 right-0 aspect-square w-1/2 min-w-[24rem] max-w-2xl'>
        <Octopus />
      </div>
    </section>
  );
}
