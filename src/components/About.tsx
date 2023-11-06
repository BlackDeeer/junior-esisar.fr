'use client';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-3/4 bg-white p-16 text-center'>
        <h1 className='mb-8 text-2xl font-bold'>À propos de nous</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Junior Esisar, la Junior technique pour des projets de développement web',
            1000,
            'Junior Esisar, la Junior technique pour des projets de développement logiciel',
            1000,
            "Junior Esisar, la Junior technique pour des projets d'administration système",
            1000,
            'Junior Esisar, la Junior technique pour des projets de pentesting',
            1000,
            'Junior Esisar, la Junior technique pour des projets de développement embarqué',
            1000,
          ]}
          speed={80}
          deletionSpeed={80}
          className='text-xl'
          repeat={Infinity}
        />
        <p className='mb-4 mt-4 text-lg'>
          Depuis sa création en 1995, les étudiants ont bénéficié de
          l&apos;expertise technique de l&apos;école &nbsp;
          <span className='before:bg-purple-esisar-500 z-1000 relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:shadow-md'>
            <span className='relative text-white'>
              Grenoble-INP ESISAR, UGA
            </span>
          </span>
          .
        </p>
        <p className='text-lg'>
          Nous nous améliorons sans cesse au fil des années afin de vous mettre
          en relation avec nos meilleurs étudiants pour réaliser vos projets.
          Nos membres sont passionnés, engagés et votre satisfaction est le cœur
          de nos préoccupations.
        </p>
      </div>
    </div>
  );
}
