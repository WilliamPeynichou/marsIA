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
      <div className="relative py-24 px-6 md:px-12 bg-black text-white overflow-hidden mb-12">
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
            className="text-5xl md:text-7xl font-serif italic mb-6"
          >
            Agenda du Festival
          </motion.h1>
          {isAdmin && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setShowModal(true)}
              className="mt-8 flex items-center space-x-3 bg-accent-ia text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent-ia/90 transition-all mx-auto shadow-lg shadow-accent-ia/20"
            >
              <Plus size={18} />
              <span>Ajouter un événement</span>
            </motion.button>
          )}
        </div>
      </div>

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
              className="relative bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif italic text-foreground">Nouvel Événement</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-neutral-grey" />
                </button>
              </div>

              <form onSubmit={handleAddEvent} className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-grey block mb-2">Titre de l'événement</label>
                  <input 
                    type="text" 
                    required
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Projection Dune"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-grey block mb-2">Date</label>
                    <input 
                      type="date" 
                      required
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-grey block mb-2">Heure</label>
                    <input 
                      type="time" 
                      required
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-grey block mb-2">Lieu (Salle/Zone)</label>
                  <input 
                    type="text" 
                    required
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Grande Salle"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-grey block mb-2">Catégorie</label>
                  <select 
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                    className="input-field"
                  >
                    <option value="Projection">Projection</option>
                    <option value="Conférence">Conférence</option>
                    <option value="Cérémonie">Cérémonie</option>
                    <option value="Atelier">Atelier</option>
                    <option value="Networking">Networking</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-grey block mb-2">Description</label>
                  <textarea 
                    rows={3}
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    className="input-field resize-none"
                    placeholder="Brève description de l'événement..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent-ia text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-accent-ia/90 transition-all shadow-lg shadow-accent-ia/20 mt-4"
                >
                  Ajouter au programme
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Agenda;
