import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, PlusCircle, Play, Calendar, MessageSquare } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  if (location.pathname === '/jury') return null;

  const navItems = [
    { to: '/', icon: Home, label: 'Accueil' },
    { to: '/catalogue', icon: LayoutGrid, label: 'Films' },
    { to: '/agenda', icon: Calendar, label: 'Agenda' },
    { to: '/chatbot', icon: MessageSquare, label: 'Assistant' },
    { to: '/auth?mode=register', icon: PlusCircle, label: 'Soumettre' },
    { to: '/jury', icon: Play, label: 'Visionner' },
  ];

  return (
    <div className="fixed bottom-0 md:bottom-6 lg:bottom-8 left-0 right-0 z-[100] flex justify-center pointer-events-none px-2 sm:px-4">
      <div 
        className={`pointer-events-auto transition-all duration-500 h-[64px] lg:h-[72px] backdrop-blur-xl border border-white/5 flex items-center justify-around md:justify-center gap-1 sm:gap-2 md:gap-6 lg:gap-8 px-1 sm:px-4 md:px-8 lg:px-10 rounded-t-2xl md:rounded-full md:border-white/10 md:shadow-2xl shadow-black/20 w-full md:w-auto md:min-w-[500px] lg:min-w-[600px] ${
          location.pathname === '/catalogue' ? 'bg-transparent border-transparent shadow-none' : 'bg-background/95'
        }`}
      >
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `
              flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-3 lg:space-x-4 py-1.5 md:py-2 px-2 sm:px-3 md:px-5 lg:px-6 rounded-xl md:rounded-full transition-all duration-300 flex-1 md:flex-none min-w-0
              ${isActive 
                ? 'text-accent-ia md:bg-accent-ia/10 font-bold' 
                : 'text-neutral-grey hover:text-foreground hover:bg-white/5'}
            `}
          >
            {({ isActive }) => (
              <>
                <Icon size={18} className="shrink-0 md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]" strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[clamp(8px,2vw,10px)] md:text-[10px] lg:text-[11px] uppercase tracking-tighter sm:tracking-wider font-bold text-center leading-none truncate w-full md:w-auto">
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
