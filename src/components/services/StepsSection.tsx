import SectionLayout from '../SectionLayout';
import StepCard from './StepCard';

export default function StepsSection() {
  return (
    <SectionLayout title='Notre méthodologie'>
      <div className='flex h-[32rem] justify-center overflow-hidden pt-8'>
        <div className='relative w-60'>
          <div className='absolute -translate-x-16 translate-y-0 -rotate-[10deg]'>
            <StepCard step={1} title='On discute' />
          </div>
          <div className='absolute translate-x-36 translate-y-20 rotate-[15deg]'>
            <StepCard step={2} title='On avance' />
          </div>
          <div className='absolute -translate-x-8 translate-y-64 -rotate-[24deg]'>
            <StepCard step={3} title='On (re) discute' />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
