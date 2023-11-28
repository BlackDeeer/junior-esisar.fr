import Image from 'next/image';
import { BiLogoLinkedin } from 'react-icons/bi';
import TeamPicture from '@/assets/equipe.jpg';
import HeroLayout from '@/components/HeroLayout';

export default function Team() {
  const team = [
    {
      avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
      name: 'Martiana dialan',
      title: 'Product designer',
      linkedin: 'javascript:void(0)',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
      name: 'Micheal colorand',
      title: 'Software engineer',
      linkedin: 'javascript:void(0)',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'Brown Luis',
      title: 'Full stack engineer',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
      linkedin: 'javascript:void(0)',
      twitter: 'javascript:void(0)',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      name: 'Lysa sandiago',
      title: 'Head of designers',
      linkedin: 'javascript:void(0)',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Daniel martin',
      title: 'Product designer',
      linkedin: 'javascript:void(0)',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Vicky tanson',
      title: 'Product manager',
      linkedin: 'javascript:void(0)',
    },
  ];

  return (
    <>
      <HeroLayout
        title='La Team'
        subtitle='Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.'
      />
      <section className='py-14'>
        <div className='mx-auto px-4 md:px-8'>
          {/* Photo de l'équipe */}
          <Image
            src={TeamPicture}
            alt='Équipe'
            style={{ width: '100%', height: 'auto' }}
          />
          {/* La présidence */}
          <div className='mx-auto mt-12 flex max-w-4xl flex-col md:flex-row'>
            <div className='mt-6 flex-1 md:mr-2 md:mt-0'>
              <Image
                height={192}
                width={192}
                src={team[0].avatar}
                alt={team[0].name}
              />
              <h4 className='mt-2'>{team[0].name}</h4>
              <p className='text-sm'>{team[0].title}</p>
              <a href={team[0].linkedin}>
                <BiLogoLinkedin size={24} />
              </a>
            </div>
            <div className='mt-6 flex-1 md:mr-2 md:mt-0'>
              <Image
                height={192}
                width={192}
                src={team[1].avatar}
                alt={team[1].name}
              />
              <h4 className='mt-2'>{team[1].name}</h4>
              <p className='text-sm'>{team[1].title}</p>
              <a href={team[1].linkedin}>
                <BiLogoLinkedin size={24} />
              </a>
            </div>
            <div className='mt-6 flex-1 md:ml-2 md:mt-0'>
              <h3 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>
                La présidence
              </h3>
              <p>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* La trésorerie */}
          <div className='mx-auto mt-12 flex max-w-4xl flex-col md:flex-row'>
            <div className='mr-20 mt-6 flex-1 md:ml-2 md:mt-0'>
              <h3 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>
                La trésorerie
              </h3>
              <p>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Blandit volutpat maecenas volutpat blandit aliquam etiam erat.
                Elit duis tristique sollicitudin nibh. Justo eget magna
                fermentum iaculis eu. Condimentum id venenatis a condimentum
                vitae. Lobortis elementum nibh tellus molestie nunc non blandit
                massa enim.
              </p>
            </div>
            <div className='mt-6 flex-1 md:mr-2 md:mt-0'>
              <Image
                height={192}
                width={192}
                src={team[2].avatar}
                alt={team[2].name}
              />
              <h4 className='mt-2'>{team[2].name}</h4>
              <p className='text-sm'>{team[2].title}</p>
              <a href={team[2].linkedin}>
                <BiLogoLinkedin size={24} />
              </a>
            </div>
            <div className='mt-6 flex-1 md:mr-2 md:mt-0'>
              <Image
                height={192}
                width={192}
                src={team[3].avatar}
                alt={team[3].name}
              />
              <h4 className='mt-2'>{team[3].name}</h4>
              <p className='text-sm'>{team[3].title}</p>
              <a href={team[3].linkedin}>
                <BiLogoLinkedin size={24} />
              </a>
            </div>
          </div>
          {/* Le pole commercial */}
          <div className='mx-auto mt-12 flex max-w-4xl flex-col md:flex-row'>
            <div className='mt-6 flex-1 md:mt-0'>
              <Image
                height={192}
                width={192}
                src={team[4].avatar}
                alt={team[4].name}
              />
              <h4 className='mt-2'>{team[4].name}</h4>
              <p className='text-sm'>{team[4].title}</p>
              <a href={team[4].linkedin}>
                <BiLogoLinkedin size={24} />
              </a>
            </div>
            <div className='flex-1 md:ml-6'>
              <Image
                height={192}
                width={192}
                src={team[5].avatar}
                alt={team[5].name}
              />
              <h4 className='mt-2'>{team[5].name}</h4>
              <p className='text-sm'>{team[5].title}</p>
              <a href={team[5].linkedin}>
                <BiLogoLinkedin size={24} />
              </a>
            </div>
            <div className='mt-6 flex-1 md:ml-2 md:mt-0'>
              <h3 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>
                Le pole commercial
              </h3>
              <p>
                <br />
                Turpis nunc eget lorem dolor sed viverra ipsum nunc. Consequat
                interdum varius sit amet. Ipsum a arcu cursus vitae congue
                mauris rhoncus. Mi eget mauris pharetra et ultrices. Sit amet
                risus nullam eget felis eget nunc. Integer vitae justo eget
                magna fermentum iaculis eu non diam. Ultrices neque ornare
                aenean euismod elementum nisi. Etiam tempor orci eu lobortis
                elementum nibh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
