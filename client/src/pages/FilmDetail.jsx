import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Play, Calendar, MapPin, Tag, Cpu, Clock, FileText, Image as ImageIcon, MessageSquare, ExternalLink, User } from 'lucide-react';

const mockFilmDetails = {
  1: {
    id: 1,
    title: "Dune Horizontal",
    director: "Denis Villeneuve",
    year: "2026",
    location: "Arrakis / Marseille",
    category: "Sci-Fi",
    poster: "/assets/maquette/horizontaledune.jpg",
    description: "Une exploration contemplative des paysages désertiques à travers le prisme de l'intelligence artificielle.",
    duration: "12:45",
    tools: "Runway Gen-3, Midjourney v6",
    nature: "100% IA Générative",
    prizes: ["Grand Prix marsIA", "Prix de l'Innovation Visuelle"],
    srt: "dune_horizontal_fr.srt",
    gallery: [
      "https://picsum.photos/seed/d1/800/600",
      "https://picsum.photos/seed/d2/800/600",
      "https://picsum.photos/seed/d3/800/600"
    ],
    companionFiles: ["Dossier_artistique.pdf", "Note_intention.pdf"],
    directorBio: "Denis Villeneuve est un cinéaste visionnaire explorant les frontières du réel."
  },
  2: {
    id: 2,
    title: "Miss Sunshine AI",
    director: "Jonathan Dayton",
    year: "2026",
    location: "Albuquerque / Berlin",
    category: "Dramédie",
    poster: "/assets/maquette/littlemisssunshine.jpg",
    description: "Le voyage émotionnel d'une famille recomposée dans un monde où les souvenirs sont augmentés par l'IA.",
    duration: "08:20",
    tools: "Sora, Luma Dream Machine",
    nature: "Hybride (IA & Réel)",
    prizes: ["Prix du Public", "Prix du Meilleur Scénario"],
    srt: "miss_sunshine_ai_en.srt",
    gallery: [
      "https://picsum.photos/seed/s1/800/600",
      "https://picsum.photos/seed/s2/800/600"
    ],
    companionFiles: ["Storyboard_IA.pdf"],
    directorBio: "Le duo Dayton/Farris explore l'humanité à travers l'absurde."
  },
  3: {
    id: 3,
    title: "The Substance",
    director: "Coralie Fargeat",
    year: "2026",
    location: "Cannes / Tokyo",
    category: "Horreur / Experimental",
    poster: "/assets/maquette/subatnce-bandeau.jpg",
    description: "Une réflexion viscérale sur la beauté et la technologie, où la chair rencontre le code.",
    duration: "15:10",
    tools: "Kling AI, Udio",
    nature: "100% IA Générative",
    prizes: ["Prix de l'Expérimentation", "Mention Spéciale du Jury"],
    srt: "substance_multi.srt",
    gallery: [
      "https://picsum.photos/seed/sub1/800/600",
      "https://picsum.photos/seed/sub2/800/600",
      "https://picsum.photos/seed/sub3/800/600"
    ],
    companionFiles: ["Prompt_Journal.pdf", "Sound_Design_Notes.pdf"],
    directorBio: "Coralie Fargeat redéfinit le cinéma de genre avec une précision chirurgicale."
  }
};

const FilmDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    // Simulation d'un fetch API
    setFilm(mockFilmDetails[id] || mockFilmDetails[1]);
    window.scrollTo(0, 0);
  }, [id]);

  if (!film) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Poster Background */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={film.poster} 
          className="w-full h-full object-cover"
        />
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/catalogue')}
          className="absolute top-10 left-10 z-20 flex items-center space-x-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
        >
          <ChevronLeft size={20} />
          <span>Back to Reel</span>
        </button>

        {/* Hero Content */}
        <div className="absolute bottom-20 left-10 md:left-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="bg-accent-ia text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
              {film.category}
            </span>
            <h1 className="text-6xl md:text-9xl font-serif italic mb-6 leading-[0.85]">{film.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 font-bold uppercase tracking-widest">
              <span className="flex items-center"><User size={16} className="mr-2 text-accent-ia" /> {film.director}</span>
              <span className="flex items-center"><MapPin size={16} className="mr-2 text-accent-ia" /> {film.location}</span>
              <span className="flex items-center"><Clock size={16} className="mr-2 text-accent-ia" /> {film.duration}</span>
              <span className="flex items-center"><Calendar size={16} className="mr-2 text-accent-ia" /> {film.year}</span>
            </div>
          </motion.div>
        </div>

        {/* Main Play Action */}
        <Link 
          to="/jury" 
          className="absolute bottom-20 right-10 md:right-24 group"
        >
          <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-2xl">
            <Play size={32} fill="black" />
          </div>
          <span className="absolute top-full mt-4 right-0 text-[10px] font-bold uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">Watch Now</span>
        </Link>
      </div>

      {/* Details Section */}
      <div className="px-10 md:px-24 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Column: Bio & Synopsis */}
        <div className="lg:col-span-7 space-y-16">
          <section>
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-accent-ia font-bold mb-8">Synopsis</h3>
            <p className="text-xl md:text-3xl font-serif italic leading-relaxed text-white/90">
              "{film.description}"
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-accent-ia font-bold mb-8">Director's Note</h3>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {film.directorBio}
            </p>
          </section>

          {/* Gallery */}
          <section className="pt-10 border-t border-white/10">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-accent-ia font-bold mb-8">Stills Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {film.gallery.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl bg-white/5 group cursor-zoom-in">
                  <img src={img} className="w-full h-full object-cover transition-all duration-700" alt="Still" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Technical Info & Assets */}
        <div className="lg:col-span-5 space-y-12">
          <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 backdrop-blur-xl">
            <h3 className="text-lg font-serif italic mb-8">Technical Sheet</h3>
            
            <div className="space-y-8">
              <div className="flex justify-between items-start pb-6 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">IA Stack</span>
                <span className="text-sm font-bold flex items-center text-right max-w-[200px]"><Cpu size={14} className="mr-2 text-accent-ia shrink-0" /> {film.tools}</span>
              </div>
              <div className="flex justify-between items-start pb-6 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Nature</span>
                <span className="text-sm font-bold uppercase tracking-widest">{film.nature}</span>
              </div>
              <div className="pb-2">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-4">Prizes Targeted</span>
                <div className="flex flex-wrap gap-2">
                  {film.prizes.map(p => (
                    <span key={p} className="text-[10px] bg-white/10 px-3 py-1 rounded-full font-bold">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 backdrop-blur-xl">
            <h3 className="text-lg font-serif italic mb-8">Production Assets</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:bg-black transition-colors group cursor-pointer">
                <div className="flex items-center">
                  <MessageSquare size={18} className="text-accent-ia mr-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{film.srt}</span>
                </div>
                <FileText size={14} className="opacity-40 group-hover:opacity-100" />
              </div>

              {film.companionFiles.map(file => (
                <div key={file} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:bg-black transition-colors group cursor-pointer">
                  <div className="flex items-center">
                    <FileText size={18} className="text-accent-ia mr-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">{file}</span>
                  </div>
                  <ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grain Effect */}
      <div className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-[0.08] pointer-events-none grain-bg z-50" />
      <style dangerouslySetInnerHTML={{ __html: `
        .grain-bg {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          filter: contrast(150%) brightness(100%);
        }
      `}} />
    </div>
  );
};

export default FilmDetail;
