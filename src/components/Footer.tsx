import Image from 'next/image';
//@ts-ignore
import JuniorLogo from '@/assets/logo_junior.svg?url';
import InstagramIcon from '@/assets/icons/instagram.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import LinkedinIcon from '@/assets/icons/linkedin_full.svg';
import GithubIcon from '@/assets/icons/github.svg';

const socials = [
  {
    href: 'https://www.instagram.com/junior_esisar/',
    ariaLabel: 'Instagram de la Junior Esisar',
    icon: <InstagramIcon height={24} width={24} />,
  },
  {
    href: 'https://www.facebook.com/GrenobleINPEsisar',
    ariaLabel: 'Facebook de la Junior Esisar',
    icon: <FacebookIcon height={24} width={24} />,
  },
  {
    href: 'https://www.linkedin.com/company/junior-esisar/',
    ariaLabel: 'Linkedin de la Junior Esisar',
    icon: <LinkedinIcon height={24} width={24} />,
  },
  {
    href: 'https://www.github.com',
    ariaLabel: 'GitHub de la Junior Esisar',
    icon: <GithubIcon height={24} width={24} />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='relative mt-8 flex flex-col items-center justify-between gap-6 bg-primary px-4 py-8 text-center text-white before:absolute before:-top-8 before:left-0 before:h-16 before:w-full before:rounded-t-[100%] before:bg-primary md:flex-row md:gap-2 md:px-8 md:text-left'>
      <div>
        <div className='flex flex-col items-center text-black md:w-fit'>
          <Image src={JuniorLogo} width={80} alt='Logo de la junior' />
          <span className='text-2xl font-extrabold'>Junior Esisar</span>
        </div>
        <p className='mt-4'>
          Grenoble - INP Esisar, UGA
          <br />
          50 rue Barthélémy de Laffemas CS 10054
          <br />
          26902 Valence Cedex 09 - France
        </p>
      </div>
      <span>JUNIOR ESISAR · Copyright ©{year}</span>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-center gap-4 md:justify-start'>
          {socials.map(({ href, ariaLabel, icon }) => (
            <a
              key={href}
              href={href}
              aria-label={ariaLabel}
              target='_blank'
              rel='noreferrer'
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href='mailto:junior.esisar@esisar.grenoble-inp.fr'
          target='_blank'
          rel='noreferrer'
          className='hover:underline'
        >
          junior.esisar@esisar.grenoble-inp.fr
        </a>
        <div>
          <a href='your-commercial-brochure.pdf' className='hover:underline'>
            plaquette commerciale
          </a>
          <span className='mx-2'>|</span>
          <a href='/mentions-legales' className='hover:underline'>
            mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
