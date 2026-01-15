import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, List, Search, ArrowLeft, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

// Import baseFilms content (normally this would come from an API or shared state)
const baseFilms = [
  {
    id: 1,
    title: "Dune Horizontal",
    director: "Denis Villeneuve",
    year: "2026",
    location: "Arrakis / Marseille",
    category: "Sci-Fi",
    poster: "assetMaquette/horizontaledune.jpg",
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
    poster: "assetMaquette/littlemisssunshine.jpg",
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
    poster: "assetMaquette/subatnce-bandeau.jpg",
    description: "Une réflexion viscérale sur la beauté et la technologie, où la chair rencontre le code.",
    duration: "15:10",
    tools: "Kling AI, Udio"
  }
];

// Generate more mock films for pagination demonstration
const generateMockFilms = () => {
  const films = [];
  for (let i = 1; i <= 55; i++) {
    const base = baseFilms[(i - 1) % baseFilms.length];
    films.push({
      ...base,
      id: i,
      title: `${base.title} ${i}`,
      poster: `${import.meta.env.BASE_URL}${base.poster}`
    });
  }
  return films;
};

const allFilms = generateMockFilms();
const ITEMS_PER_PAGE = 20;

const CatalogueList = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFilms = allFilms.filter(film => 
    film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    film.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
    film.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFilms.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentFilms = filteredFilms.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-earth-brown pb-32">
      {/* Header */}
      <div className="bg-white border-b border-earth-brown/10 sticky top-0 z-50 px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/catalogue')}
              className="p-2 hover:bg-earth-brown/5 rounded-full transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <div>
              <h1 className="text-2xl font-display font-bold">Catalogue complet<span className="text-accent-ia">.</span></h1>
              <p className="text-[10px] uppercase tracking-widest font-bold text-earth-brown/40">{filteredFilms.length} films indexés</p>
            </div>
          </div>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-brown/30" size={18} />
            <input 
              type="text"
              placeholder="Rechercher un film, un réalisateur..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-earth-brown/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-accent-ia/20 transition-all outline-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        {/* View Mode Toggle (Visual Only) */}
        <div className="flex justify-end mb-8">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-earth-brown/5 flex gap-1">
            <button className="p-2 rounded-lg bg-accent-ia/10 text-accent-ia">
              <LayoutGrid size={18} />
            </button>
            <button className="p-2 rounded-lg text-earth-brown/30 hover:bg-earth-brown/5">
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Grid */}
        {currentFilms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentFilms.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 10) * 0.05 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/film/${film.id}`)}
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4 relative shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={film.poster} 
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                      <Play size={20} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1 px-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-sm truncate group-hover:text-accent-ia transition-colors">{film.title}</h3>
                    <span className="text-[10px] font-bold text-accent-ia bg-accent-ia/5 px-2 py-0.5 rounded-md shrink-0">{film.year}</span>
                  </div>
                  <p className="text-[10px] text-earth-brown/50 uppercase tracking-widest font-bold">{film.director}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-earth-brown/10">
            <Search size={48} className="mx-auto mb-4 opacity-10" />
            <p className="text-lg font-serif italic text-earth-brown/40">Aucun film ne correspond à votre recherche.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-20">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-4 rounded-2xl bg-white border border-earth-brown/10 text-earth-brown disabled:opacity-20 hover:bg-earth-brown/5 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-2xl font-bold text-sm transition-all ${
                    currentPage === i + 1 
                    ? 'bg-accent-ia text-white shadow-lg shadow-accent-ia/20' 
                    : 'bg-white border border-earth-brown/10 text-earth-brown hover:bg-earth-brown/5'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-4 rounded-2xl bg-white border border-earth-brown/10 text-earth-brown disabled:opacity-20 hover:bg-earth-brown/5 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogueList;
