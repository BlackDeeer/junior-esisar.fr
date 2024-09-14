import SectionLayout from '../SectionLayout';

const whyChooseUs = [
  {
    title: 'Une expertise technique reconnue',
    description:
      "La Junior Esisar est directement liée à Grenoble-INP Esisar, école d'ingénieurs réputée pour la formation de spécialistes en systèmes embarqués, électronique, informatique et réseaux. Nos étudiants bénéficient d'un enseignement rigoureux et d'une solide expérience pratique, ce qui leur permet de répondre efficacement aux besoins complexes de vos projets.",
  },
  {
    title: 'Des compétences pluridisciplinaires',
    description:
      "Nos membres maîtrisent un large éventail de compétences, du développement logiciel au développement embarqué, en passant par le web et l'administration système. Cette diversité nous permet de proposer des solutions techniques adaptées et sur mesure, peu importe la nature de votre projet.",
  },
  {
    title: "Des étudiants engagés et avides d'innovation",
    description:
      'Passionnés et en phase avec les dernières innovations technologiques, nos étudiants vous apportent une perspective jeune et dynamique. Ils sont formés pour innover, anticiper les évolutions technologiques et répondre aux défis de demain.',
  },
  {
    title: 'Un accompagnement de qualité',
    description:
      "À la Junior Esisar, nous plaçons la satisfaction de nos clients au cœur de nos actions. Vous bénéficiez d'un suivi personnalisé et d'une relation de proximité avec nos équipes, qui s'assurent du bon déroulement de votre projet du début à la fin.",
  },
  {
    title: 'Un partenariat gagnant-gagnant',
    description:
      "En choisissant la Junior Esisar, vous investissez dans une collaboration avec de futurs ingénieurs prêts à innover et à s'adapter à vos besoins spécifiques. Vous bénéficiez non seulement d'une expertise, mais aussi d'un regard neuf et avant-gardiste sur vos projets techniques.",
  },
];

export default function WhyChooseUs() {
  return (
    <SectionLayout title='Pourquoi choisir la Junior Esisar ?'>
      <div className='mx-auto w-full max-w-3xl'>
        {whyChooseUs.map((reason) => (
          <div key={reason.title} className='pb-4'>
            <h3 className='text-2xl font-bold'>{reason.title}</h3>
            <p className='text-justify text-xl'>{reason.description}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
