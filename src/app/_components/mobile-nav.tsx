import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderMenuType {
  path: string;
  name: string;
}

interface MobileNavProps {
  headerMenu: HeaderMenuType[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({
  headerMenu,
  isMenuOpen,
  setIsMenuOpen,
}: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={`md:hidden fixed transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out flex flex-col bg-white right-0 w-3/4 h-full top-0 pt-24 z-50 border-l border-gray-200 shadow-lg`}
    >
      <button
        className="absolute top-0 right-0 mt-8 mr-8 text-2xl"
        onClick={() => setIsMenuOpen(false)}
      >
        &#x2715;
      </button>
      {headerMenu.map((menu) => {
        const isActive =
          pathname === menu.path || pathname.startsWith(`${menu.path}/`);
        return isActive ? (
          <a
            key={menu.path}
            href={menu.path}
            className="p-4 ml-0 font-normal text-gray-900 transition-colors duration-300 md:ml-4 first:ml-0 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            {menu.name}
          </a>
        ) : (
          <Link
            key={menu.path}
            href={menu.path}
            className="p-4 ml-0 font-normal text-gray-400 transition-colors duration-300 md:ml-4 first:ml-0 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
