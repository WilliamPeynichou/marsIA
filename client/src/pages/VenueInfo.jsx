import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Info, Calendar, Clock, Train, Car, Accessibility, ChevronLeft, Phone, Mail, ExternalLink, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const VenueInfo = () => {
  const [activeTab, setActiveTab] = useState('infos');

  const scheduleData = [
    { day: 'Vendredi 13 Mars', events: ['10h - Ouverture des portes', '11h - Cérémonie d\'ouverture', '14h - Projections Sélection Officielle', '20h - Soirée networking'] },
    { day: 'Samedi 14 Mars', events: ['10h - Masterclass IA & Cinéma', '14h - Projections Prix Spéciaux', '18h - Table ronde Éthique & IA', '21h - Projection hors compétition'] },
    { day: 'Dimanche 15 Mars', events: ['10h - Dernières projections', '15h - Délibération du jury', '18h - Cérémonie de clôture', '20h - Cocktail de fin'] }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1563911891536-1f98a3017397?q=80&w=2000&auto=format&fit=crop" 
          alt="Marseille Joliette"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Back Button */}
        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
          <ChevronLeft size={20} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Retour</span>
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-accent-ia text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Marseille • La Joliette</span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-foreground mb-4 leading-[0.9]">
              Le Lieu<br />du Festival
            </h1>
            <p className="text-neutral-grey max-w-md text-lg font-serif italic">
              Au cœur du quartier Euroméditerranée, un espace dédié à l'innovation cinématographique.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Address Card - Floating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-earth-brown/5 -mt-24 relative z-10 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-ia/10 flex items-center justify-center shrink-0">
                <MapPin className="text-accent-ia" size={22} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold mb-1">Adresse</p>
                <p className="font-display font-bold text-foreground">155 rue Peyssonnel</p>
                <p className="text-sm text-neutral-grey">13002 Marseille, France</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-cta-gold/10 flex items-center justify-center shrink-0">
                <Calendar className="text-cta-gold" size={22} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold mb-1">Dates</p>
                <p className="font-display font-bold text-foreground">13 — 15 Mars 2026</p>
                <p className="text-sm text-neutral-grey">3 jours de festival</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-marseille-green/10 flex items-center justify-center shrink-0">
                <Clock className="text-marseille-green" size={22} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold mb-1">Horaires</p>
                <p className="font-display font-bold text-foreground">10h00 — 23h00</p>
                <p className="text-sm text-neutral-grey">Ouverture quotidienne</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-earth-brown/10 flex flex-wrap gap-4">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=155+rue+Peyssonnel+13002+Marseille" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-accent-ia text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent-ia/90 transition-all shadow-lg shadow-accent-ia/20"
            >
              <Navigation size={14} />
              <span>Itinéraire</span>
            </a>
            <a 
              href="#tickets"
              className="flex items-center space-x-2 bg-earth-brown/5 text-earth-brown px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-earth-brown/10 transition-all"
            >
              <Ticket size={14} />
              <span>Réserver</span>
            </a>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-12 overflow-x-auto pb-2">
          {[
            { id: 'infos', label: 'Informations' },
            { id: 'programme', label: 'Programme' },
            { id: 'acces', label: 'Accès' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-foreground text-background shadow-xl' 
                  : 'bg-earth-brown/5 text-earth-brown/60 hover:bg-earth-brown/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'infos' && (
            <motion.div
              key="infos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div className="bg-white/60 rounded-[2rem] p-8 border border-earth-brown/5">
                  <h3 className="text-2xl font-serif italic text-foreground mb-6">À propos du lieu</h3>
                  <p className="text-neutral-grey leading-relaxed mb-4">
                    Situé au cœur du quartier Euroméditerranée, notre espace accueille le festival Mars IA dans un cadre unique mêlant architecture industrielle réhabilitée et équipements de pointe.
                  </p>
                  <p className="text-neutral-grey leading-relaxed">
                    Avec ses 3 salles de projection équipées en 4K HDR et son système audio immersif Dolby Atmos, le lieu offre une expérience cinématographique optimale pour découvrir les œuvres générées par IA.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent-ia/5 rounded-2xl p-6 text-center">
                    <span className="text-4xl font-display font-bold text-accent-ia">3</span>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold mt-2">Salles</p>
                  </div>
                  <div className="bg-cta-gold/5 rounded-2xl p-6 text-center">
                    <span className="text-4xl font-display font-bold text-cta-gold">500</span>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold mt-2">Places</p>
                  </div>
                  <div className="bg-marseille-green/5 rounded-2xl p-6 text-center">
                    <span className="text-4xl font-display font-bold text-marseille-green">4K</span>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold mt-2">HDR</p>
                  </div>
                  <div className="bg-marseille-ocre/5 rounded-2xl p-6 text-center">
                    <span className="text-4xl font-display font-bold text-marseille-ocre">∞</span>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold mt-2">Inspiration</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-square rounded-[2rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop" 
                    alt="Salle de projection"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-foreground text-background rounded-[2rem] p-8">
                  <h4 className="text-lg font-serif italic mb-4">Contact</h4>
                  <div className="space-y-3">
                    <a href="mailto:contact@marsia-festival.com" className="flex items-center space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                      <Mail size={16} />
                      <span>contact@marsia-festival.com</span>
                    </a>
                    <a href="tel:+33491000000" className="flex items-center space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                      <Phone size={16} />
                      <span>+33 (0)4 91 00 00 00</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'programme' && (
            <motion.div
              key="programme"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {scheduleData.map((day, idx) => (
                <div key={idx} className="bg-white/60 rounded-[2rem] p-8 border border-earth-brown/5">
                  <h3 className="text-xl font-serif italic text-foreground mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-accent-ia text-white flex items-center justify-center text-sm font-display font-bold mr-4">
                      {idx + 1}
                    </span>
                    {day.day}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {day.events.map((event, i) => (
                      <div key={i} className="bg-earth-brown/5 rounded-xl p-4">
                        <p className="text-sm font-bold text-foreground">{event.split(' - ')[0]}</p>
                        <p className="text-xs text-neutral-grey mt-1">{event.split(' - ')[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-center pt-8">
                <p className="text-sm text-neutral-grey italic mb-4">Programme complet disponible prochainement</p>
                <button className="btn-primary">
                  Télécharger le PDF
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'acces' && (
            <motion.div
              key="acces"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div className="bg-white/60 rounded-[2rem] p-8 border border-earth-brown/5">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent-ia/10 flex items-center justify-center">
                      <Train className="text-accent-ia" size={22} />
                    </div>
                    <h3 className="text-xl font-serif italic text-foreground">Transports en commun</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">T2</span>
                      <div>
                        <p className="font-bold text-foreground text-sm">Tramway T2/T3</p>
                        <p className="text-xs text-neutral-grey">Arrêt Euroméditerranée Gantes — 3 min à pied</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xs font-bold shrink-0">M2</span>
                      <div>
                        <p className="font-bold text-foreground text-sm">Métro Ligne 2</p>
                        <p className="text-xs text-neutral-grey">Arrêt Désirée Clary — 5 min à pied</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-xs font-bold shrink-0">🚌</span>
                      <div>
                        <p className="font-bold text-foreground text-sm">Bus 35, 49, 70</p>
                        <p className="text-xs text-neutral-grey">Arrêt Joliette — 2 min à pied</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 rounded-[2rem] p-8 border border-earth-brown/5">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cta-gold/10 flex items-center justify-center">
                      <Car className="text-cta-gold" size={22} />
                    </div>
                    <h3 className="text-xl font-serif italic text-foreground">En voiture</h3>
                  </div>
                  <p className="text-neutral-grey text-sm leading-relaxed mb-4">
                    Parking Euroméditerranée à 200m du lieu. Tarif préférentiel festivalier : 8€/jour sur présentation de votre badge.
                  </p>
                  <p className="text-xs text-neutral-grey italic">
                    GPS : 43.3106° N, 5.3669° E
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video rounded-[2rem] overflow-hidden bg-earth-brown/5 flex items-center justify-center">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.7!2d5.3669!3d43.3106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE4JzM4LjIiTiA1wrAyMicwMC44IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-[2rem]"
                  />
                </div>

                <div className="bg-marseille-green/10 rounded-[2rem] p-8 border border-marseille-green/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Accessibility className="text-marseille-green" size={24} />
                    <h3 className="text-lg font-serif italic text-foreground">Accessibilité</h3>
                  </div>
                  <p className="text-sm text-neutral-grey leading-relaxed">
                    L'ensemble du lieu est accessible aux personnes à mobilité réduite. Boucle magnétique disponible dans les salles. 
                    Pour toute demande spécifique, contactez-nous en amont de votre venue.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VenueInfo;
