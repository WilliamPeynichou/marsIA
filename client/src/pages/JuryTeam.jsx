import React from 'react';
import { motion } from 'framer-motion';

const JuryTeam = () => {
  const jurors = [
    {
      name: "Jean-Luc Godard IA",
      role: "Président du Jury",
      bio: "Cinéaste visionnaire explorant les frontières entre réel et virtuel depuis plus de 40 ans.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Connors",
      role: "Spécialiste Effets Visuels",
      bio: "Experte en génération procédurale et en intégration de modèles de diffusion dans le pipeline cinéma.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop"
    },
    {
      name: "Marcus Aurelius",
      role: "Philosophe du Digital",
      bio: "Écrivain et chercheur focalisé sur l'éthique de l'IA et la poétique des nouveaux médias.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-12 pb-24 bg-background text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-serif italic text-foreground mb-4">Le Jury</h1>
        <p className="text-neutral-grey text-sm max-w-md mx-auto">Une équipe d'experts passionnés par l'intersection entre l'art et la technologie.</p>
        <div className="w-16 h-[1px] bg-accent-ia/30 mx-auto mt-8" />
      </motion.div>

      <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
        {jurors.map((juror, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left"
          >
            <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shrink-0 shadow-2xl">
              <img src={juror.image} alt={juror.name} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">{juror.name}</h2>
                <p className="text-xs uppercase tracking-[0.3em] text-accent-ia font-bold">{juror.role}</p>
              </div>
              <p className="text-neutral-grey leading-relaxed text-sm italic">"{juror.bio}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JuryTeam;
