export default function StepCard({
  step,
  title,
}: {
  step: number;
  title: string;
}) {
  return (
    <div className='h-72 w-56 select-none rounded-2xl bg-primary p-6 text-6xl font-extrabold text-gray-950 opacity-80 shadow-xl'>
      <span className='block pb-4'>{step}.</span>
      <span className='block'>{title}</span>
    </div>
  );
}
