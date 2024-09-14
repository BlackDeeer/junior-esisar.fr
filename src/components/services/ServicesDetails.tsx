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
  prestations: Record<string, string>;
  cta: string;
};

const services: Service[] = [
  {
    title: 'Développement logiciel',
    description:
      'Nous développons vos outils internes et concrétisons vos projets logiciels. Nous concevons des solutions sur mesure et développons des applications robustes.',
    id: 'developpement-logiciel',
    icon: <PiBracketsCurlyBold size={50} />,
    prestations: {
      'Création de logiciels de gestion':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      "Développement d'outils d'automatisation":
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      "Développement d'applications mobiles":
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      'Intégration de solutions de CRM':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
    },
    cta: 'Je veux ça !',
  },
  {
    title: 'Développement web',
    description:
      'Découvrez notre expertise en développement web pour des solutions modernes et intuitives. Nous concevons des sites et applications web performants qui captivent vos utilisateurs.',
    id: 'developpement-web',
    icon: <MdDevices size={50} />,
    prestations: {
      'Création de sites vitrine':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      "Développement d'applications web":
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      'Mise en place de boutiques en ligne':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      "Création d'API et bases de données":
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
    },
    cta: 'Je veux ça !',
  },
  {
    title: 'Développement embarqué',
    description:
      'Nous réalisons vos projets sur mesure en électronique et informatique embarquée. Nous mettons en place des bancs de tests et développons sur vos cartes électroniques.',
    id: 'developpement-embarque',
    icon: <PiCircuitryFill size={50} />,
    prestations: {
      'Programmation de microcontrôleurs':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      "Conception de systèmes embarqués pour l'Internet des Objets (IoT)":
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      'Développement de logiciels embarqués pour des dispositifs spécifiques':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      'Intégration de technologies de capteurs':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
    },
    cta: 'Je veux ça !',
  },
  {
    title: 'Administration système',
    description:
      "Confiez la gestion de vos systèmes informatiques à notre équipe d'administrateurs système. Nous Configurons, maintenons, optimisons et mettons en place vos systèmes.",
    id: 'administration-systeme',
    icon: <FaGear size={50} />,
    prestations: {
      'Configuration et maintenance de serveurs':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      'Surveillance et gestion des réseaux informatiques':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      'Mise en place de solutions de sauvegarde et de récupération des données':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
      'Sécurisation des infrastructures IT':
        'Ceci est un texte raisonnable qui permet de décrir ce service de façon raisonnable également.',
    },
    cta: 'Je veux ça !',
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
          ({ title, description, prestations, id, icon, cta }, index) => (
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
                  <h2 className='pb-3 text-5xl font-extrabold'>{title}</h2>
                </div>
                <p className='mt-8 max-w-2xl text-xl font-medium'>
                  {description}
                </p>
                <div className='mb-16 mt-8 grid max-w-2xl grid-cols-2 gap-8'>
                  {Object.keys(prestations).map((prestationType) => (
                    <div
                      key={prestationType}
                      className='flex w-fit flex-col items-start gap-2'
                    >
                      <h3 className='text-2xl font-bold text-primary'>
                        {prestationType}
                      </h3>
                      <p className='text-xl font-medium'>
                        {prestations[prestationType]}
                      </p>
                    </div>
                  ))}
                </div>
                <Button
                  title={cta}
                  href='/contact'
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
