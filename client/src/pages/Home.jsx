import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Calendar, Tag, User, Play, ArrowRight } from 'lucide-react';
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
          <div className="space-y-6 text-center mb-10">
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-4"
            >
              <span className="text-xl md:text-2xl font-serif italic text-foreground tracking-widest uppercase">
                13 — 15 Mars 2026
              </span>
            </motion.div>
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
            className="mt-6 flex flex-col items-center space-y-4"
          >
            <Link to="/auth?mode=register">
              <button className="btn-primary shadow-lg shadow-cta-gold/20">
                Soumettre votre film
              </button>
            </Link>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-8 bg-gradient-to-b from-accent-ia/40 to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-gradient-to-b from-background to-accent-ia/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-serif italic text-foreground text-center mb-8 md:mb-12">
            Objectifs du Festival
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {[
              { value: "120+", label: "Pays" },
              { value: "600+", label: "Films" },
              { value: "3K+", label: "Visiteurs" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass text-center p-6 md:p-10 rounded-[2rem] border border-earth-brown/5 shadow-sm"
              >
                <span className="text-[clamp(2rem,6vw,3.5rem)] font-display font-black text-[#5F7A4A] leading-none block">
                  {stat.value}
                </span>
                <p className="text-[clamp(0.6rem,1.5vw,0.75rem)] uppercase tracking-[0.2em] text-neutral-grey mt-3 md:mt-4 font-black">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Preview Section */}
      <section className="py-24 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-cta-gold"
            >
              Les Récompenses
            </motion.span>
            <h2 className="text-4xl font-display font-bold text-foreground mt-2">Prix Décernés</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Grand Prix marsIA", 
                partner: "La Plateforme", 
                desc: "La distinction suprême récompensant l'excellence artistique et technique.",
                color: "border-cta-gold/30 bg-cta-gold/5" 
              },
              { 
                title: "Prix de l'Innovation", 
                partner: "AI Creative Lab", 
                desc: "Récompense l'utilisation la plus créative des nouveaux outils IA.",
                color: "border-accent-ia/30 bg-accent-ia/5" 
              },
              { 
                title: "Prix du Public", 
                partner: "Ville de Marseille", 
                desc: "Le film ayant reçu le plus de votes de la part des visiteurs.",
                color: "border-marseille-green/30 bg-marseille-green/5" 
              },
              { 
                title: "Prix du Court-Métrage", 
                partner: "Mobile Film Festival", 
                desc: "Excellence dans le format ultra-court de moins de 2 minutes.",
                color: "border-marseille-ocre/30 bg-marseille-ocre/5" 
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[2.5rem] border ${p.color} group hover:scale-[1.02] transition-all duration-500`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display font-bold text-foreground">{p.title}</h3>
                  <span className="text-[8px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full border border-white/10">Édition 2026</span>
                </div>
                <p className="text-sm text-neutral-grey leading-relaxed mb-6">{p.desc}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] uppercase font-bold text-neutral-grey/60">Soutenu par</span>
                  <span className="text-[10px] uppercase font-bold text-foreground">{p.partner}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/prizes">
              <button className="text-[10px] uppercase tracking-widest font-bold text-accent-ia border-b border-accent-ia/30 pb-1 hover:border-accent-ia transition-all">
                Voir tous les détails des prix
              </button>
            </Link>
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
              <button className="px-8 py-4 rounded-2xl bg-black text-cta-gold font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-neutral-900 transition-all shadow-xl shadow-black/20">
                Voir les films
              </button>
            </Link>
            <Link to="/auth?mode=register">
              <button className="btn-primary px-8">
                Participer
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-12 md:pt-20 border-t border-earth-brown/10">
            <Link to="/prizes" className="group w-full">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white border border-earth-brown/10 hover:border-cta-gold/50 hover:bg-cta-gold/5 transition-all duration-300 flex flex-col items-center text-center space-y-4 shadow-[0_4px_20px_rgba(120,53,15,0.05)] hover:shadow-2xl hover:shadow-cta-gold/10 active:scale-95 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-cta-gold/10 flex items-center justify-center group-hover:bg-cta-gold group-hover:rotate-12 transition-all duration-500 shadow-sm">
                  <Tag size={24} className="text-cta-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[clamp(0.7rem,2vw,0.85rem)] uppercase tracking-[0.25em] font-black text-earth-brown">Les Prix</p>
                  <p className="text-[clamp(0.55rem,1.2vw,0.65rem)] text-neutral-grey mt-1.5 font-medium italic">Découvrir les récompenses</p>
                </div>
                <div className="pt-2 md:pt-4">
                  <div className="w-10 h-10 rounded-full border border-earth-brown/10 flex items-center justify-center group-hover:border-cta-gold/30 transition-colors bg-background/50">
                    <ArrowRight size={14} className="text-neutral-grey group-hover:text-cta-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/jury-team" className="group w-full">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white border border-earth-brown/10 hover:border-accent-ia/50 hover:bg-accent-ia/5 transition-all duration-300 flex flex-col items-center text-center space-y-4 shadow-[0_4px_20px_rgba(120,53,15,0.05)] hover:shadow-2xl hover:shadow-accent-ia/10 active:scale-95 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-accent-ia/10 flex items-center justify-center group-hover:bg-accent-ia group-hover:-rotate-12 transition-all duration-500 shadow-sm">
                  <User size={24} className="text-accent-ia group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[clamp(0.7rem,2vw,0.85rem)] uppercase tracking-[0.25em] font-black text-earth-brown">Le Jury</p>
                  <p className="text-[clamp(0.55rem,1.2vw,0.65rem)] text-neutral-grey mt-1.5 font-medium italic">Experts & Visionnaires</p>
                </div>
                <div className="pt-2 md:pt-4">
                  <div className="w-10 h-10 rounded-full border border-earth-brown/10 flex items-center justify-center group-hover:border-accent-ia/30 transition-colors bg-background/50">
                    <ArrowRight size={14} className="text-neutral-grey group-hover:text-accent-ia group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/winners" className="group w-full">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white border border-earth-brown/10 hover:border-marseille-green/50 hover:bg-marseille-green/5 transition-all duration-300 flex flex-col items-center text-center space-y-4 shadow-[0_4px_20px_rgba(120,53,15,0.05)] hover:shadow-2xl hover:shadow-marseille-green/10 active:scale-95 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-marseille-green/10 flex items-center justify-center group-hover:bg-marseille-green group-hover:rotate-12 transition-all duration-500 shadow-sm">
                  <Play size={24} className="text-marseille-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[clamp(0.7rem,2vw,0.85rem)] uppercase tracking-[0.25em] font-black text-earth-brown">Palmarès</p>
                  <p className="text-[clamp(0.55rem,1.2vw,0.65rem)] text-neutral-grey mt-1.5 font-medium italic">Films Lauréats</p>
                </div>
                <div className="pt-2 md:pt-4">
                  <div className="w-10 h-10 rounded-full border border-earth-brown/10 flex items-center justify-center group-hover:border-marseille-green/30 transition-colors bg-background/50">
                    <ArrowRight size={14} className="text-neutral-grey group-hover:text-marseille-green group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Venue Section */}
      <section className="py-20 px-6 bg-accent-ia/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-ia/10 rounded-full blur-[100px] -mr-32 -mt-32" />
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="space-y-6 text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-ia"
            >
              Rendez-vous à Marseille
            </motion.span>
            <h2 className="text-4xl font-display font-bold text-foreground mt-2">Lieu de l'événement</h2>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-neutral-grey">
              <MapPin className="text-accent-ia" size={20} />
              <p className="text-lg">155 rue Peyssonnel, 13002 Marseille</p>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-neutral-grey mt-2">
              <Calendar className="text-cta-gold" size={20} />
              <p className="text-lg font-bold">13 - 15 Mars 2026</p>
            </div>
            <div className="pt-4">
              <Link to="/venue">
                <button className="btn-primary group">
                  <span className="flex items-center">
                    Infos sur le lieu
                    <Navigation className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-video rounded-[2.5rem] overflow-hidden glass border border-white/10 p-2">
            <img 
              src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=1000&auto=format&fit=crop" 
              alt="Marseille Port" 
              className="w-full h-full object-cover rounded-[2rem] opacity-80"
            />
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
              { name: "La Plateforme", type: "Grand Prix marsIA", logo: "LP" },
              { name: "Mobile Film Festival", type: "Prix Court-Métrage", logo: "MFF" },
              { name: "Ville de Marseille", type: "Prix du Public", logo: "MARS" },
              { name: "AI Creative Lab", type: "Prix de l'Innovation", logo: "AIC" },
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
