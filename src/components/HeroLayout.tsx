export default function HeroLayout({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className='flex flex-col items-center px-16 pb-28 pt-28'>
      <h1 className='relative mb-16 text-8xl font-extrabold after:absolute after:left-1/3 after:top-2/3 after:-z-10 after:block after:h-2/5 after:w-3/4 after:bg-accent'>
        {title}
      </h1>
      <p className='max-w-2xl text-center text-2xl font-semibold'>{subtitle}</p>
    </section>
  );
}
