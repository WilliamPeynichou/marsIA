import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Filter, Play, ArrowRight, Calendar, MapPin, Tag, ChevronDown, LayoutGrid } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

// Données enrichies avec les images de la maquette
const baseFilms = [
  {
    id: 1,
    title: "Dune Horizontal",
    director: "Denis Villeneuve",
    year: "2026",
    location: "Arrakis / Marseille",
    category: "Sci-Fi",
    poster: `${import.meta.env.BASE_URL}assetMaquette/horizontaledune.jpg`,
    description: "Une exploration contemplative des paysages désertiques à travers le prisme de l'intelligence artificielle.",
    duration: "12:45",
    tools: "Runway Gen-3, Midjourney v6"
  },
  {
    id: 2,
    title: "Miss Sunshine AI",
    director: "Jonathan Dayton",
    year: "2026",
    location: "Albuquerque / Berlin",
    category: "Dramédie",
    poster: `${import.meta.env.BASE_URL}assetMaquette/littlemisssunshine.jpg`,
    description: "Le voyage émotionnel d'une famille recomposée dans un monde où les souvenirs sont augmentés par l'IA.",
    duration: "08:20",
    tools: "Sora, Luma Dream Machine"
  },
  {
    id: 3,
    title: "The Substance",
    director: "Coralie Fargeat",
    year: "2026",
    location: "Cannes / Tokyo",
    category: "Horreur / Experimental",
    poster: `${import.meta.env.BASE_URL}assetMaquette/subatnce-bandeau.jpg`,
    description: "Une réflexion viscérale sur la beauté et la technologie, où la chair rencontre le code.",
    duration: "15:10",
    tools: "Kling AI, Udio"
  }
];

// On triple la liste pour permettre le loop infini
const mockFilms = [...baseFilms, ...baseFilms, ...baseFilms];

const FilmItem = ({ film, index }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Inertie et mouvement smooth
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]); // Base stable
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 1]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center snap-center px-4 md:px-0"
    >
      {/* Main Poster Container */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative w-[90vw] md:w-[85vw] h-[70vh] md:h-[80vh] group overflow-hidden rounded-[2rem] md:rounded-sm shadow-[0_0_80px_rgba(0,0,0,0.6)] flex flex-col md:block bg-black border border-white/5"
      >
        <img 
          src={film.poster} 
          alt={film.title}
          className="w-full h-[50%] md:h-full object-cover transition-all duration-1000 ease-out"
        />

        {/* Desktop Hover Info Overlay (Hidden on Mobile) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          {/* Bottom Left Info */}
          <div className="absolute bottom-10 left-10 text-left max-w-lg pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-accent-ia text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">{film.category}</span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-4 leading-none">{film.title}</h2>
              <div className="flex items-center space-x-6 text-[10px] text-white/60 font-bold tracking-widest uppercase">
                <span>Dir. {film.director}</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>{film.duration}</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>{film.year}</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Right Discover Button */}
          <div className="absolute bottom-10 right-10 pointer-events-auto">
            <button 
              onClick={() => navigate(`/film/${film.id}`)}
              className="flex items-center space-x-4 group/btn bg-white/5 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Discover Film</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Mobile Info Section (Visible only on Mobile) */}
        <div className="block md:hidden p-6 bg-black flex-1 flex flex-col justify-between">
          <div>
            <span className="text-accent-ia text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">{film.category}</span>
            <h2 className="text-3xl font-serif italic text-white mb-3 leading-none">{film.title}</h2>
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-white/60 font-bold tracking-widest uppercase mb-4">
              <span>{film.director}</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>{film.year}</span>
            </div>
          </div>
          
          <button 
            onClick={() => navigate(`/film/${film.id}`)}
            className="w-full flex items-center justify-between bg-white/10 border border-white/10 px-6 py-4 rounded-xl active:bg-white active:text-black transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Discover</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Film Grain Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.15] grain-bg" />
      </motion.div>
    </div>
  );
};

const Catalogue = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    // Logique custom cursor
    setIsScrolling(true);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 150);

    const scrollTop = container.scrollTop;
    const itemHeight = container.clientHeight;
    const totalBaseHeight = itemHeight * baseFilms.length;

    if (scrollTop <= 0) {
      container.style.scrollBehavior = 'auto';
      container.scrollTop = totalBaseHeight;
      container.style.scrollBehavior = 'smooth';
    } else if (scrollTop >= totalBaseHeight * 2) {
      container.style.scrollBehavior = 'auto';
      container.scrollTop = totalBaseHeight;
      container.style.scrollBehavior = 'smooth';
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const itemHeight = container.clientHeight || window.innerHeight;
      container.scrollTop = itemHeight * baseFilms.length;
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      {/* Custom Scroll Cursor */}
      <AnimatePresence>
        {!isScrolling && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="hidden md:flex fixed z-[999] pointer-events-none flex-col items-center justify-center w-20 h-20 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm"
            style={{ 
              left: mousePos.x - 40, 
              top: mousePos.y - 40,
            }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Scroll</span>
            <ChevronDown size={14} className="text-white mt-1 animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS For Grain Effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        .grain-bg {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          filter: contrast(150%) brightness(100%);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Header Style Pelicule */}
      <header className="fixed top-0 left-0 right-0 z-50 p-10 flex justify-between items-start pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-ia mb-2 block">marsIA</span>
          <h1 className="text-2xl md:text-4xl font-display font-bold tracking-tighter">Selection Officielle<span className="text-accent-ia">.</span></h1>
        </motion.div>
        
        <div className="pointer-events-auto flex flex-col items-end">
          <Link 
            to="/catalogue/list"
            className="group flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all mb-4"
          >
            <LayoutGrid size={14} className="text-accent-ia" />
            <span className="text-[9px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity">Vue indexée</span>
          </Link>
          <div className="w-12 h-[1px] bg-white/20" />
        </div>
      </header>

      {/* Film Strip Container */}
      <main 
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar"
      >
        {mockFilms.map((film, index) => (
          <FilmItem key={`${film.id}-${index}`} film={film} index={index} />
        ))}
      </main>

      {/* Vertical Indicator */}
      <div className="hidden md:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col items-center space-y-4 text-white/10 z-20">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
};

export default Catalogue;
