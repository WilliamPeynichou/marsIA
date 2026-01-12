import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, PlusCircle, Play, User } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  if (location.pathname === '/jury') return null;

  const navItems = [
    { to: '/', icon: Home, label: 'Accueil' },
    { to: '/catalogue', icon: LayoutGrid, label: 'Films' },
    { to: '/auth?mode=register', icon: PlusCircle, label: 'Soumettre' },
    { to: '/jury', icon: Play, label: 'Visionner' },
    { to: '/profile', icon: User, label: 'Profil' },
  ];

  return (
    <div 
      className="fixed z-[100] transition-all duration-500 bottom-0 left-0 right-0 h-[70px] bg-background/90 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-4 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-auto md:min-w-[500px] md:h-[64px] md:px-8 md:rounded-full md:border md:border-white/10 md:shadow-2xl shadow-black/20"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `
            flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-3 py-2 px-3 md:px-5 rounded-xl md:rounded-full transition-all duration-300
            ${isActive 
              ? 'text-accent-ia md:bg-accent-ia/10 font-bold' 
              : 'text-neutral-grey hover:text-foreground hover:bg-white/5'}
          `}
        >
          {({ isActive }) => (
            <>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[8px] md:text-[10px] uppercase tracking-wider font-bold">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
