import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Submit from './pages/Submit';
import Jury from './pages/Jury';
import JuryFavoris from './pages/JuryFavoris';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import SuperAdmin from './pages/SuperAdmin';
import StaffPanel from './pages/StaffPanel';
import Auth from './pages/Auth';
import VenueInfo from './pages/VenueInfo';
import Prizes from './pages/Prizes';
import JuryTeam from './pages/JuryTeam';
import Winners from './pages/Winners';
import OffCompetition from './pages/OffCompetition';
import Chatbot from './pages/Chatbot';
import FilmDetail from './pages/FilmDetail';
import Agenda from './pages/Agenda';
import BottomNav from './components/BottomNav';
import { useTranslation } from 'react-i18next';
import { Globe, User } from 'lucide-react';

// Error Boundary pour capturer les erreurs React
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', backgroundColor: '#fff' }}>
          <h1>Une erreur s'est produite</h1>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const AppContent = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const hideBottomNav = location.pathname === '/jury';
  const hideBottomPadding = location.pathname === '/catalogue' || location.pathname.startsWith('/film/');

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className={`min-h-screen bg-background text-foreground ${hideBottomPadding ? '' : 'pb-[70px] md:pb-24'}`}>
      {/* Boutons d'action fixes (Top Right) */}
      <div className="fixed top-6 right-6 z-[120] flex items-center space-x-3">
        <button 
          onClick={toggleLanguage}
          className="glass p-3 rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center space-x-2 shadow-2xl"
        >
          <Globe size={18} className="text-accent-ia" />
          <span className="text-[10px] font-bold uppercase tracking-widest">
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </span>
        </button>
        
        <Link 
          to="/profile"
          className="glass p-3 rounded-full border border-white/10 hover:bg-white/10 transition-all shadow-2xl"
        >
          <User size={18} className="text-earth-brown" />
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/jury/favoris" element={<JuryFavoris />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/venue" element={<VenueInfo />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/jury-team" element={<JuryTeam />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/off-competition" element={<OffCompetition />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/film/:id" element={<FilmDetail />} />
        <Route path="/superadmin" element={<SuperAdmin />} />
        <Route path="/staff" element={<StaffPanel />} />
      </Routes>
      {!hideBottomNav && <BottomNav />}
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router basename="/marsIA">
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
