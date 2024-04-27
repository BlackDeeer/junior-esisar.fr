'use client';
import { useState } from 'react';
import SectionLayout from '../SectionLayout';
import { BiLogoLinkedin } from 'react-icons/bi';

type Team = {
  group: string;
  description: string;
  members: {
    name: string;
    title: string;
    linkedin: string;
  }[];
}[];

export default function Members({ team }: { team: Team }) {
  const [selectedGroup, setSelectedGroup] = useState('Tous');

  function getMembers(team: Team) {
    if (selectedGroup === 'Tous')
      return team.map((group) => group.members).flat();
    return team.filter((group) => group.group === selectedGroup)[0].members;
  }

  const groupSelectionButtons = ['Tous'].concat(
    team.map((group) => group.group)
  );

  return (
    <SectionLayout title='Membres'>
      <div className='flex w-full justify-center'>
        <div className='w-3/4 max-w-5xl'>
          <div className='flex flex-wrap justify-center gap-4'>
            {groupSelectionButtons.map((group) => (
              <button
                onClick={() => setSelectedGroup(group)}
                className={`rounded-md border border-black px-4 py-1 text-xl font-semibold transition-colors hover:bg-secondary-50 ${selectedGroup === group ? 'border-transparent bg-primary text-white hover:bg-primary' : 'bg-transparent'}`}
                key={group}
              >
                {group}
              </button>
            ))}
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-4 py-12 lg:grid-cols-2'>
            {getMembers(team).map((member) => (
              <div key={member.name} className='flex items-center gap-4'>
                <p className='w-fit text-xl font-semibold'>
                  {member.name}, <span className='italic'>{member.title}</span>
                </p>
                <a
                  href={member.linkedin}
                  target='_blank'
                  className='block h-min w-min'
                >
                  <BiLogoLinkedin size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
