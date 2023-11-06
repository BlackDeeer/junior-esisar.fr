import Image from 'next/image';
import { AiOutlineFilePdf } from 'react-icons/ai';
import EsisarPicture from '@/assets/esisar.jpg';

export default function Hero() {
  return (
    <div className='relative z-50 w-full overflow-hidden'>
      <div className='h-96 w-full overflow-hidden'>
        <Image src={EsisarPicture} alt='Esisar' objectFit='cover' fill />
      </div>
      <div
        className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
      >
        <div className='flex h-full items-center justify-center'>
          <div className='px-6 text-center text-white md:px-12'>
            <h1 className='text-purple-esisar-400 mb-6 text-5xl font-bold'>
              Junior Esisar
            </h1>
            <h3 className='text-purple-esisar-300 mb-8 text-xl font-bold'>
              Prenez de l&apos;avance en réalisant vos projets
              d&apos;aujourd&apos;hui avec les ingénieurs de demain !
            </h3>
            <button
              type='button'
              className='hover:bg-purple-esisar-300 active:bg-purple-esisar inline-flex items-center rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:text-white focus:outline-none focus:ring-0'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <AiOutlineFilePdf size={24} /> &nbsp; Plaquette commerciale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
