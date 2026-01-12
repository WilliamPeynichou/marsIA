import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import BottomNav from './components/BottomNav';

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
  const hideBottomNav = location.pathname === '/jury';

  return (
    <div className="min-h-screen bg-background text-foreground pb-[70px] md:pb-24">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/jury/favoris" element={<JuryFavoris />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
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
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
