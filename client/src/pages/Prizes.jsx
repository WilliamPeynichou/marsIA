import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Heart } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      title: "Grand Prix marsIA",
      description: "La meilleure œuvre combinant innovation technique et narration poétique.",
      partner: "La Plateforme",
      partnerRole: "Co-organisateur",
      icon: Trophy,
      color: "text-cta-gold"
    },
    {
      title: "Prix de l'Innovation",
      description: "Récompense l'utilisation la plus créative et avant-gardiste des outils IA.",
      partner: "AI Creative Lab",
      partnerRole: "Partenaire Technique",
      icon: Star,
      color: "text-accent-ia"
    },
    {
      title: "Prix du Public",
      description: "Le coup de cœur des visiteurs du festival.",
      partner: "Ville de Marseille",
      partnerRole: "Sponsor Institutionnel",
      icon: Heart,
      color: "text-marseille-green"
    },
    {
      title: "Prix du Court-Métrage",
      description: "Excellence dans le format ultra-court (moins de 2 minutes).",
      partner: "Mobile Film Festival",
      partnerRole: "Partenaire Officiel",
      icon: Award,
      color: "text-marseille-ocre"
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-12 pb-24 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-serif italic text-foreground mb-4">Prix & Partenaires</h1>
        <p className="text-neutral-grey text-sm max-w-md mx-auto">Découvrez les récompenses de cette édition et les partenaires qui soutiennent la création IA.</p>
        <div className="w-16 h-[1px] bg-accent-ia/30 mx-auto mt-8" />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
        {prizes.map((prize, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
            
            <div className="flex items-start space-x-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0`}>
                <prize.icon className={prize.color} size={28} />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-display font-bold text-foreground mb-1">{prize.title}</h2>
                  <p className="text-sm text-neutral-grey leading-relaxed">{prize.description}</p>
                </div>
                
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-grey font-bold">Soutenu par</p>
                    <p className="text-sm font-display font-bold text-foreground">{prize.partner}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[9px] uppercase tracking-wider font-bold text-neutral-grey">
                    {prize.partnerRole}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;
