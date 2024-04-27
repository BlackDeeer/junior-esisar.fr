import ContactButton from './ContactButton';
import SectionLayout from './SectionLayout';

export default function Contact({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <SectionLayout title={title}>
      <div className='flex flex-col items-center'>
        <p className='text-xl'>{description}</p>
        <div id='gravity-zone' className='rounded-full p-20'>
          <ContactButton />
        </div>
      </div>
    </SectionLayout>
  );
}
