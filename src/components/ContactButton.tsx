'use client';
import CircularText from '@/assets/contact_circular_text.svg';
import { useEffect } from 'react';

function animateGravityButton(
  e: MouseEvent,
  gravityZone: HTMLDivElement,
  gravityButton: HTMLDivElement
) {
  const rect = gravityZone.getBoundingClientRect();
  const h = rect.width / 2;

  const x = e.clientX - rect.left - h;
  const y = e.clientY - rect.top - h;

  const r1 = Math.sqrt(x * x + y * y);
  const r2 = (1 - r1 / h) * r1;

  const angle = Math.atan2(y, x);
  const translateX = Math.round(Math.cos(angle) * r2 * 100) / 100 / 2;
  const translateY = Math.round(Math.sin(angle) * r2 * 100) / 100 / 2;

  gravityButton.style.setProperty('--tw-translate-x', `${translateX}px`);
  gravityButton.style.setProperty('--tw-translate-y', `${translateY}px`);
}

export default function ContactButton() {
  useEffect(() => {
    const gravityZone = document.querySelector<HTMLDivElement>('#gravity-zone');
    const gravityButton =
      document.querySelector<HTMLDivElement>('#gravity-button');

    if (!gravityZone || !gravityButton) return;

    gravityZone.addEventListener('mousemove', (e) =>
      animateGravityButton(e, gravityZone, gravityButton)
    );

    gravityButton.addEventListener('mouseleave', () => {
      gravityZone.style.setProperty('--tw-translate-x', '0px');
      gravityZone.style.setProperty('--tw-translate-y', '0px');
    });

    return () => {
      gravityZone.removeEventListener('mousemove', () => {});
      gravityButton.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <a href='/devis' className='block w-fit'>
      <div
        id='gravity-button'
        className='translate-y ease group relative h-44 w-44 translate-y-0 rounded-full bg-primary text-white'
      >
        <div className='pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 '>
          <CircularText
            className='origin-center animate-[spin_12s_linear_infinite] transition-colors duration-300 ease-out group-hover:text-black'
            height={164}
            width={164}
          />
        </div>
        <div className='bg-accent absolute bottom-0 left-0 right-0 top-0 scale-50 rounded-full transition-transform delay-200 duration-300 ease-out group-hover:scale-100 group-hover:delay-0'></div>
        <div className='absolute bottom-0 left-0 right-0 top-0 scale-0 rounded-full bg-primary transition-transform delay-0 duration-300 ease-out group-hover:scale-50 group-hover:delay-200 group-active:scale-0 group-active:delay-0'></div>
      </div>
    </a>
  );
}
