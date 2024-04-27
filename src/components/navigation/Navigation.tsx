import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const links = [
  {
    href: '/',
    label: 'Accueil',
  },
  {
    href: '/prestations',
    label: 'Prestations',
  },
  {
    href: '/team',
    label: 'La Team',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export default function Navigation() {
  return (
    <>
      <DesktopNavigation links={links} />
      <MobileNavigation links={links} />
    </>
  );
}
