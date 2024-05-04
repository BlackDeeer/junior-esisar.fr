export default function Button({
  href,
  title,
  icon,
  download,
}: {
  href: string;
  title: string;
  icon?: JSX.Element;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      className='flex w-fit items-center gap-3 rounded-full bg-primary px-5 py-2 text-white transition-colors duration-200 hover:bg-secondary'
      download={download}
    >
      {icon}
      <span className='pb-0.5 text-xl font-bold tracking-wide'>{title}</span>
    </a>
  );
}
