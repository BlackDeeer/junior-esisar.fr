export default function SectionLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='px-8 py-8'>
      <h2 className='pb-8 text-center text-5xl font-extrabold'>{title}</h2>
      {children}
    </section>
  );
}
