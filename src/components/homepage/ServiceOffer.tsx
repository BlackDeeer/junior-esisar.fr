import SectionLayout from '../SectionLayout';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { MdDevices } from 'react-icons/md';
import { PiCircuitryFill } from 'react-icons/pi';
import { FaGear } from 'react-icons/fa6';

const services = [
  {
    title: 'Développement logiciel',
    description:
      'Nous développons vos outils internes et concrétisons vos projets logiciel. Nous concevons des solutions sur mesure et développons des applications robustes.',
    href: '/services#developpement-logiciel',
    icon: <PiBracketsCurlyBold size={40} />,
  },
  {
    title: 'Développement web',
    description:
      'Découvrez notre expertise en développement web pour des solutions modernes et intuitives. Nous concevons des sites et web performants qui captivent vos utilisateurs. ',
    href: '/services#developpement-web',
    icon: <MdDevices size={40} />,
  },
  {
    title: 'Développement embarqué',
    description:
      'Nous réalisons vos projets sur mesure en électronique et informatique embarquée. Nous mettons en place des bancs de tests et développons sur vos cartes électroniques.',
    href: '/services#developpement-embarque',
    icon: <PiCircuitryFill size={40} />,
  },
  {
    title: 'Administration système',
    description:
      "Confiez la gestion de vos systèmes informatiques à notre équipe d'administrateurs système. Nous Configurons, maintenons, optimisons et mettons en place vos systèmes.",
    href: '/services#administration-systeme',
    icon: <FaGear size={40} />,
  },
];

function Card({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a href={href}>
      <article className='h-full cursor-pointer rounded border border-black p-4 transition-colors duration-300 hover:bg-secondary-50'>
        {icon}
        <h3 className='text-xl font-bold text-secondary'>{title}</h3>
        <p>{description}</p>
      </article>
    </a>
  );
}

export default function ServiceOffer() {
  return (
    <SectionLayout title='Nos prestations'>
      <div className='flex flex-col items-center text-xl'>
        <p className='w-2/3 max-w-2xl pb-8 text-center'>
          Découvrez notre palette complète de prestations, garantissant qualité,
          fiabilité et performance à chaque étape de votre projet technique.
        </p>
        <div className='grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2'>
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
