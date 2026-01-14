import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Database, Settings, Activity, Film, UserPlus } from 'lucide-react';

const SuperAdmin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: "Total Utilisateurs", value: "1,240", icon: Users, color: "text-blue-500" },
    { label: "Films Hébergés", value: "850", icon: Database, color: "text-purple-500" },
    { label: "Activité Serveur", value: "98%", icon: Activity, color: "text-green-500" },
    { label: "Logs Sécurité", value: "Clean", icon: Shield, color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-background pt-12 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-red-500/10 rounded-2xl">
              <Shield className="text-red-500" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-display font-bold text-foreground">Super Admin</h1>
              <p className="text-neutral-grey">Contrôle global du système marsIA</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <stat.icon className={stat.color} size={24} />
                <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white/10 ${stat.color}`}>
                  +2.5%
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 space-y-2">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: Activity },
              { id: 'users', label: 'Gestion Utilisateurs', icon: Users },
              { id: 'content', label: 'Modération Contenu', icon: Film },
              { id: 'jury', label: 'Gestion Jury', icon: UserPlus },
              { id: 'settings', label: 'Configuration', icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id 
                    ? 'bg-accent-ia text-white shadow-lg shadow-accent-ia/20' 
                    : 'text-neutral-grey hover:bg-white/5 hover:text-foreground'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm font-bold">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Panel Content */}
          <div className="flex-1 glass rounded-3xl p-8 border border-white/10 min-h-[500px]">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">Activité Récente</h2>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((log) => (
                      <div key={log} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <p className="text-sm text-foreground">Nouvelle soumission : "Echoes of Tomorrow"</p>
                        </div>
                        <span className="text-xs text-neutral-grey">Il y a 2 min</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-foreground">Utilisateurs</h2>
                  <button className="btn-primary py-2 px-4 text-xs">Ajouter un admin</button>
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-4 text-[10px] uppercase tracking-widest text-neutral-grey">Nom</th>
                      <th className="pb-4 text-[10px] uppercase tracking-widest text-neutral-grey">Rôle</th>
                      <th className="pb-4 text-[10px] uppercase tracking-widest text-neutral-grey">Statut</th>
                      <th className="pb-4 text-[10px] uppercase tracking-widest text-neutral-grey text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { name: "Admin Test", role: "Admin", status: "Actif" },
                      { name: "Jury Test", role: "Jury", status: "Actif" },
                      { name: "User Lambda", role: "User", status: "Inactif" },
                    ].map((u, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="py-4 font-bold text-foreground">{u.name}</td>
                        <td className="py-4 text-neutral-grey">{u.role}</td>
                        <td className="py-4"><span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs font-bold">{u.status}</span></td>
                        <td className="py-4 text-right">
                          <button className="text-neutral-grey hover:text-accent-ia transition-colors">Éditer</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'jury' && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Configuration du Jury</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h3 className="font-bold mb-4">Inviter un juré</h3>
                    <input type="email" placeholder="Email du juré" className="input-field mb-4" />
                    <button className="btn-primary w-full">Envoyer l'invitation</button>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h3 className="font-bold mb-4">Paramètres de vote</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="accent-accent-ia" checked readOnly />
                        <span className="text-sm">Vote anonyme</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="accent-accent-ia" checked readOnly />
                        <span className="text-sm">Commentaires obligatoires</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
