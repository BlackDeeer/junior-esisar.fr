'use client';
import { useEffect, useState, useRef } from 'react';
import Button from '../Button';
import { BsArrowUpRight } from 'react-icons/bs';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { MdDevices } from 'react-icons/md';
import { PiCircuitryFill } from 'react-icons/pi';
import { FaGear } from 'react-icons/fa6';

type Service = {
  title: string;
  description: string;
  id: string;
  icon: JSX.Element;
  prestations: { [key: string]: string[] };
};

const services: Service[] = [
  {
    title: 'Développement logiciel',
    description:
      "Nous sommes spécialisés dans le développement et le design de logiciels sur mesure ainsi que la mise en place d'interfaces utilisateurs. Nous sommes formés en développement logiciel et connaissons plusieurs langages de programmation tels que le C, Java et Python.",
    id: 'developpement-logiciel',
    icon: <PiBracketsCurlyBold size={50} />,
    prestations: {
      first: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      second: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      third: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      fourth: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
    },
  },
  {
    title: 'Développement web',
    description:
      'Les applications Web sont omniprésentes dans un monde de plus en plus connecté. Il est donc nécessaire de proposer des offres qui correspondent à vos besoins',
    id: 'developpement-web',
    icon: <MdDevices size={50} />,
    prestations: {
      first: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      second: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      third: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      fourth: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
    },
  },
  {
    title: 'Développement embarqué',
    description:
      'Nous sommes en capacité de développer sur des systèmes embarqués, notamment sur des cartes électroniques. Nous pouvons développer des bancs de tests pour vous permettre de garantir la fiabilité et la qualité de vos systèmes embarqués.',
    id: 'developpement-embarque',
    icon: <PiCircuitryFill size={50} />,
    prestations: {
      first: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      second: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      third: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      fourth: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
    },
  },
  {
    title: 'Administration système',
    description:
      "Nos formations nous permettent de configurer, de maintenir et d'optimiser des systèmes complexes. Nous pouvons aussi mettre en place et optimiser vos bases de données pour vous assurer une mise en place complète de vos système.",
    id: 'administration-systeme',
    icon: <FaGear size={50} />,
    prestations: {
      first: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      second: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      third: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
      fourth: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
    },
  },
  // Ajouter d'autres prestations ici si besoin
];

function handleScroll(
  containerRef: React.RefObject<HTMLElement>,
  setActiveService: React.Dispatch<React.SetStateAction<number>>
) {
  if (!containerRef.current) return;
  const mainNavHeight =
    parseInt(
      window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')
    ) * 16;
  const offsetTop = containerRef.current.offsetTop - mainNavHeight;
  const height = containerRef.current.offsetHeight;

  const scrollRange = height - window.innerHeight + mainNavHeight;

  let scrollProgress = 0;
  if (window.scrollY < offsetTop) {
    scrollProgress = 0;
  } else if (window.scrollY > offsetTop + scrollRange) {
    scrollProgress = 1;
  } else {
    scrollProgress = (window.scrollY - offsetTop) / scrollRange;
  }

  containerRef.current.style.setProperty(
    '--scroll-indicator',
    scrollProgress.toString()
  );

  // Update active service
  if (scrollProgress < 0.25) setActiveService(0);
  else if (scrollProgress < 0.5) setActiveService(1);
  else if (scrollProgress < 0.75) setActiveService(2);
  else setActiveService(3);
}

export default function ServicesDetails() {
  const containerRef = useRef<HTMLElement>(null);

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    handleScroll(containerRef, setActiveService);

    window.addEventListener('scroll', () =>
      handleScroll(containerRef, setActiveService)
    );

    return () => {
      window.removeEventListener('scroll', () =>
        handleScroll(containerRef, setActiveService)
      );
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className='flex'
      style={{ '--scroll-indicator': 0 } as React.CSSProperties}
    >
      <nav className='sticky top-[var(--nav-height)] h-[calc(100vh-var(--nav-height))] w-[30vw] min-w-fit max-w-md bg-primary'>
        <ul className='flex h-full flex-col items-center justify-center gap-8 p-8 text-2xl font-bold'>
          {services.map(({ title, id }, index) => (
            <li
              key={id}
              className={index === activeService ? 'text-accent' : 'text-white'}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
        <div className='absolute left-0 top-0 h-full w-1 origin-top scale-y-[var(--scroll-indicator)] bg-accent'></div>
      </nav>
      <div className='w-full'>
        {services.map(
          ({ title, description, prestations, id, icon }, index) => (
            <>
              {index !== 0 && (
                <div className='mx-auto w-1/2 border-b border-gray-300'></div>
              )}
              <div
                key={id}
                id={id}
                className='flex flex-col items-center px-8 py-20'
              >
                <div className='flex items-center justify-center gap-4'>
                  {icon}
                  <h2 className='text-5xl font-extrabold'>{title}</h2>
                </div>
                <p className='mt-8 max-w-xl text-xl font-medium'>
                  {description}
                </p>
                <div className='mb-16 mt-8 grid w-full max-w-xl grid-cols-2 place-items-center gap-8'>
                  {Object.keys(prestations).map((prestationType) => (
                    <div
                      key={prestationType}
                      className='flex w-fit flex-col items-start gap-2'
                    >
                      <h3 className='text-2xl font-bold text-primary'>
                        {prestationType}
                      </h3>
                      <ul className='flex flex-col items-center gap-2'>
                        {prestations[prestationType].map((prestation) => (
                          <li key={prestation} className='text-xl font-medium'>
                            {prestation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Button
                  title='Jeux veux ça !'
                  href='/devis'
                  icon={<BsArrowUpRight size={22} />}
                />
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
}
