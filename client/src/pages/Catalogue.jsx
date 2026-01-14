import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Play, ArrowRight, Calendar, MapPin, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Données enrichies pour correspondre au style Siena
const mockFilms = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    "Neon Future", "Digital Nature", "Savoy", "Moon 12", 
    "Binary Sunset", "AI Dreams", "Kafka Trial", "Project X"
  ][i % 8],
  director: `Réalisateur ${i + 1}`,
  year: "2026",
  location: ['Marseille', 'Tel Aviv', 'Tokyo', 'Berlin', 'New York'][Math.floor(Math.random() * 5)],
  category: ['Fiction', 'Documentary', 'Experimental', 'Animation'][Math.floor(Math.random() * 4)],
  poster: `https://picsum.photos/seed/${i + 10}/800/1200`,
  description: "A film based on a poetic vision of the future, exploring the boundaries between human emotion and synthetic intelligence."
}));

const Catalogue = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header Minimaliste Style Siena */}
      <header className="px-6 py-16 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/5 mb-24">
        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-ia mb-4 block">Selected Works</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none">FILMS<span className="text-accent-ia">.</span></h1>
        </div>
        <div className="flex flex-col items-start md:items-end mt-8 md:mt-0">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-grey font-bold mb-6">{mockFilms.length} ARCHIVES DISPONIBLES</p>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="group flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-background transition-all duration-500 shadow-xl"
          >
            <Filter size={12} className="group-hover:rotate-180 transition-transform duration-500" />
            <span>Filtres</span>
          </button>
        </div>
      </header>

      {/* Liste Verticale Immersive */}
      <div className="space-y-32 md:space-y-64 px-6 md:px-12">
        {mockFilms.map((film, index) => (
          <motion.div
            key={film.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
          >
            {/* Info Section (Left) */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="w-8 h-[1px] bg-accent-ia" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-ia">
                    {film.category}
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-serif italic text-foreground leading-[0.9] tracking-tight">
                  {film.title}
                </h2>
                
                <p className="text-neutral-grey text-base md:text-lg leading-relaxed max-w-md font-serif italic opacity-80">
                  Directed by <span className="text-foreground font-bold not-italic">{film.director}</span>. {film.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 py-10 border-y border-white/5">
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-grey font-bold flex items-center">
                    <Calendar size={12} className="mr-2 opacity-50" /> Année
                  </p>
                  <p className="text-lg font-display font-bold tracking-tight">{film.year}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-grey font-bold flex items-center">
                    <MapPin size={12} className="mr-2 opacity-50" /> Lieu
                  </p>
                  <p className="text-lg font-display font-bold tracking-tight">{film.location}</p>
                </div>
              </div>

              <button 
                onClick={() => navigate('/jury')}
                className="flex items-center space-x-6 group/btn"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:border-foreground transition-all duration-700 shadow-2xl relative overflow-hidden">
                  <Play size={20} className="text-foreground group-hover/btn:text-background relative z-10" />
                  <motion.div 
                    initial={false}
                    whileHover={{ scale: 1.5 }}
                    className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold group-hover/btn:translate-x-3 transition-all duration-700">
                    EXPLORE
                  </span>
                  <span className="text-[8px] text-neutral-grey uppercase tracking-widest mt-1 opacity-0 group-hover/btn:opacity-100 transition-all duration-700">Visionner le film</span>
                </div>
              </button>
            </div>

            {/* Poster Section (Right) */}
            <div 
              className="lg:col-span-7 order-1 lg:order-2 relative aspect-[16/10] lg:aspect-[16/11] overflow-hidden rounded-[3rem] cursor-pointer shadow-2xl group/poster" 
              onClick={() => navigate('/jury')}
            >
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                src={film.poster} 
                alt={film.title}
                className="w-full h-full object-cover grayscale-[40%] group-hover/poster:grayscale-0 transition-all duration-1000"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent opacity-60 group-hover/poster:opacity-20 transition-all duration-1000" />
              
              {/* Badge "Admit One" style Siena */}
              <motion.div 
                animate={{ rotate: [12, 8, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-24 h-24 rounded-full border border-white/20 backdrop-blur-xl flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-tighter text-center leading-none shadow-2xl z-20"
              >
                <div className="flex flex-col items-center">
                  <span className="opacity-40 mb-1 tracking-[0.2em]">Ticket</span>
                  <span>Admit</span>
                  <span>One</span>
                  <span className="mt-1 font-display opacity-60 text-[8px]">№ {film.id.toString().padStart(3, '0')}</span>
                </div>
              </motion.div>

              {/* Hover state content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/poster:opacity-100 transition-all duration-700 bg-foreground/5 backdrop-blur-[2px]">
                <div className="w-24 h-24 rounded-full border border-white/40 flex items-center justify-center">
                  <Play size={32} className="text-white fill-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer / End Scroll Style */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-64 text-center px-6"
      >
        <div className="w-[1px] h-32 bg-gradient-to-b from-accent-ia via-accent-ia/20 to-transparent mx-auto mb-12" />
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent-ia">FIN DE LA SÉLECTION</p>
          <h3 className="text-3xl font-serif italic text-foreground opacity-40">Plus de chefs-d'œuvre à venir.</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Catalogue;
