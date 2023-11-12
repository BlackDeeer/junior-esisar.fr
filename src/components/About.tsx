import { BsArrowUpRight } from 'react-icons/bs';
import Button from './Button';
import SectionLayout from './SectionLayout';

export default function NewAbout() {
  return (
    <SectionLayout title='A propos de nous'>
      <div className='flex flex-col items-center'>
        <div className='flex w-2/3 max-w-xl flex-col items-center text-center text-xl'>
          <p className=''>
            Depuis sa création en 1995, les étudiants ont bénéficié de
            l&apos;expertise technique de l&apos;école :
          </p>
          <a
            className='my-4 block text-2xl font-extrabold'
            href='https://esisar.grenoble-inp.fr'
            target='_blank'
            rel='noreferrer'
          >
            Grenoble-INP <span className='text-primary'>ESISAR</span>
          </a>
          <p className='mb-8'>
            Nous nous améliorons sans cesse au fil des années afin de vous
            mettre en relation avec nos meilleurs étudiants pour réaliser vos
            projets. Nos membres sont passionnés, engagés et votre satisfaction
            est le cœur de nos préoccupations.
          </p>
          <Button
            title='Voir la team'
            href='/team'
            icon={<BsArrowUpRight size={22} />}
          />
        </div>
      </div>
    </SectionLayout>
  );
}
