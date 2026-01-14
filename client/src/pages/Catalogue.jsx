import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data
const mockFilms = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  title: `Film ${i + 1}`,
  director: `Réalisateur ${i + 1}`,
  country: ['France', 'USA', 'UK', 'Japan', 'Germany'][Math.floor(Math.random() * 5)],
  category: ['Fiction', 'Documentary', 'Experimental', 'Animation'][Math.floor(Math.random() * 4)],
  aiTools: ['Midjourney', 'Runway', 'Sora', 'ChatGPT'][Math.floor(Math.random() * 4)],
  poster: `https://picsum.photos/seed/${i + 1}/400/600`
}));

const FILMS_PER_PAGE = 20;

const Catalogue = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ category: '', country: '', aiTool: '', prize: '', type: '' });

  const filteredFilms = mockFilms.filter(film => {
    if (filters.category && film.category !== filters.category) return false;
    if (filters.country && film.country !== filters.country) return false;
    if (filters.aiTool && film.aiTools !== filters.aiTool) return false;
    // Simuler d'autres filtres
    if (filters.type && (filters.type === 'solo' ? index % 2 !== 0 : index % 2 === 0)) return false; 
    return true;
  });

  const totalPages = Math.ceil(filteredFilms.length / FILMS_PER_PAGE);
  const startIndex = (currentPage - 1) * FILMS_PER_PAGE;
  const displayedFilms = filteredFilms.slice(startIndex, startIndex + FILMS_PER_PAGE);

  return (
    <div className="min-h-screen px-4 pt-6 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-serif italic text-earth-brown">Catalogue</h1>
          <p className="text-[10px] uppercase tracking-widest text-earth-brown/50 mt-1">{filteredFilms.length} films</p>
        </div>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`p-3 rounded-xl transition-all ${showFilters ? 'bg-accent-ia text-white' : 'bg-earth-brown/5 text-earth-brown/60'}`}
        >
          <Filter size={18} />
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6 p-4 bg-white/60 rounded-2xl space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <select 
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="input-field text-[10px] py-2"
            >
              <option value="">Catégorie</option>
              <option value="Fiction">Fiction</option>
              <option value="Documentary">Documentaire</option>
              <option value="Experimental">Expérimental</option>
              <option value="Animation">Animation</option>
            </select>
            <select 
              value={filters.country}
              onChange={(e) => setFilters({ ...filters, country: e.target.value })}
              className="input-field text-[10px] py-2"
            >
              <option value="">Pays</option>
              <option value="France">France</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Japan">Japon</option>
              <option value="Germany">Allemagne</option>
            </select>
            <select 
              value={filters.aiTool}
              onChange={(e) => setFilters({ ...filters, aiTool: e.target.value })}
              className="input-field text-[10px] py-2"
            >
              <option value="">Outils IA</option>
              <option value="Midjourney">Midjourney</option>
              <option value="Runway">Runway</option>
              <option value="Sora">Sora</option>
              <option value="ChatGPT">ChatGPT</option>
            </select>
            <select 
              value={filters.prize}
              onChange={(e) => setFilters({ ...filters, prize: e.target.value })}
              className="input-field text-[10px] py-2"
            >
              <option value="">Prix visé</option>
              <option value="grand-prix">Grand Prix</option>
              <option value="innovation">Prix Innovation</option>
              <option value="narratif">Prix Narratif</option>
            </select>
            <select 
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="input-field text-[10px] py-2"
            >
              <option value="">Participation</option>
              <option value="solo">Solo</option>
              <option value="group">Groupe</option>
            </select>
          </div>
          <button 
            onClick={() => setFilters({ category: '', country: '', aiTool: '', prize: '', type: '' })}
            className="text-[10px] uppercase tracking-widest text-accent-ia font-bold"
          >
            Réinitialiser
          </button>
        </motion.div>
      )}

      {/* Films Grid */}
      <div className="grid grid-cols-2 gap-4">
        {displayedFilms.map((film, index) => (
          <motion.div
            key={film.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group cursor-pointer"
            onClick={() => navigate('/jury')}
          >
            <div className="aspect-[2/3] rounded-2xl overflow-hidden relative bg-earth-brown/5 mb-3">
              <img 
                src={film.poster} 
                alt={film.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play size={16} className="text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute top-2 right-2 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-[8px] uppercase tracking-wider font-bold text-earth-brown">
                {film.category}
              </div>
            </div>
            <h3 className="text-sm font-bold text-earth-brown truncate">{film.title}</h3>
            <p className="text-[10px] text-earth-brown/50">{film.director} • {film.country}</p>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button 
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-xl bg-earth-brown/5 text-earth-brown disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center space-x-2">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  currentPage === page ? 'bg-accent-ia text-white' : 'bg-earth-brown/5 text-earth-brown/60'
                }`}
              >
                {page}
              </button>
            );
          })}
          {totalPages > 5 && <span className="text-earth-brown/30">...</span>}
        </div>
        <button 
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-xl bg-earth-brown/5 text-earth-brown disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <p className="text-center text-[10px] text-earth-brown/40 mt-2">
        Page {currentPage} sur {totalPages}
      </p>
    </div>
  );
};

export default Catalogue;
