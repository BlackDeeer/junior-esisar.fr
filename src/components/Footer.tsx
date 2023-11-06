import Image from 'next/image';
import JuniorLogo from '@/assets/logo_junior.png';
import MailIcon from '@/assets/icons/email.svg';
import LinkedinLogo from '@/assets/icons/linkedin.svg';

export default function Footer() {
  return (
    <footer className='bg-gray-100 py-3'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2'>
            <Image src={JuniorLogo} width={80} alt='Logo de la junior' />
            <p className='mt-4'>
              x Grenoble - INP Esisar, UGA
              <br />
              50 rue Barthélémy de Laffemas CS 10054
              <br />
              26902 Valence Cedex 09 - France
            </p>
          </div>
          <div className='mt-4 w-full text-right md:mt-0 md:w-1/2'>
            <a
              href='mailto:junior.esisar@esisar.grenoble-inp.fr'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src={MailIcon}
                width={40}
                alt='Mail'
                className='mx-1 inline-block'
              />
            </a>
            <a
              href='https://www.linkedin.com/company/junior-esisar/'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src={LinkedinLogo}
                alt='LinkedIn'
                className='mx-1 inline-block w-7'
              />
            </a>
            <div className='mt-10 space-x-2'>
              <a
                href='your-commercial-brochure.pdf'
                className='text-gray-600 hover:underline'
              >
                Plaquette commerciale
              </a>{' '}
              |
              <a
                href='/mentions-legales'
                className='font-bold text-gray-600 hover:underline'
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
