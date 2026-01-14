import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Chrome } from 'lucide-react';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(searchParams.get('mode') !== 'register');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'realisateur'
  });

  const testAccounts = [
    { email: 'admin@marsia.com', password: 'admin', role: 'admin', name: 'Admin Test' },
    { email: 'super@marsia.com', password: 'super', role: 'superadmin', name: 'Super Admin' },
    { email: 'jury@marsia.com', password: 'jury', role: 'jury', name: 'Jury Test' },
    { email: 'user@marsia.com', password: 'user', role: 'user', name: 'User Test' },
    { email: 'real@marsia.com', password: 'real', role: 'realisateur', name: 'Réal Test' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check test accounts first
    const testUser = testAccounts.find(u => u.email === formData.email && u.password === formData.password);
    
    if (testUser) {
      localStorage.setItem('user', JSON.stringify(testUser));
      if (testUser.role === 'superadmin') navigate('/superadmin');
      else if (testUser.role === 'admin') navigate('/admin');
      else if (testUser.role === 'jury') navigate('/jury');
      else navigate('/profile');
      return;
    }

    // Default simulation for new registers
    localStorage.setItem('user', JSON.stringify({ ...formData }));
    if (formData.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/profile');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    navigate(`/auth?mode=${!isLogin ? 'login' : 'register'}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-ia/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cta-gold/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="glass p-8 rounded-[2rem] border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">
              {isLogin ? 'Bon retour' : 'Rejoindre marsIA'}
            </h1>
            <p className="text-neutral-grey text-sm">
              {isLogin 
                ? 'Connectez-vous pour gérer vos films' 
                : 'Créez votre compte réalisateur pour soumettre un film'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-grey" size={18} />
                    <input
                      type="text"
                      placeholder="    Nom complet"
                      className="input-field pl-12"
                      required={!isLogin}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold ml-1">Type de compte</label>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, role: 'realisateur' })}
                        className={`flex-1 py-2 rounded-xl text-[10px] uppercase font-bold border transition-all ${
                          formData.role === 'realisateur' 
                            ? 'bg-accent-ia border-accent-ia text-white' 
                            : 'border-white/10 text-neutral-grey hover:bg-white/5'
                        }`}
                      >
                        Réalisateur
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, role: 'admin' })}
                        className={`flex-1 py-2 rounded-xl text-[10px] uppercase font-bold border transition-all ${
                          formData.role === 'admin' 
                            ? 'bg-cta-gold border-cta-gold text-white' 
                            : 'border-white/10 text-neutral-grey hover:bg-white/5'
                        }`}
                      >
                        Admin (Test)
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-grey" size={18} />
              <input
                type="email"
                placeholder="     Email"
                className="input-field pl-12"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-grey" size={18} />
              <input
                type="password"
                placeholder="     Mot de passe"
                className="input-field pl-12"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary w-full group py-4">
              <span className="flex items-center justify-center">
                {isLogin ? 'Se connecter' : "S'inscrire"}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <button 
              onClick={toggleMode}
              className="text-sm text-neutral-grey hover:text-foreground transition-colors"
            >
              {isLogin ? (
                <>Pas encore de compte ? <span className="text-accent-ia font-bold">Créer un profil</span></>
              ) : (
                <>Déjà un compte ? <span className="text-accent-ia font-bold">Se connecter</span></>
              )}
            </button>

            <div className="flex items-center space-x-4 my-6">
              <div className="flex-1 h-[1px] bg-white/10" />
              <span className="text-[10px] uppercase text-neutral-grey font-bold">ou utiliser un compte test</span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {testAccounts.map(acc => (
                <button
                  key={acc.role}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, email: acc.email, password: acc.password });
                    setIsLogin(true);
                  }}
                  className="py-2 rounded-lg bg-white/5 border border-white/10 text-[9px] uppercase font-bold text-neutral-grey hover:bg-white/10 hover:text-foreground transition-all"
                >
                  {acc.role}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 my-6">
              <div className="flex-1 h-[1px] bg-white/10" />
              <span className="text-[10px] uppercase text-neutral-grey font-bold">ou continuer avec</span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>

            <button className="w-full py-3 rounded-xl border border-white/10 flex items-center justify-center space-x-2 text-sm text-foreground hover:bg-white/5 transition-all">
              <Chrome size={18} />
              <span>Google</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
