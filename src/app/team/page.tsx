import Image from 'next/image';
import TeamPicture from '@/assets/team.webp';
import HeroLayout from '@/components/HeroLayout';
import SectionLayout from '@/components/SectionLayout';
import Members from '@/components/team/Members';
import Contact from '@/components/Contact';

const ourValues = [
  {
    title: 'Passion',
    description:
      "La passion est le moteur qui nous anime à la Junior Esisar. Chaque membre de notre équipe est profondément passionné par son domaine d'expertise et investi dans chaque projet avec un enthousiasme contagieux. Cette passion se traduit par un dévouement sans faille à fournir des solutions innovantes et de haute qualité à nos clients, et elle est la clé de notre réussite.",
  },
  {
    title: 'Engagement',
    description:
      "À la Junior Esisar, nous sommes engagés à offrir un service exceptionnel à nos clients. Nous nous investissons pleinement dans chaque projet, en mettant tout en œuvre pour atteindre et dépasser les objectifs fixés. Notre engagement envers l'excellence se reflète dans notre approche rigoureuse et notre volonté constante de nous améliorer.",
  },
  {
    title: 'Intégrité',
    description:
      "L'intégrité est au cœur de tout ce que nous faisons à la Junior Esisar. Nous croyons en l'importance de l'honnêteté, de la transparence et du respect dans nos interactions avec nos clients, nos partenaires et nos collègues. Nous nous engageons à agir de manière éthique et responsable, en respectant toujours nos engagements et en faisant preuve de professionnalisme dans toutes nos activités.",
  },
];

const team = [
  {
    group: 'Présidence',
    description:
      "La présidence de la Junior Esisar dirige l'association et supervisent l'ensemble de ses activités.",
    members: [
      {
        name: 'VERIN Jayson',
        title: 'Président',
        linkedin: 'https://www.linkedin.com/in/jayson-axcel-verin/',
      },
      {
        name: 'FRANCO TORRES Nathan',
        title: 'Vice-Président',
        linkedin: 'https://www.linkedin.com/in/nathan-franco-torres-399bb7263/',
      },
      {
        name: 'MAGLOIRE Mathis',
        title: 'Secrétaire',
        linkedin: 'https://www.linkedin.com/in/mathis-magloire-b2538b173/',
      },
    ],
  },
  {
    group: 'Trésorerie',
    description:
      "La trésorerie de la Junior Esisar gère les finances de l'association et veillent à la bonne gestion des ressources financières.",
    members: [
      {
        name: 'TYMEN Nathan',
        title: 'Trésorier',
      },
    ],
  },
  {
    group: 'Commercial',
    description:
      "Le pôle commercial de la Junior Esisar est en charge de la prospection, de la négociation et de la gestion des clients de l'association.",
    members: [
      {
        name: 'FINCK Timothée',
        title: 'Respo. Commercial',
        linkedin: 'https://www.linkedin.com/in/timoth%C3%A9e-finck-4718a82b3/',
      },
    ],
  },
  {
    group: 'Technique',
    description:
      "Le pôle technique de la Junior Esisar travaille sur les projets de développement logiciel, web et embarqué de l'association.",
    members: [
      {
        name: 'BAS Eliot',
        title: 'Respo. Technique',
        linkedin: 'https://www.linkedin.com/in/eliot-bas/',
      },
      {
        name: 'OVIGUIAN Théodore',
        title: 'Respo. Admin. Système',
        linkedin:
          'https://www.linkedin.com/in/th%C3%A9odore-oviguian-6a6a15272/',
      },
    ],
  },
  {
    group: 'Qualité',
    description:
      "Le pôle qualité de la Junior Esisar assure le suivi et l'amélioration de la qualité des projets réalisés par l'association.",
    members: [
      {
        name: 'GANICHAUD Léa',
        title: 'Respo. qualité',
        linkedin: 'https://www.linkedin.com/in/leaganichaud/',
      },
      {
        name: 'Hamza AMRAOUI',
        title: 'Respo. qualité',
        linkedin: 'https://www.linkedin.com/in/hamza-amraoui-0a64b727b/',
      },
    ],
  },
];

export default function Team() {
  return (
    <>
      <HeroLayout
        title='La Team'
        subtitle='Rencontrez une équipe passionnée et dévouée, toujours prête à innover pour surpasser vos attentes.'
      />
      <div className='mx-auto px-4 md:px-8'>
        <Image
          src={TeamPicture}
          alt='Équipe'
          className='mx-auto w-full max-w-5xl'
          priority
        />
      </div>
      <SectionLayout title='Nos valeurs'>
        <div className='mx-auto w-full max-w-3xl'>
          {ourValues.map((value) => (
            <div key={value.title} className='pb-6'>
              <h3 className='pb-2 text-3xl font-bold text-primary'>
                {value.title}
              </h3>
              <p className='text-justify text-xl'>{value.description}</p>
            </div>
          ))}
        </div>
        <div className='flex w-full justify-center pt-8'>
          <div>
            <div className='text-center text-3xl font-bold italic'>
              &quot;L&apos;engagement est ce qui transforme la promesse en
              réalité.&quot;
            </div>
            <div className='pr-4 text-right text-xl font-bold'>
              Abraham Lincoln
            </div>
          </div>
        </div>
      </SectionLayout>
      <Members team={team} />
      <Contact
        title='Vous souhaitez nous rencontrer ?'
        description='Contactez-nous en cliquant sur le bouton ci-dessous !'
      />
    </>
  );
}
