import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const links = [
  {
    href: '/',
    label: 'Accueil',
  },
  {
    href: '/services',
    label: 'Prestations',
  },
  {
    href: '/team',
    label: 'A propos',
  },
  {
    href: '/devis',
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
