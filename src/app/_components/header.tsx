'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileNav from './mobile-nav';
import Portal from './portal';

interface HeaderMenuType {
  path: string;
  name: string;
}

const headerMenu: HeaderMenuType[] = [
  { path: '/blog', name: 'Blog' },
  { path: '/notes', name: 'Notes' },
  { path: '/projects', name: 'Projects' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ path, name }: HeaderMenuType) => {
    const isActive = pathname === path || pathname.startsWith(`${path}/`);
    return isActive ? (
      <a
        href={path}
        className="ml-4 font-normal text-gray-900 transition-colors duration-300 first:ml-0 hover:text-gray-900"
      >
        {name}
      </a>
    ) : (
      <Link
        href={path}
        className="ml-4 font-normal text-gray-400 transition-colors duration-300 first:ml-0 hover:text-gray-900"
      >
        {name}
      </Link>
    );
  };

  return (
    <header className="flex justify-between pt-6 pb-6 text-2xl font-bold leading-tight tracking-tight md:pb-10 lg:pb-16 md:text-3xl md:tracking-tighter">
      <Link className="self-center" href="/">
        mtseo
      </Link>
      <button
        className="px-3 py-1 duration-500 border rounded-md bg-gray-50 md:hidden cursor-grab hover:bg-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        🍔
      </button>
      <nav className="hidden md:flex md:justify-start">
        {headerMenu.map((menu) => (
          <NavLink key={menu.path} {...menu} />
        ))}
      </nav>
      <Portal>
        <MobileNav
          headerMenu={headerMenu}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </Portal>
    </header>
  );
};

export default Header;
