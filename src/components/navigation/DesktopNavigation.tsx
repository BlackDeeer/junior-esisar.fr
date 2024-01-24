'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
//@ts-ignore
import JuniorLogo from '@/assets/logo_junior.svg?url';

export default function DesktopNavigation({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const pathname = usePathname();

  const [isBorderVisible, setIsBorderVisible] = useState(false);

  useEffect(() => {
    const handleNavBorderVisibility = () => {
      if (window.scrollY > 0) {
        setIsBorderVisible(true);
      } else {
        setIsBorderVisible(false);
      }
    };

    window.addEventListener('scroll', handleNavBorderVisibility);

    return () =>
      window.removeEventListener('scroll', handleNavBorderVisibility);
  });

  return (
    <nav
      className={`sticky top-0 z-50 box-content hidden h-[var(--nav-height)] items-center justify-between border-b bg-bone pl-10 pr-16 transition-colors duration-300 ease-out md:flex ${
        isBorderVisible ? 'border-black/100' : 'border-black/0'
      }`}
    >
      <Link href='/' className='flex items-center gap-4'>
        <Image src={JuniorLogo} height={50} alt='Junior Logo' />
        <span className='relative text-3xl font-extrabold '>Junior Esisar</span>
      </Link>
      <ul className='flex gap-8 text-xl font-semibold'>
        {links.map(({ href, label }) => (
          <li
            key={href}
            className={`${
              pathname === href ? 'text-primary' : ''
            } transition-colors duration-300 after:block after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform hover:after:scale-x-100`}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
