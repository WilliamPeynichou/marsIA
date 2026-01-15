import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Chrome, Phone, MapPin, Briefcase, Share2, Info, ChevronDown, Globe } from 'lucide-react';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(searchParams.get('mode') !== 'register');
  const [registerStep, setRegisterStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'realisateur',
    // Nouveaux champs Profil Participant
    civility: 'M',
    firstName: '',
    lastName: '',
    birthDate: '',
    phone: '',
    mobile: '',
    address: {
      street: '',
      zipCode: '',
      city: '',
      country: ''
    },
    profession: '',
    socials: {
      youtube: '',
      instagram: '',
      linkedin: '',
      facebook: '',
      x: ''
    },
    marketingSource: '',
    newsletter: false
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
    
    if (isLogin) {
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

      // Default simulation for regular login
      localStorage.setItem('user', JSON.stringify({ ...formData }));
      navigate('/profile');
      return;
    }

    // Handle Registration Steps for Realisateur
    if (formData.role === 'realisateur' && registerStep === 1) {
      setRegisterStep(2);
      return;
    }

    // Final Registration
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
              {!isLogin && registerStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
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

              {!isLogin && registerStep === 2 && formData.role === 'realisateur' && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar"
                >
                  <div className="space-y-1">
                    <label className="input-label">Identité</label>
                    <div className="grid grid-cols-3 gap-2">
                      <select 
                        className="input-field col-span-1"
                        value={formData.civility}
                        onChange={(e) => setFormData({...formData, civility: e.target.value})}
                      >
                        <option value="M">M.</option>
                        <option value="Mme">Mme</option>
                        <option value="Iel">Iel</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Prénom*"
                        className="input-field col-span-1"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                      <input
                        type="text"
                        placeholder="Nom*"
                        className="input-field col-span-1"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="input-label">Date de naissance (18+)*</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-grey" size={14} />
                      <input
                        type="date"
                        className="input-field pl-10"
                        required
                        value={formData.birthDate}
                        onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="input-label">Contact*</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-grey" size={14} />
                        <input
                          type="tel"
                          placeholder="Téléphone*"
                          className="input-field pl-10"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-grey" size={14} />
                        <input
                          type="tel"
                          placeholder="Mobile*"
                          className="input-field pl-10"
                          required
                          value={formData.mobile}
                          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="input-label">Localisation*</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-grey" size={14} />
                      <input
                        type="text"
                        placeholder="Rue*"
                        className="input-field pl-10"
                        required
                        value={formData.address.street}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Code Postal*"
                        className="input-field"
                        required
                        value={formData.address.zipCode}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, zipCode: e.target.value}})}
                      />
                      <input
                        type="text"
                        placeholder="Ville*"
                        className="input-field"
                        required
                        value={formData.address.city}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, city: e.target.value}})}
                      />
                    </div>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-grey" size={14} />
                      <input
                        type="text"
                        placeholder="Pays*"
                        className="input-field pl-10"
                        required
                        value={formData.address.country}
                        onChange={(e) => setFormData({...formData, address: {...formData.address, country: e.target.value}})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="input-label">Profil Professionnel*</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-grey" size={14} />
                      <input
                        type="text"
                        placeholder="Métier actuel*"
                        className="input-field pl-10"
                        required
                        value={formData.profession}
                        onChange={(e) => setFormData({...formData, profession: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="input-label flex items-center">
                      <Share2 size={12} className="mr-1" /> Réseaux Sociaux (Optionnel)
                    </label>
                    <div className="space-y-2">
                      <input
                        type="url"
                        placeholder="URL YouTube"
                        className="input-field"
                        value={formData.socials.youtube}
                        onChange={(e) => setFormData({...formData, socials: {...formData.socials, youtube: e.target.value}})}
                      />
                      <input
                        type="url"
                        placeholder="URL Instagram"
                        className="input-field"
                        value={formData.socials.instagram}
                        onChange={(e) => setFormData({...formData, socials: {...formData.socials, instagram: e.target.value}})}
                      />
                      <input
                        type="url"
                        placeholder="URL LinkedIn"
                        className="input-field"
                        value={formData.socials.linkedin}
                        onChange={(e) => setFormData({...formData, socials: {...formData.socials, linkedin: e.target.value}})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="input-label">Comment avez-vous connu marsAI ?*</label>
                    <div className="relative">
                      <Info className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-grey" size={14} />
                      <select 
                        className="input-field pl-10"
                        required
                        value={formData.marketingSource}
                        onChange={(e) => setFormData({...formData, marketingSource: e.target.value})}
                      >
                        <option value="">Sélectionner...</option>
                        <option value="social">Réseaux Sociaux</option>
                        <option value="friend">Bouche à oreille</option>
                        <option value="press">Presse / Articles</option>
                        <option value="ad">Publicité</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <label className="flex items-center space-x-3 p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <input 
                      type="checkbox" 
                      className="accent-accent-ia"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                    />
                    <span className="text-xs text-neutral-grey italic">S'abonner à la newsletter</span>
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            {registerStep === 1 && (
              <>
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
              </>
            )}

            <div className="flex space-x-2">
              {!isLogin && registerStep === 2 && (
                <button 
                  type="button"
                  onClick={() => setRegisterStep(1)}
                  className="btn-secondary flex-1 py-4"
                >
                  Retour
                </button>
              )}
              <button type="submit" className="btn-primary flex-[2] group py-4">
                <span className="flex items-center justify-center text-[10px]">
                  {isLogin 
                    ? 'Se connecter' 
                    : (formData.role === 'realisateur' && registerStep === 1 ? 'Suivant : Mon Profil' : "S'inscrire")}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </button>
            </div>
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
