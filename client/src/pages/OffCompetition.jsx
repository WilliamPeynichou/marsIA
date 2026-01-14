import React from 'react';
import { motion } from 'framer-motion';

const OffCompetition = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background text-center">
      <div className="max-w-md space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto"
        >
          <span className="text-4xl font-serif italic text-accent-ia">!</span>
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-serif italic text-foreground">Hors Compétition</h1>
          <p className="text-neutral-grey text-sm leading-relaxed">
            Cette section regroupe les œuvres sélectionnées pour leur intérêt artistique exceptionnel, 
            mais ne concourant pas pour les prix officiels.
          </p>
        </div>
        
        <div className="w-16 h-[1px] bg-accent-ia/30 mx-auto" />
        
        <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold">
          Programmation disponible prochainement
        </p>
      </div>
    </div>
  );
};

export default OffCompetition;
