import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Film, Clock, Check, X, LogOut, Settings, Globe, Plus, Star, Bookmark, MessageSquare, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { i18n } = useTranslation();
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Invité", "role": "user"}');
  const isJury = user.role === 'jury' || user.role === 'admin';
  const [activeTab, setActiveTab] = useState('submissions');
  const [savedRatings, setSavedRatings] = useState([]);
  const [savedBookmarks, setSavedBookmarks] = useState([]);

  useEffect(() => {
    if (isJury) {
      const ratings = JSON.parse(localStorage.getItem('marsIA_ratings') || '[]');
      const bookmarks = JSON.parse(localStorage.getItem('marsIA_bookmarks') || '[]');
      setSavedRatings(ratings);
      setSavedBookmarks(bookmarks);
    }
  }, [isJury]);

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
          <Link to="/submit">
            <button className="flex items-center space-x-2 bg-accent-ia text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase hover:bg-accent-ia/90 transition-all">
              <Plus size={14} />
              <span>Nouveau film</span>
            </button>
          </Link>
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
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {[
          { id: 'submissions', label: 'Mes films', show: true },
          { id: 'ratings', label: 'Mes notes', show: isJury },
          { id: 'bookmarks', label: 'Mes signets', show: isJury },
          { id: 'settings', label: 'Paramètres', show: true }
        ].filter(tab => tab.show).map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all ${
              activeTab === tab.id ? 'bg-accent-ia text-white shadow-lg shadow-accent-ia/20' : 'bg-earth-brown/5 text-earth-brown/50 hover:bg-earth-brown/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'submissions' && (
          <motion.div 
            key="submissions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3"
          >
            {submissions.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 rounded-2xl p-4 flex items-center space-x-4 border border-white/20 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-earth-brown/5 flex items-center justify-center shrink-0">
                  <Film size={20} className="text-earth-brown/40" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-earth-brown truncate">{film.title}</h3>
                  <p className="text-[10px] text-earth-brown/40">{film.date}</p>
                </div>
                {getStatusBadge(film.status)}
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'ratings' && (
          <motion.div 
            key="ratings"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            {savedRatings.length === 0 ? (
              <div className="text-center py-12 bg-white/40 rounded-3xl border border-dashed border-earth-brown/10">
                <Star size={32} className="mx-auto text-earth-brown/20 mb-3" />
                <p className="text-sm text-earth-brown/40 font-serif italic">Vous n'avez pas encore noté de film.</p>
              </div>
            ) : (
              savedRatings.map((rating, index) => (
                <div key={rating.id} className="bg-white/60 rounded-3xl p-6 border border-white/20 shadow-sm space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent-ia/10 flex items-center justify-center shrink-0">
                        <Play size={20} className="text-accent-ia" />
                      </div>
                      <div>
                        <h3 className="font-bold text-earth-brown">{rating.title}</h3>
                        <p className="text-[10px] text-earth-brown/40 uppercase tracking-widest">{rating.director} • {rating.country}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-earth-brown/30 font-bold">{rating.date}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/40 rounded-xl p-3">
                      <p className="text-[8px] uppercase tracking-widest text-earth-brown/40 font-bold mb-1">Artistique</p>
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-cta-gold fill-cta-gold" />
                        <span className="text-sm font-display font-bold text-earth-brown">{rating.ratings?.artistic}/10</span>
                      </div>
                    </div>
                    <div className="bg-white/40 rounded-xl p-3">
                      <p className="text-[8px] uppercase tracking-widest text-earth-brown/40 font-bold mb-1">Narratif</p>
                      <div className="flex items-center space-x-1">
                        <MessageSquare size={12} className="text-accent-ia" />
                        <span className="text-sm font-display font-bold text-earth-brown">{rating.ratings?.narrative}/10</span>
                      </div>
                    </div>
                  </div>

                  {rating.comment && (
                    <div className="bg-white/40 rounded-xl p-4 italic text-sm text-earth-brown/70 border-l-2 border-accent-ia/20">
                      "{rating.comment}"
                    </div>
                  )}
                </div>
              ))
            )}
          </motion.div>
        )}

        {activeTab === 'bookmarks' && (
          <motion.div 
            key="bookmarks"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {savedBookmarks.length === 0 ? (
              <div className="col-span-full text-center py-12 bg-white/40 rounded-3xl border border-dashed border-earth-brown/10">
                <Bookmark size={32} className="mx-auto text-earth-brown/20 mb-3" />
                <p className="text-sm text-earth-brown/40 font-serif italic">Aucun film en signet pour le moment.</p>
              </div>
            ) : (
              savedBookmarks.map((film, index) => (
                <div key={film.id} className="bg-white/60 rounded-3xl overflow-hidden border border-white/20 shadow-sm flex flex-col group">
                  <div className="aspect-video relative overflow-hidden">
                    <video src={film.url} className="w-full h-full object-cover" muted />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Link to="/jury" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                        <Play size={20} className="text-white fill-white" />
                      </div>
                    </Link>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-earth-brown truncate">{film.title}</h3>
                    <p className="text-[10px] text-earth-brown/40 uppercase tracking-widest mt-1">{film.director}</p>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <motion.div 
            key="settings"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="bg-white/60 rounded-3xl p-6 border border-white/20 shadow-sm">
              <h3 className="text-sm font-bold text-earth-brown mb-6 uppercase tracking-widest flex items-center">
                <Settings size={16} className="mr-2" /> Informations personnelles
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold ml-1">Nom complet</label>
                  <input type="text" defaultValue={user.name} className="input-field" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold ml-1">Email professionnel</label>
                  <input type="email" defaultValue={user.email} className="input-field" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold ml-1">Pays de résidence</label>
                  <input type="text" defaultValue={user.country} className="input-field" />
                </div>
              </div>
              <button className="btn-primary w-full mt-8 shadow-lg shadow-accent-ia/20">Sauvegarder les modifications</button>
            </div>

            <button className="w-full flex items-center justify-center space-x-2 py-6 text-red-500 text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-50/50 rounded-2xl transition-colors">
              <LogOut size={16} />
              <span>Se déconnecter</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
