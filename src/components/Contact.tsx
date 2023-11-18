import ContactButton from './ContactButton';
import SectionLayout from './SectionLayout';

export default function Contact() {
  return (
    <SectionLayout title="Alors, c'est parti ?">
      <div className='flex flex-col items-center'>
        <p className='text-xl'>Partagez-nous votre projet,...</p>
        <div id='gravity-zone' className='rounded-full p-20'>
          <ContactButton />
        </div>
      </div>
    </SectionLayout>
  );
}
