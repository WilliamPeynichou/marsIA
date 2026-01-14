import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { Star, Bookmark, Trash2, X, MessageSquare, ChevronUp, ChevronDown, BookmarkCheck, AlertTriangle, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock films data
const mockJuryFilms = [
  { id: 1, title: "Neon Future", director: "Alice Martin", country: "France", aiTools: "Runway, Midjourney", color: "from-blue-400 to-indigo-500", url: "https://player.vimeo.com/external/370331493.sd.mp4?s=7b2351d1ee6479994c6a967c11714872&profile_id=139&oauth2_token_id=57447761" },
  { id: 2, title: "Digital Dreams", director: "John Smith", country: "USA", aiTools: "Sora, ChatGPT", color: "from-blue-400 to-cyan-500", url: "https://player.vimeo.com/external/370331493.sd.mp4?s=7b2351d1ee6479994c6a967c11714872&profile_id=139&oauth2_token_id=57447761" },
  { id: 3, title: "Marseille 2050", director: "Marie Dupont", country: "France", aiTools: "Midjourney, Kling", color: "from-green-400 to-emerald-500", url: "https://player.vimeo.com/external/370331493.sd.mp4?s=7b2351d1ee6479994c6a967c11714872&profile_id=139&oauth2_token_id=57447761" },
  { id: 4, title: "AI Symphony", director: "Kenji Tanaka", country: "Japan", aiTools: "Suno, Runway", color: "from-purple-400 to-violet-500", url: "https://player.vimeo.com/external/370331493.sd.mp4?s=7b2351d1ee6479994c6a967c11714872&profile_id=139&oauth2_token_id=57447761" },
  { id: 5, title: "Tomorrow's Garden", director: "Elena Rossi", country: "Italy", aiTools: "Stable Diffusion", color: "from-rose-400 to-pink-500", url: "https://player.vimeo.com/external/370331493.sd.mp4?s=7b2351d1ee6479994c6a967c11714872&profile_id=139&oauth2_token_id=57447761" },
];

const Jury = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isJury = user.role === 'jury' || user.role === 'admin';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [bookmarked, setBookmarked] = useState([]);
  const [dislikedTrash, setDislikedTrash] = useState([]);
  const [showTrash, setShowTrash] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);
  const [ratings, setRatings] = useState({ artistic: 5, narrative: 5 });
  const [decision, setDecision] = useState(null);

  const currentFilm = mockJuryFilms[currentIndex];

  const handleSwipe = (dir) => {
    if (dir === 'up' && currentIndex < mockJuryFilms.length - 1) {
      setDirection(1);
      setCurrentIndex(i => i + 1);
    } else if (dir === 'down' && currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(i => i - 1);
    } else if (dir === 'right') {
      if (isJury) setShowVoteModal(true);
      else toggleBookmark();
    } else if (dir === 'left') {
      if (isJury) {
        // Dislike - add to trash
        setDislikedTrash(prev => [...prev.slice(-4), currentFilm]);
        if (currentIndex < mockJuryFilms.length - 1) {
          setDirection(1);
          setCurrentIndex(i => i + 1);
        }
      } else {
        setShowReportModal(true);
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe('up'),
    onSwipedDown: () => handleSwipe('down'),
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const toggleBookmark = () => {
    if (bookmarked.includes(currentFilm.id)) {
      setBookmarked(prev => prev.filter(id => id !== currentFilm.id));
    } else {
      setBookmarked(prev => [...prev, currentFilm.id]);
    }
  };

  const restoreFromTrash = (film) => {
    setDislikedTrash(prev => prev.filter(f => f.id !== film.id));
    setShowTrash(false);
  };

  return (
    <div {...handlers} className="fixed inset-0 bg-background touch-none select-none overflow-hidden">
      {/* Main Film View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: direction > 0 ? '100%' : direction < 0 ? '-100%' : 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: direction > 0 ? '-100%' : '100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className={`absolute inset-0 bg-gradient-to-br ${currentFilm.color} flex flex-col`}
        >
          {/* Video Player Background Simulation */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-60"
              src={currentFilm.url}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 z-[1]" />

          {/* Film Info Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 pb-24 bg-gradient-to-t from-black/60 to-transparent z-10">
            <h1 className="text-3xl font-display font-bold text-white mb-2">{currentFilm.title}</h1>
            <p className="text-white/70 text-sm">{currentFilm.director} • {currentFilm.country}</p>
            <p className="text-white/50 text-xs mt-2">IA: {currentFilm.aiTools}</p>
          </div>

          {/* Navigation Hints */}
          <div className="absolute left-6 top-8 z-20">
            <Link to={-1} className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
              <ChevronLeft size={24} />
              <span className="text-xs font-bold uppercase tracking-widest">Retour</span>
            </Link>
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-2 text-white/30 z-10">
            <ChevronUp size={20} />
            <span className="text-[8px] uppercase tracking-widest writing-vertical">Swipe</span>
            <ChevronDown size={20} />
          </div>

          {/* Swipe Indicators */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-white/20 text-[10px] uppercase tracking-widest">
            ← Dislike
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 text-white/20 text-[10px] uppercase tracking-widest">
            Like →
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-32 flex flex-col space-y-6 z-20">
        <Link to="/jury/favoris">
          <button 
            className="w-12 h-12 rounded-full bg-cta-gold/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-cta-gold transition-all relative shadow-lg"
            title="Voir mes favoris"
          >
            <BookmarkCheck size={22} />
            {bookmarked.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-cta-gold rounded-full text-[10px] font-bold flex items-center justify-center">
                {bookmarked.length}
              </span>
            )}
          </button>
        </Link>

        {isJury && (
          <button 
            onClick={() => setShowVoteModal(true)}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            title="Voter"
          >
            <Star size={22} />
          </button>
        )}

        <button 
          onClick={toggleBookmark}
          className={`w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
            bookmarked.includes(currentFilm.id) ? 'bg-accent-ia text-white' : 'bg-white/20 text-white hover:bg-white/30'
          }`}
          title="Mettre en signet"
        >
          <Bookmark size={22} fill={bookmarked.includes(currentFilm.id) ? 'currentColor' : 'none'} />
        </button>

        {isJury && (
          <button 
            onClick={() => setShowMessageModal(true)}
            className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-all"
            title="Contacter le réalisateur"
          >
            <MessageSquare size={22} />
          </button>
        )}

        <button 
          onClick={() => setShowReportModal(true)}
          className="w-12 h-12 rounded-full bg-red-500/20 backdrop-blur-sm flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all"
          title="Signaler"
        >
          <AlertTriangle size={22} />
        </button>

        {isJury && dislikedTrash.length > 0 && (
          <button 
            onClick={() => setShowTrash(true)}
            className="w-12 h-12 rounded-full bg-red-500/80 backdrop-blur-sm flex items-center justify-center text-white relative"
          >
            <Trash2 size={22} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-red-500 rounded-full text-[10px] font-bold flex items-center justify-center">
              {dislikedTrash.length}
            </span>
          </button>
        )}
      </div>

      {/* Progress */}
      <div className="absolute top-4 left-4 right-4 flex space-x-1 z-20">
        {mockJuryFilms.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 flex-1 rounded-full transition-all ${i <= currentIndex ? 'bg-white' : 'bg-white/20'}`} 
          />
        ))}
      </div>

      {/* Vote Modal */}
      <AnimatePresence>
        {showVoteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
          >
            <button onClick={() => setShowVoteModal(false)} className="absolute top-6 right-6 text-white/60">
              <X size={28} />
            </button>
            <div className="text-center w-full max-w-sm">
              <h2 className="text-2xl font-serif italic text-white mb-8">Noter ce film</h2>
              
              <div className="space-y-8 mb-8">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block mb-4">Critère Artistique</label>
                  <div className="flex justify-between">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <button 
                        key={n}
                        onClick={() => setRatings({ ...ratings, artistic: n })}
                        className={`text-xl font-display transition-all ${
                          ratings.artistic >= n ? 'text-accent-ia scale-110' : 'text-white/30 hover:text-white/60'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block mb-4">Critère Narratif</label>
                  <div className="flex justify-between">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <button 
                        key={n}
                        onClick={() => setRatings({ ...ratings, narrative: n })}
                        className={`text-xl font-display transition-all ${
                          ratings.narrative >= n ? 'text-cta-gold scale-110' : 'text-white/30 hover:text-white/60'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block mb-4">Décision</label>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setDecision('non')}
                      className={`flex-1 py-3 rounded-xl text-[10px] uppercase font-bold transition-all ${decision === 'non' ? 'bg-red-500 text-white' : 'bg-white/5 text-red-500 border border-red-500/20'}`}
                    >
                      Non
                    </button>
                    <button 
                      onClick={() => setDecision('discuter')}
                      className={`flex-1 py-3 rounded-xl text-[10px] uppercase font-bold transition-all ${decision === 'discuter' ? 'bg-cta-gold text-white' : 'bg-white/5 text-cta-gold border border-cta-gold/20'}`}
                    >
                      À discuter
                    </button>
                    <button 
                      onClick={() => setDecision('oui')}
                      className={`flex-1 py-3 rounded-xl text-[10px] uppercase font-bold transition-all ${decision === 'oui' ? 'bg-marseille-green text-white' : 'bg-white/5 text-marseille-green border border-marseille-green/20'}`}
                    >
                      Oui
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <textarea 
                  placeholder="Notes internes et commentaires privés..."
                  rows={3}
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 resize-none"
                />
                
                <button 
                  onClick={() => {
                    setShowVoteModal(false);
                    if (currentIndex < mockJuryFilms.length - 1) {
                      setDirection(1);
                      setCurrentIndex(i => i + 1);
                    }
                  }}
                  className="w-full bg-accent-ia text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest"
                >
                  Valider la note
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comment Modal */}
      <AnimatePresence>
        {showCommentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
          >
            <button onClick={() => setShowCommentModal(false)} className="absolute top-6 right-6 text-white/60">
              <X size={28} />
            </button>
            <div className="w-full max-w-sm">
              <h2 className="text-2xl font-serif italic text-white mb-6 text-center">Note privée</h2>
              <textarea 
                placeholder="Vos impressions personnelles..."
                rows={5}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 resize-none"
              />
              <button 
                onClick={() => setShowCommentModal(false)}
                className="w-full mt-4 bg-nature-green text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest"
              >
                Enregistrer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Modal */}
      <AnimatePresence>
        {showMessageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
          >
            <button onClick={() => setShowMessageModal(false)} className="absolute top-6 right-6 text-white/60">
              <X size={28} />
            </button>
            <div className="w-full max-w-sm">
              <h2 className="text-2xl font-serif italic text-white mb-6 text-center">Message au réalisateur</h2>
              <p className="text-white/50 text-xs mb-4 text-center">Utilisez cet espace pour signaler un problème technique ou demander une correction sur la vidéo.</p>
              <textarea 
                placeholder="Votre message..."
                rows={5}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 resize-none mb-4"
              />
              <button 
                onClick={() => {
                  alert('Message envoyé au réalisateur');
                  setShowMessageModal(false);
                }}
                className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest"
              >
                Envoyer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trash Modal */}
      <AnimatePresence>
        {showReportModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
          >
            <button onClick={() => setShowReportModal(false)} className="absolute top-6 right-6 text-white/60">
              <X size={28} />
            </button>
            <div className="w-full max-w-sm">
              <h2 className="text-2xl font-serif italic text-white mb-6 text-center">Signaler ce contenu</h2>
              <div className="space-y-3 mb-6">
                {['Contenu inapproprié', 'Droits d\'auteur', 'Qualité technique', 'Autre'].map(reason => (
                  <button 
                    key={reason}
                    className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm text-left hover:bg-white/10 transition-all"
                    onClick={() => {
                      alert('Merci pour votre signalement.');
                      setShowReportModal(false);
                    }}
                  >
                    {reason}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trash Modal */}
      <AnimatePresence>
        {showTrash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl z-50 p-6 pt-16"
          >
            <button onClick={() => setShowTrash(false)} className="absolute top-6 right-6 text-white/60">
              <X size={28} />
            </button>
            <h2 className="text-xl font-serif italic text-white mb-6">Films dislikés (5 derniers)</h2>
            <div className="space-y-3">
              {dislikedTrash.map(film => (
                <div key={film.id} className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div>
                    <p className="text-white font-bold">{film.title}</p>
                    <p className="text-white/50 text-xs">{film.director}</p>
                  </div>
                  <button 
                    onClick={() => restoreFromTrash(film)}
                    className="px-4 py-2 bg-accent-ia text-white rounded-lg text-xs font-bold"
                  >
                    Restaurer
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jury;
