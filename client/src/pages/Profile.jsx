import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Film, Clock, Check, X, LogOut, Settings, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('submissions');

  // Mock user data
  const user = {
    name: "Marie Dupont",
    email: "marie.dupont@email.com",
    country: "France",
    role: "Réalisateur"
  };

  // Mock submissions
  const submissions = [
    { id: 1, title: "Marseille 2050", status: "validated", date: "12 Jan 2026" },
    { id: 2, title: "Digital Nature", status: "pending", date: "10 Jan 2026" },
    { id: 3, title: "AI Dreams", status: "rejected", date: "5 Jan 2026" },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'validated':
        return <span className="flex items-center space-x-1 text-nature-green text-[10px] font-bold uppercase"><Check size={12} /><span>Validé</span></span>;
      case 'pending':
        return <span className="flex items-center space-x-1 text-accent-ia text-[10px] font-bold uppercase"><Clock size={12} /><span>En attente</span></span>;
      case 'rejected':
        return <span className="flex items-center space-x-1 text-red-500 text-[10px] font-bold uppercase"><X size={12} /><span>Refusé</span></span>;
      default:
        return null;
    }
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="min-h-screen px-6 pt-8 pb-24">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-serif italic text-earth-brown">Mon Profil</h1>
          <p className="text-[10px] uppercase tracking-widest text-earth-brown/50 mt-1">{user.role}</p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={toggleLanguage}
            className="p-2 rounded-xl bg-earth-brown/5 text-earth-brown/60"
          >
            <Globe size={18} />
          </button>
          <button className="p-2 rounded-xl bg-earth-brown/5 text-earth-brown/60">
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* User Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/60 rounded-3xl p-6 mb-8"
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-accent-ia/20 flex items-center justify-center">
            <User size={28} className="text-accent-ia" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-earth-brown">{user.name}</h2>
            <p className="text-sm text-earth-brown/60">{user.email}</p>
            <p className="text-[10px] text-earth-brown/40 uppercase tracking-widest mt-1">{user.country}</p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: "Soumissions", value: submissions.length },
          { label: "Validés", value: submissions.filter(s => s.status === 'validated').length },
          { label: "En attente", value: submissions.filter(s => s.status === 'pending').length }
        ].map((stat, i) => (
          <div key={i} className="bg-white/40 rounded-2xl p-4 text-center">
            <span className="text-2xl font-display font-bold text-accent-ia">{stat.value}</span>
            <p className="text-[9px] uppercase tracking-widest text-earth-brown/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        {['submissions', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all ${
              activeTab === tab ? 'bg-accent-ia text-white' : 'bg-earth-brown/5 text-earth-brown/50'
            }`}
          >
            {tab === 'submissions' ? 'Mes films' : 'Paramètres'}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'submissions' && (
        <div className="space-y-3">
          {submissions.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 rounded-2xl p-4 flex items-center space-x-4"
            >
              <div className="w-12 h-12 rounded-xl bg-earth-brown/5 flex items-center justify-center">
                <Film size={20} className="text-earth-brown/40" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-earth-brown">{film.title}</h3>
                <p className="text-[10px] text-earth-brown/40">{film.date}</p>
              </div>
              {getStatusBadge(film.status)}
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-4">
          <div className="bg-white/60 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-earth-brown mb-4">Informations personnelles</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Nom</label>
                <input type="text" defaultValue={user.name} className="input-field" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Email</label>
                <input type="email" defaultValue={user.email} className="input-field" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Pays</label>
                <input type="text" defaultValue={user.country} className="input-field" />
              </div>
            </div>
            <button className="btn-primary w-full mt-4">Sauvegarder</button>
          </div>

          <button className="w-full flex items-center justify-center space-x-2 py-4 text-red-500 text-sm font-bold">
            <LogOut size={18} />
            <span>Se déconnecter</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
