import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Star, MessageSquare, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const JuryFavoris = () => {
  const [favoris, setFavoris] = useState([
    { id: 1, title: "Neon Future", director: "Alice Martin", country: "France", aiTools: "Runway, Midjourney", rating: 8.5, comment: "Visuels impressionnants", thumbnail: "from-blue-400 to-indigo-500" },
    { id: 3, title: "Marseille 2050", director: "Marie Dupont", country: "France", aiTools: "Midjourney, Kling", rating: 9.0, comment: "Vision créative", thumbnail: "from-green-400 to-emerald-500" },
  ]);

  return (
    <div className="min-h-screen bg-background pt-6 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link to="/jury" className="inline-flex items-center space-x-2 text-neutral-grey hover:text-foreground mb-4">
            <ArrowLeft size={20} /><span className="text-sm">Retour à la notation</span>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">Mes Favoris</h1>
          <p className="text-neutral-grey">{favoris.length} films enregistrés pour la délibération</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoris.map((film) => (
            <div key={film.id} className="glass rounded-2xl overflow-hidden group">
              <div className={`aspect-video bg-gradient-to-br ${film.thumbnail} relative`}>
                <div className="absolute top-3 right-3 bg-cta-gold text-background px-3 py-1 rounded-full font-bold text-sm flex items-center space-x-1">
                  <Star size={14} fill="currentColor" /><span>{film.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-display font-bold text-foreground mb-1">{film.title}</h3>
                <p className="text-sm text-neutral-grey mb-3">{film.director} · {film.country}</p>
                {film.comment && <div className="bg-white/5 p-3 rounded-lg text-xs italic text-foreground/80 mb-3">{film.comment}</div>}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg font-bold text-sm"><Trash2 size={16} /><span>Retirer</span></button>
                  <button className="flex-1 px-4 py-2 bg-accent-ia/20 text-accent-ia rounded-lg font-bold text-sm">Modifier</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JuryFavoris;
