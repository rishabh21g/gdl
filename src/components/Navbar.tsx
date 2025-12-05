import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.hash.slice(1) || '/';

  return (
    <nav className="bg-surface border-b border-theme sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                GD
              </div>
              <span className="text-2xl font-bold text-primary">GoDraw</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className={`text-theme transition-colors hover:text-primary ${
                  currentPath === item.path ? 'text-primary font-bold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="btn-primary px-6 py-2">Get Started</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-theme hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-t border-theme">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className={`block px-3 py-2 rounded-md text-theme hover:bg-hover ${
                  currentPath === item.path ? 'bg-active text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="btn-primary w-full mt-2">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};
