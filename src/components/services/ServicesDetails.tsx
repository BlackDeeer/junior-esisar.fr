'use client';
import { useEffect, useState, useRef, Fragment } from 'react';
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
        'Nous concevons des logiciels sur mesure pour optimiser la gestion de vos opérations et simplifier vos processus.',
      "Développement d'outils d'automatisation":
        'Automatisez vos tâches répétitives avec des outils performants pour gagner du temps et améliorer votre efficacité.',
      "Développement d'applications mobiles":
        'Développez des applications mobiles ergonomiques et intuitives, adaptées à vos besoins et à ceux de vos utilisateurs.',
      'Intégration de solutions de CRM':
        'Optimisez la gestion de vos clients avec des solutions CRM entièrement intégrées à votre infrastructure.',
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
        'Attirez vos clients avec un site vitrine design et optimisé pour présenter efficacement votre activité.',
      "Développement d'applications web":
        'Concevez des applications web interactives, robustes et adaptées à vos besoins spécifiques.',
      'Mise en place de boutiques en ligne':
        'Créez une boutique en ligne performante pour booster vos ventes et gérer vos transactions en toute sécurité.',
      "Création d'API et bases de données":
        'Nous développons des API et bases de données fiables pour une gestion optimale des échanges de données.',
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
        'Nous programmons vos microcontrôleurs pour optimiser les performances de vos systèmes embarqués.',
      "Conception de systèmes embarqués pour l'Internet des Objets (IoT)":
        "Créez des systèmes embarqués connectés pour l'IoT, avec des solutions adaptées à vos besoins technologiques.",
      'Développement de logiciels embarqués pour des dispositifs spécifiques':
        'Nous développons des logiciels embarqués performants et sécurisés pour vos dispositifs sur mesure.',
      'Intégration de technologies de capteurs':
        'Intégrez des capteurs intelligents dans vos systèmes pour collecter et analyser les données en temps réel.',
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
        'Nous configurons et assurons la maintenance de vos serveurs pour garantir leur stabilité et performance.',
      'Surveillance et gestion des réseaux informatiques':
        'Surveillez et gérez vos réseaux pour assurer un flux de données sécurisé et sans interruption.',
      'Mise en place de solutions de sauvegarde et de récupération des données':
        'Protégez vos données critiques avec des solutions de sauvegarde automatisées et des plans de récupération efficaces.',
      'Sécurisation des infrastructures IT':
        'Renforcez la sécurité de votre infrastructure IT avec des solutions adaptées à vos besoins.',
    },
    cta: 'Je veux ça !',
  },
  // Ajouter d'autres prestations ici si besoin
];

const PIXELS_IN_REM = 16;

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
    ) * PIXELS_IN_REM;
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
      <nav className='sticky top-[var(--nav-height)] hidden h-[calc(100vh-var(--nav-height))] w-[30vw] min-w-fit max-w-md bg-primary lg:block'>
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
            <Fragment key={id}>
              {index !== 0 && (
                <div className='mx-auto w-1/2 border-b border-gray-300'></div>
              )}
              <div id={id} className='flex flex-col items-center px-8 py-20'>
                <div className='flex flex-col items-center justify-center bg-bone lg:gap-4'>
                  {icon}
                  <h2 className='text-center text-4xl font-extrabold sm:pb-3 sm:text-5xl lg:text-left'>
                    {title}
                  </h2>
                </div>
                <p className='mt-8 max-w-2xl text-xl font-medium'>
                  {description}
                </p>
                <div className='mb-16 mt-8 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2'>
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
            </Fragment>
          )
        )}
      </div>
    </section>
  );
}
