import React, { useState } from 'react';
import { Film, Users, BarChart3, Settings, Eye, EyeOff, Trash2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('films');
  
  const [films, setFilms] = useState([
    { id: 1, title: "Neon Dreams", director: "Alice Martin", status: "pending", country: "France", views: 342 },
    { id: 2, title: "Binary Sunset", director: "John Doe", status: "approved", country: "USA", views: 1205 },
    { id: 3, title: "Digital Horizons", director: "Marie Dupont", status: "rejected", country: "Canada", views: 89 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Sophie Bernard", role: "jury", email: "sophie@example.com", active: true },
    { id: 2, name: "Thomas Petit", role: "realisateur", email: "thomas@example.com", active: true },
    { id: 3, name: "Emma Wilson", role: "jury", email: "emma@example.com", active: false },
  ]);

  const stats = [
    { label: "Films soumis", value: "342", icon: Film, color: "text-accent-ia" },
    { label: "Utilisateurs", value: "128", icon: Users, color: "text-cta-gold" },
    { label: "Pays représentés", value: "45", icon: BarChart3, color: "text-marseille-green" },
    { label: "En attente", value: "23", icon: Settings, color: "text-marseille-ocre" },
  ];

  const handleFilmAction = (filmId, action) => {
    setFilms(films.map(film => 
      film.id === filmId ? { ...film, status: action } : film
    ));
  };

  const handleUserToggle = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, active: !user.active } : user
    ));
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending: 'bg-cta-gold/20 text-cta-gold',
      approved: 'bg-marseille-green/20 text-marseille-green',
      rejected: 'bg-red-500/20 text-red-400'
    };
    const labels = {
      pending: 'En attente',
      approved: 'Approuvé',
      rejected: 'Rejeté'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background pt-6 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            Admin Panel
          </h1>
          <p className="text-neutral-grey">Gestion des films, utilisateurs et statistiques</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <stat.icon className={`${stat.color} mb-3`} size={28} />
              <p className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-neutral-grey uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {['films', 'users', 'stats'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                activeTab === tab
                  ? 'bg-accent-ia text-white'
                  : 'bg-white/5 text-neutral-grey hover:bg-white/10'
              }`}
            >
              {tab === 'films' ? 'Films' : tab === 'users' ? 'Utilisateurs' : 'Statistiques'}
            </button>
          ))}
        </div>

        {activeTab === 'films' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {films.map((film) => (
              <div key={film.id} className="glass p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">{film.title}</h3>
                    <p className="text-neutral-grey text-sm mb-2">
                      Par {film.director} · {film.country} · {film.views} vues
                    </p>
                    {getStatusBadge(film.status)}
                  </div>
                  <div className="flex space-x-2">
                    {film.status === 'pending' && (
                      <>
                        <button onClick={() => handleFilmAction(film.id, 'approved')} className="p-3 bg-marseille-green/20 text-marseille-green rounded-xl hover:bg-marseille-green/30 transition-all"><CheckCircle size={20} /></button>
                        <button onClick={() => handleFilmAction(film.id, 'rejected')} className="p-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-all"><Trash2 size={20} /></button>
                      </>
                    )}
                    {film.status === 'approved' && <button onClick={() => handleFilmAction(film.id, 'rejected')} className="p-3 bg-white/5 text-neutral-grey rounded-xl hover:bg-white/10 transition-all"><EyeOff size={20} /></button>}
                    {film.status === 'rejected' && <button onClick={() => handleFilmAction(film.id, 'approved')} className="p-3 bg-white/5 text-neutral-grey rounded-xl hover:bg-white/10 transition-all"><Eye size={20} /></button>}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'users' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="glass p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">{user.name}</h3>
                    <p className="text-neutral-grey text-sm mb-2">{user.email}</p>
                    <span className="px-3 py-1 bg-accent-ia/20 text-accent-ia rounded-full text-xs font-bold uppercase">{user.role}</span>
                  </div>
                  <button onClick={() => handleUserToggle(user.id)} className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${user.active ? 'bg-marseille-green/20 text-marseille-green hover:bg-marseille-green/30' : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'}`}>{user.active ? 'Actif' : 'Inactif'}</button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'stats' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Statistiques détaillées</h2>
            <div className="space-y-6">
              <div>
                <p className="text-neutral-grey mb-2">Films par pays (Top 5)</p>
                <div className="space-y-2">
                  {[
                    { country: 'France', count: 89 },
                    { country: 'USA', count: 67 },
                    { country: 'Canada', count: 45 },
                    { country: 'UK', count: 32 },
                    { country: 'Allemagne', count: 28 }
                  ].map((item) => (
                    <div key={item.country} className="flex justify-between items-center">
                      <span className="text-foreground">{item.country}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-white/10 rounded-full h-2 overflow-hidden"><div className="bg-accent-ia h-full rounded-full" style={{ width: `${(item.count / 89) * 100}%` }} /></div>
                        <span className="text-cta-gold font-bold w-8 text-right">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Admin;
