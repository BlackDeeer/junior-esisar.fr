import SectionLayout from './SectionLayout';
import Button from './Button';
import { BsArrowUpRight } from 'react-icons/bs';

export default function Methodology() {
  return (
    <SectionLayout title='Notre méthodologie'>
      <div className='flex flex-col items-center text-xl'>
        <p className='w-3/4 max-w-xl text-center'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur.
        </p>
        <p className='my-24'>
          [Diagramme, animation au scroll sympa, scroll horizontal ?]
        </p>
        <Button
          href='/service#methodologie'
          title='En savoir plus'
          icon={<BsArrowUpRight size={22} />}
        />
      </div>
    </SectionLayout>
  );
}
