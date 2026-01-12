import React, { useState } from 'react';
import { Shield, UserPlus, UserMinus, Clock, Play, Pause, RotateCcw, Settings, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const SuperAdmin = () => {
  const [timerStatus, setTimerStatus] = useState('running');
  const [timeRemaining, setTimeRemaining] = useState('45j 12h 34m');

  const [admins, setAdmins] = useState([
    { id: 1, name: "Jean Dupont", email: "jean@marsia.fr", addedDate: "2026-01-05", active: true },
    { id: 2, name: "Marie Laurent", email: "marie@marsia.fr", addedDate: "2026-01-03", active: true },
    { id: 3, name: "Pierre Martin", email: "pierre@marsia.fr", addedDate: "2025-12-20", active: false },
  ]);

  const [newAdminEmail, setNewAdminEmail] = useState('');

  const handleTimerControl = (action) => setTimerStatus(action);

  const handleAddAdmin = () => {
    if (newAdminEmail) {
      setAdmins([...admins, { id: admins.length + 1, name: "Nouvel Admin", email: newAdminEmail, addedDate: new Date().toISOString().split('T')[0], active: true }]);
      setNewAdminEmail('');
    }
  };

  const handleToggleAdmin = (adminId) => {
    setAdmins(admins.map(admin => admin.id === adminId ? { ...admin, active: !admin.active } : admin));
  };

  const handleRemoveAdmin = (adminId) => {
    if (window.confirm('Retirer cet administrateur ?')) {
      setAdmins(admins.filter(admin => admin.id !== adminId));
    }
  };

  return (
    <div className="min-h-screen bg-background pt-6 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="text-cta-gold" size={40} />
            <h1 className="font-display text-4xl md:text-5xl text-foreground">Super Admin</h1>
          </div>
          <p className="text-neutral-grey">Contrôle total de la plateforme marsIA</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Uptime", value: "99.8%", icon: Database, color: "text-marseille-green" },
            { label: "API Calls", value: "2.3M", icon: Settings, color: "text-accent-ia" },
            { label: "Admins Actifs", value: admins.filter(a => a.active).length.toString(), icon: Shield, color: "text-cta-gold" },
          ].map((stat, idx) => (
            <div key={stat.label} className="glass p-6 rounded-2xl">
              <stat.icon className={`${stat.color} mb-3`} size={28} />
              <p className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-neutral-grey uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-2xl mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="text-accent-ia" size={32} />
            <h2 className="text-2xl font-display font-bold text-foreground">Contrôle du Timer</h2>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-neutral-grey text-sm mb-1">Temps restant</p>
              <p className="text-4xl font-display font-bold text-cta-gold">{timeRemaining}</p>
            </div>
            <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase ${timerStatus === 'running' ? 'bg-marseille-green/20 text-marseille-green' : timerStatus === 'paused' ? 'bg-cta-gold/20 text-cta-gold' : 'bg-red-500/20 text-red-400'}`}>
              {timerStatus === 'running' ? 'En cours' : timerStatus === 'paused' ? 'En pause' : 'Arrêté'}
            </span>
          </div>
          <div className="flex gap-3">
            <button onClick={() => handleTimerControl('running')} disabled={timerStatus === 'running'} className="flex items-center space-x-2 px-6 py-3 bg-marseille-green/20 text-marseille-green rounded-xl font-bold hover:bg-marseille-green/30 disabled:opacity-50"><Play size={20} /><span>Démarrer</span></button>
            <button onClick={() => handleTimerControl('paused')} disabled={timerStatus === 'paused' || timerStatus === 'stopped'} className="flex items-center space-x-2 px-6 py-3 bg-cta-gold/20 text-cta-gold rounded-xl font-bold hover:bg-cta-gold/30 disabled:opacity-50"><Pause size={20} /><span>Pause</span></button>
            <button onClick={() => handleTimerControl('stopped')} disabled={timerStatus === 'stopped'} className="flex items-center space-x-2 px-6 py-3 bg-red-500/20 text-red-400 rounded-xl font-bold hover:bg-red-500/30 disabled:opacity-50"><RotateCcw size={20} /><span>Arrêter</span></button>
          </div>
        </div>

        <div className="glass p-8 rounded-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <UserPlus className="text-cta-gold" size={32} />
            <h2 className="text-2xl font-display font-bold text-foreground">Gestion des Admins</h2>
          </div>
          <div className="flex gap-3 mb-8">
            <input type="email" value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} placeholder="email@exemple.com" className="flex-1 input-field" />
            <button onClick={handleAddAdmin} className="btn-primary">Ajouter</button>
          </div>
          <div className="space-y-3">
            {admins.map((admin) => (
              <div key={admin.id} className="flex items-center justify-between p-5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-foreground">{admin.name}</h3>
                  <p className="text-sm text-neutral-grey">{admin.email} · {admin.addedDate}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => handleToggleAdmin(admin.id)} className={`px-4 py-2 rounded-lg text-xs font-bold ${admin.active ? 'bg-marseille-green/20 text-marseille-green' : 'bg-neutral-grey/20 text-neutral-grey'}`}>{admin.active ? 'Actif' : 'Inactif'}</button>
                  <button onClick={() => handleRemoveAdmin(admin.id)} className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"><UserMinus size={20} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
