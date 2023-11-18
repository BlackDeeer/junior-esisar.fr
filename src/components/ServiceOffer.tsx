import SectionLayout from './SectionLayout';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { MdDevices } from 'react-icons/md';
import { PiCircuitryFill } from 'react-icons/pi';
import { FaGear } from 'react-icons/fa6';

const services = [
  {
    title: 'Développement logiciel',
    description:
      'Développez vos outils internes ou concrétisez vos projets logiciel, C, Java, Python, Rust... ',
    href: '/services#developpement-logiciel',
    icon: <PiBracketsCurlyBold size={40} />,
  },
  {
    title: 'Développement web',
    description:
      'Le web, pilier de la communication, développez vos outils internes ou concrétisez vos projets logiciel. ',
    href: '/services#developpement-web',
    icon: <MdDevices size={40} />,
  },
  {
    title: 'Développement embarqué',
    description:
      'Mettez en place des bancs de tests, développez sur vos cartes électroniques ou vos éléments embarqués',
    href: '/services#developpement-embarque',
    icon: <PiCircuitryFill size={40} />,
  },
  {
    title: 'Administration système',
    description:
      'Configurez, maintenez, optimisez vos systèmes Linux ou mettez en place des systèmes complexes',
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
      <article className='hover:bg-secondary-50 cursor-pointer rounded border border-black p-4 transition-colors duration-300'>
        {icon}
        <h3 className='text-secondary text-xl font-bold'>{title}</h3>
        <p>{description}</p>
      </article>
    </a>
  );
}

export default function ServiceOffer() {
  return (
    <SectionLayout title='Nos prestations'>
      <div className='flex flex-col items-center text-xl'>
        <p className='w-2/3 max-w-xl pb-8 text-center'>
          Une petite phrase de presentation, lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis, commodi eos, perferendis
          voluptates eum repellendus aut.
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
