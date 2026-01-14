import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Winners = () => {
  const navigate = useNavigate();
  const winners = [
    {
      prize: "Grand Prix marsIA",
      title: "Neon Future",
      director: "Alice Martin",
      poster: "https://picsum.photos/seed/1/400/600",
      color: "border-cta-gold"
    },
    {
      prize: "Prix de l'Innovation",
      title: "Digital Dreams",
      director: "John Smith",
      poster: "https://picsum.photos/seed/2/400/600",
      color: "border-accent-ia"
    },
    {
      prize: "Prix du Public",
      title: "Marseille 2050",
      director: "Marie Dupont",
      poster: "https://picsum.photos/seed/3/400/600",
      color: "border-marseille-green"
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-12 pb-24 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-serif italic text-foreground mb-4">Le Palmarès</h1>
        <p className="text-[10px] uppercase tracking-widest text-accent-ia font-bold">Édition 2026</p>
        <div className="w-16 h-[1px] bg-accent-ia/30 mx-auto mt-8" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {winners.map((winner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className={`aspect-[2/3] w-full rounded-[2.5rem] overflow-hidden relative group border-4 ${winner.color}`}>
              <img src={winner.poster} alt={winner.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={() => navigate('/jury')}>
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Play className="text-white" size={32} />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 text-cta-gold">
                <Trophy size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{winner.prize}</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">{winner.title}</h2>
              <p className="text-neutral-grey text-sm">Par {winner.director}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Winners;
