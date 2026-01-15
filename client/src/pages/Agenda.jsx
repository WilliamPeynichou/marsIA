import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket, Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Agenda = () => {
  const [events, setEvents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    location: '',
    date: '',
    time: '',
    description: '',
    category: 'Projection'
  });

  // Simulation de chargement des données et vérification du rôle
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setIsAdmin(user.role === 'admin' || user.role === 'superadmin');

    // Mock data initial si le localStorage est vide
    const storedEvents = JSON.parse(localStorage.getItem('marsIA_events') || 'null');
    if (storedEvents) {
      setEvents(storedEvents);
    } else {
      const initialEvents = [
        {
          id: 1,
          title: "Cérémonie d'ouverture",
          location: "Grande Salle - Joliette",
          date: "2026-03-13",
          time: "19:00",
          category: "Cérémonie",
          description: "Lancement officiel du festival avec présentation du jury."
        },
        {
          id: 2,
          title: "Masterclass : L'IA générative",
          location: "Auditorium A",
          date: "2026-03-14",
          time: "10:30",
          category: "Conférence",
          description: "Rencontre avec les créateurs de Runway et Midjourney."
        }
      ];
      setEvents(initialEvents);
      localStorage.setItem('marsIA_events', JSON.stringify(initialEvents));
    }
  }, []);

  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventToAdd = {
      ...newEvent,
      id: Date.now()
    };
    const updatedEvents = [...events, eventToAdd];
    setEvents(updatedEvents);
    localStorage.setItem('marsIA_events', JSON.stringify(updatedEvents));
    setShowModal(false);
    setNewEvent({ title: '', location: '', date: '', time: '', description: '', category: 'Projection' });
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      const updatedEvents = events.filter(ev => ev.id !== id);
      setEvents(updatedEvents);
      localStorage.setItem('marsIA_events', JSON.stringify(updatedEvents));
    }
  };

  const handleReserve = (eventName) => {
    alert(`Votre place pour "${eventName}" a été réservée avec succès !`);
  };

  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {});

  // Sort dates
  const sortedDates = Object.keys(groupedEvents).sort();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Header */}
      <div className="relative py-16 md:py-24 px-6 md:px-12 bg-black text-white overflow-hidden mb-8 md:mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent-ia text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block"
          >
            Planning 2026
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif italic mb-6"
          >
            Agenda du Festival
          </motion.h1>
          {isAdmin && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setShowModal(true)}
              className="mt-6 md:mt-8 flex items-center space-x-3 bg-accent-ia text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent-ia/90 transition-all mx-auto shadow-lg shadow-accent-ia/20 text-xs md:text-sm"
            >
              <Plus size={18} />
              <span>Ajouter un événement</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Bouton Flottant Mobile pour Admin */}
      {isAdmin && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowModal(true)}
          className="md:hidden fixed bottom-24 right-6 z-[110] w-16 h-16 bg-accent-ia text-white rounded-full flex items-center justify-center shadow-2xl shadow-accent-ia/40 border-2 border-white/20"
        >
          <Plus size={32} />
        </motion.button>
      )}

      {/* Events List */}
      <div className="max-w-5xl mx-auto px-6">
        {sortedDates.length === 0 ? (
          <div className="text-center py-24 text-neutral-grey">
            <Calendar size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-xl font-serif italic">Aucun événement programmé pour le moment.</p>
          </div>
        ) : (
          sortedDates.map((date, dateIndex) => (
            <div key={date} className="mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mb-8 sticky top-24 bg-background/95 backdrop-blur-sm py-4 z-20"
              >
                <div className="w-3 h-3 rounded-full bg-accent-ia" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  {new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                </h2>
              </motion.div>

              <div className="space-y-4">
                {groupedEvents[date]
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-3xl p-6 border border-earth-brown/10 hover:shadow-xl hover:border-accent-ia/20 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Time & Location */}
                      <div className="md:w-48 shrink-0 space-y-2">
                        <div className="flex items-center space-x-2 text-accent-ia">
                          <Clock size={18} />
                          <span className="text-xl font-bold font-display">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-neutral-grey text-sm">
                          <MapPin size={14} />
                          <span className="uppercase tracking-wide font-bold text-[10px]">{event.location}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full bg-earth-brown/5 text-earth-brown text-[10px] font-bold uppercase tracking-wider mb-3">
                          {event.category}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent-ia transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-neutral-grey leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-end md:flex-col gap-3">
                        <button 
                          onClick={() => handleReserve(event.title)}
                          className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-accent-ia transition-colors shadow-lg"
                        >
                          <Ticket size={14} />
                          <span>Réserver</span>
                        </button>
                        
                        {isAdmin && (
                          <button 
                            onClick={() => handleDeleteEvent(event.id)}
                            className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Admin Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-6 md:p-10 w-full max-w-xl shadow-2xl overflow-y-auto max-h-[90vh] scrollbar-hide"
            >
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-serif italic text-foreground leading-tight">Nouvel Événement</h2>
                  <p className="text-xs text-neutral-grey mt-1">Planifiez une nouvelle session pour le festival</p>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-3 hover:bg-neutral-100 rounded-2xl transition-all group"
                >
                  <X size={24} className="text-neutral-grey group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              <form onSubmit={handleAddEvent} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="input-label flex items-center gap-2 mb-2">
                    <Calendar size={12} className="text-accent-ia" />
                    Titre de l'événement
                  </label>
                  <input 
                    type="text" 
                    required
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Projection Grand Public : Dune Part II"
                  />
                </div>

                <div>
                  <label className="input-label flex items-center gap-2 mb-2">
                    <Calendar size={12} className="text-accent-ia" />
                    Date
                  </label>
                  <input 
                    type="date" 
                    required
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="input-label flex items-center gap-2 mb-2">
                    <Clock size={12} className="text-accent-ia" />
                    Heure
                  </label>
                  <input 
                    type="time" 
                    required
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    className="input-field"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="input-label flex items-center gap-2 mb-2">
                    <MapPin size={12} className="text-accent-ia" />
                    Lieu (Salle/Zone)
                  </label>
                  <input 
                    type="text" 
                    required
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Grande Salle - Palais des Festivals"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="input-label flex items-center gap-2 mb-2">
                    <Ticket size={12} className="text-accent-ia" />
                    Catégorie
                  </label>
                  <div className="relative">
                    <select 
                      value={newEvent.category}
                      onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                      className="input-field appearance-none"
                    >
                      <option value="Projection">🎥 Projection</option>
                      <option value="Conférence">🎤 Conférence</option>
                      <option value="Cérémonie">✨ Cérémonie</option>
                      <option value="Atelier">🛠️ Atelier</option>
                      <option value="Networking">🤝 Networking</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                      <Plus size={16} className="rotate-45" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="input-label flex items-center gap-2 mb-2">
                    Description
                  </label>
                  <textarea 
                    rows={4}
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    className="input-field resize-none py-4"
                    placeholder="Décrivez brièvement le déroulement, les intervenants ou les prérequis..."
                  />
                  <p className="input-helper mt-2">Maximum 500 caractères recommandés.</p>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-accent-ia text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-accent-ia/90 transition-all shadow-xl shadow-accent-ia/20 flex items-center justify-center gap-3 group"
                  >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                    <span>Ajouter au programme</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Agenda;
