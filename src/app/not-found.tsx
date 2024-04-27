import { BsArrowUpRight } from 'react-icons/bs';
import Button from '@/components/Button';

export default function NotFoundPage() {
  return (
    <main>
      <section className='flex flex-col items-center px-8 pb-28 pt-28 md:px-16 md:pt-20'>
        <h1 className='relative mb-8 text-8xl font-black after:absolute after:left-1/4 after:top-1/2 after:-z-10 after:block after:h-1/2 after:w-4/5 after:bg-accent'>
          404
        </h1>
        <p className='mb-12 text-center text-4xl font-bold md:text-5xl'>
          Cette page n&apos;existe pas
        </p>
        <Button
          href='/'
          title='Revenir au site'
          icon={<BsArrowUpRight size={22} />}
        />
      </section>
    </main>
  );
}
