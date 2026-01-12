import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Opener Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Sky with clouds Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=2000&auto=format&fit=crop" 
            alt="Pale Blue Sky with Clouds" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative z-20 flex flex-col items-center"
        >
          <div className="space-y-6 text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] font-bold text-neutral-grey"
            >
              Soumissions ouvertes
            </motion.span>
            <div className="flex justify-center">
              <Countdown targetDate="2026-03-13T00:00:00Z" />
            </div>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.8] text-foreground">
              mars<span className="text-blue-600">IA</span>
            </h1>
            <p className="text-lg md:text-2xl font-serif italic text-green-[#5F7A4A] opacity-90 font-medium">
              AI Short Film Festival
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 flex flex-col items-center space-y-6"
          >
            <Link to="/submit">
              <button className="btn-primary shadow-lg shadow-cta-gold/20">
                Soumettre votre film
              </button>
            </Link>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-accent-ia/40 to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-accent-ia/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif italic text-foreground text-center mb-12">Objectifs du Festival</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "120+", label: "Pays" },
              { value: "600+", label: "Films" },
              { value: "3K+", label: "Visiteurs" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass text-center p-6 rounded-2xl"
              >
                <span className="text-3xl md:text-4xl font-display font-bold text-[#5F7A4A]">{stat.value}</span>
                <p className="text-[10px] uppercase tracking-widest text-neutral-grey mt-2 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif italic text-foreground">Imaginez des futurs souhaitables</h2>
          <p className="text-neutral-grey leading-relaxed">
            marsIA est un festival international de courts-métrages générés par Intelligence Artificielle. 
            Films de 1 à 2 minutes explorant le thème de cette première édition.
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <Link to="/catalogue">
              <button className="btn-secondary">
                Voir les films
              </button>
            </Link>
            <Link to="/submit">
              <button className="btn-primary">
                Participer
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-ia"
            >
              Ils nous soutiennent
            </motion.span>
            <h2 className="text-4xl font-display font-bold text-foreground mt-2">Partenaires & Sponsors</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "La Plateforme", type: "Co-Organisateur", logo: "LP" },
              { name: "Mobile Film Festival", type: "Partenaire Officiel", logo: "MFF" },
              { name: "Ville de Marseille", type: "Sponsor Institutionnel", logo: "MARS" },
              { name: "AI Creative Lab", type: "Partenaire Technique", logo: "AIC" },
              { name: "CinéDigital", type: "Sponsor Gold", logo: "CD" },
              { name: "Future Vision", type: "Sponsor Silver", logo: "FV" },
              { name: "TechNext", type: "Partenaire Média", logo: "TN" },
              { name: "Creative AI", type: "Donateur", logo: "CAI" }
            ].map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-accent-ia/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-xl font-display font-bold text-accent-ia">{sponsor.logo}</span>
                </div>
                <h3 className="font-display font-bold text-foreground text-sm mb-1">{sponsor.name}</h3>
                <p className="text-[10px] uppercase tracking-wider text-neutral-grey font-medium">{sponsor.type}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 p-8 glass rounded-[40px] border-dashed border-accent-ia/20 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-xl font-display font-bold text-foreground">Devenir partenaire</h3>
              <p className="text-sm text-neutral-grey">Soutenez la création IA et boostez votre visibilité</p>
            </div>
            <button className="btn-secondary whitespace-nowrap">
              Télécharger le dossier (PDF)
            </button>
          </motion.div>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex justify-center items-center space-x-12 opacity-40">
          <span className="text-[10px] uppercase tracking-widest font-bold text-foreground">La Plateforme</span>
          <span className="text-neutral-grey">×</span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-foreground">Mobile Film Festival</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
