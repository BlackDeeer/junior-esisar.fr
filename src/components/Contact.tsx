import ContactButton from './ContactButton';

export default function Contact() {
  return (
    <section className='flex flex-col items-center p-4'>
      <h2 className='pb-6 text-center text-4xl font-bold'>
        Alors, on commence quand ?
      </h2>
      <p>
        Partagez-nous votre projet,... Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
      <div id='gravity-zone' className='rounded-full p-20'>
        <ContactButton />
      </div>
    </section>
  );
}
