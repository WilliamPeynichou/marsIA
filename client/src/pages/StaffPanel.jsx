import React, { useState } from 'react';
import { AlertCircle, MessageSquare, Flag, CheckCircle, XCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const StaffPanel = () => {
  const [activeTab, setActiveTab] = useState('reports');

  const [reports, setReports] = useState([
    { id: 1, type: 'content', filmTitle: 'Neon Dreams', reporter: 'User #3452', reason: 'Contenu inapproprié', date: '2026-01-08 14:32', status: 'pending', description: 'Le film contient des images potentiellement offensantes.' },
    { id: 2, type: 'copyright', filmTitle: 'Binary Sunset', reporter: 'User #1289', reason: 'Violation de droits d\'auteur', date: '2026-01-08 10:15', status: 'pending', description: 'Musique utilisée sans autorisation.' },
  ]);

  const [supportTickets, setSupportTickets] = useState([
    { id: 1, user: 'Sophie Martin', email: 'sophie@example.com', subject: 'Problème de soumission', message: 'Je ne parviens pas à soumettre mon film...', date: '2026-01-08 16:20', status: 'open', priority: 'high' },
  ]);

  return (
    <div className="min-h-screen bg-background pt-6 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">Staff Panel</h1>
          <p className="text-neutral-grey">Modération et support utilisateur</p>
        </motion.div>

        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {['reports', 'support'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-accent-ia text-white' : 'bg-white/5 text-neutral-grey hover:bg-white/10'}`}>
              {tab === 'reports' ? 'Signalements' : 'Support'}
            </button>
          ))}
        </div>

        {activeTab === 'reports' && (
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="glass p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">{report.filmTitle}</h3>
                    <p className="text-sm text-neutral-grey">{report.reporter} · {report.reason} · {report.date}</p>
                    <p className="text-sm text-foreground mt-2">{report.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-marseille-green/20 text-marseille-green rounded-lg text-sm font-bold"><CheckCircle size={16} /><span>Résoudre</span></button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-bold"><XCircle size={16} /><span>Rejeter</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'support' && (
          <div className="space-y-4">
            {supportTickets.map((ticket) => (
              <div key={ticket.id} className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-display font-bold text-foreground">{ticket.subject}</h3>
                <p className="text-sm text-neutral-grey mb-3">{ticket.user} · {ticket.email} · {ticket.date}</p>
                <p className="text-sm text-foreground bg-white/5 p-4 rounded-lg">{ticket.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffPanel;
