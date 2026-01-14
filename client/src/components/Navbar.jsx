import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[110] bg-background/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
      <Link to="/" className="text-2xl font-display font-extrabold tracking-tighter">
        MARSAI<span className="text-white/40">.</span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
        <Link to="/" className="hover:text-white/60 transition-colors">{t('nav.home')}</Link>
        <Link to="/submit" className="hover:text-white/60 transition-colors">{t('nav.submit')}</Link>
        <Link to="/jury" className="hover:text-white/60 transition-colors">{t('nav.jury')}</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/profile">
          <button className="bg-white text-background px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity">
            {t('nav.login')}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
