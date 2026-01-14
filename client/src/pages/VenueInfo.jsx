import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Info, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const VenueInfo = () => {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif italic text-foreground mb-4">Le Lieu du Festival</h1>
          <div className="w-16 h-[1px] bg-accent-ia/30 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-[2.5rem] border border-white/10"
          >
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-accent-ia/10 flex items-center justify-center shrink-0">
                <MapPin className="text-accent-ia" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-foreground mb-2">Adresse</h2>
                <p className="text-neutral-grey leading-relaxed">
                  155 rue Peyssonnel<br />
                  13002 Marseille, France
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=155+rue+Peyssonnel+13002+Marseille" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent-ia text-sm font-bold uppercase tracking-widest mt-4 hover:opacity-80 transition-opacity"
                >
                  <Navigation size={14} />
                  <span>Voir sur Google Maps</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Calendar className="text-cta-gold" size={20} />
                <h3 className="font-display font-bold text-foreground">Dates</h3>
              </div>
              <p className="text-sm text-neutral-grey">
                Du 13 au 15 Mars 2026<br />
                Ouverture des portes à 10h00
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-6 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Info className="text-marseille-green" size={20} />
                <h3 className="font-display font-bold text-foreground">Accès</h3>
              </div>
              <p className="text-sm text-neutral-grey">
                Tramway T2/T3 : Arrêt Euroméditerranée Gantes<br />
                Métro M2 : Arrêt Désirée Clary
              </p>
            </motion.div>
          </div>

          {/* Image/Map Simulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-video rounded-[2.5rem] overflow-hidden relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1563911891536-1f98a3017397?q=80&w=2000&auto=format&fit=crop" 
              alt="Marseille Architecture" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-1">Quartier</p>
              <p className="text-xl font-serif italic text-white">La Joliette / Euroméditerranée</p>
            </div>
          </motion.div>

          <div className="text-center pt-8">
            <Link to="/">
              <button className="btn-secondary">Retour à l'accueil</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
