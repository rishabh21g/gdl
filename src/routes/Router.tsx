import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Pricing from '../pages/Pricing';
import About from '../pages/About';
import Contact from '../pages/Contact';

const routes: Record<string, () => JSX.Element> = {
  '/': Home,
  '/features': Features,
  '/pricing': Pricing,
  '/about': About,
  '/contact': Contact,
};

export const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const Component = routes[currentPath] || Home;
  return <Component />;
};

export const navigate = (path: string) => {
  window.location.hash = path;
};
