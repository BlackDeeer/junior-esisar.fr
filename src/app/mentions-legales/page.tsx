import HeroLayout from '@/components/HeroLayout';

const editorInformations = {
  Nom: 'Junior Esisar',
  Adresse: '50 rue Barthélémy de Laffemas, 26000 Valence',
  Email: 'junior.esisar@esisar.grenoble-inp.fr',
  Téléphone: '+33611111111',
  Président: 'John Doe',
  'Directeur de la publication': 'Eliot Bas',
} as const;

const host_informations_1 = {
  "Raison sociale de l'hébergeur 1": 'OVH',
  "Adresse du siège social de l'hébergeur 1": '2 rue Kellermann, 59100 Roubaix',
  "Numéro de téléphone de l'hébergeur 1": '1007',
} as const;

const host_informations_2 = {
  "Raison sociale de l'hébergeur 2": 'GitHub B.V.',
  "Adresse du siège social de l'hébergeur 2":
    'PRIUS BERNHARDPLEIN 200 PAYS-BAS',
  "Numéro de téléphone de l'hébergeur 2": 'Non communiqué',
} as const;

export default function MentionsLegales() {
  return (
    <>
      <HeroLayout
        title='Mentions légales'
        subtitle='Vous trouverez sur cette page toutes les informations légales nécessaires concernant notre association, conformément aux lois et réglementations en vigueur.'
      />
      <div className='mx-auto w-fit max-w-2xl pb-24 text-xl'>
        <div className='pb-12'>
          <h2 className='pb-6 text-4xl font-bold'>
            Informations sur l&apos;éditeur du site
          </h2>
          {Object.keys(editorInformations).map((info) => (
            <p key={info}>
              <span className='font-bold'>{info} :</span>{' '}
              {editorInformations[info as keyof typeof editorInformations]}
            </p>
          ))}
        </div>
        <div>
          <h2 className='pb-6 text-4xl font-bold'>
            Informations sur l&apos;hébergeur du site
          </h2>
          <div className='pb-4'>
            {Object.keys(host_informations_1).map((info) => (
              <p key={info}>
                <span className='font-bold'>{info} :</span>{' '}
                {host_informations_1[info as keyof typeof host_informations_1]}
              </p>
            ))}
          </div>
          <div>
            {Object.keys(host_informations_2).map((info) => (
              <p key={info}>
                <span className='font-bold'>{info} :</span>{' '}
                {host_informations_2[info as keyof typeof host_informations_2]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
