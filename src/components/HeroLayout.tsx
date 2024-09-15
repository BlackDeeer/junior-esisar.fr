export default function HeroLayout({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const words = title.split(' ');
  const lastWord = words.pop();
  const firstWords = words.join(' ');
  return (
    <section className='flex flex-col items-center px-8 pb-16 pt-28 md:px-16 md:pb-28'>
      <h1 className='relative mb-16 text-7xl font-extrabold md:text-8xl'>
        {firstWords}{' '}
        <span className='relative after:absolute after:left-6 after:top-[60%] after:-z-10 after:block after:h-[30%] after:w-[95%] after:bg-accent md:after:left-10'>
          {lastWord}
        </span>
      </h1>
      <p className='max-w-2xl text-center text-2xl font-semibold'>{subtitle}</p>
    </section>
  );
}
