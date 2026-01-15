import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Upload, Check, FileText, Image as ImageIcon, MessageSquare, Plus, X } from 'lucide-react';

const Submit = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [creationNature, setCreationNature] = useState(null);
  const [collaborators, setCollaborators] = useState([]);
  const [hasSubtitles, setSubtitles] = useState(false);

  const addCollaborator = () => {
    setCollaborators([...collaborators, { civility: 'M', firstName: '', lastName: '', profession: '', email: '' }]);
  };

  const removeCollaborator = (index) => {
    setCollaborators(collaborators.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen px-6 pt-8 pb-24 bg-background">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif italic text-earth-brown">Soumettre un film</h1>
        <div className="w-16 h-[1px] bg-accent-ia/30 mx-auto mt-4" />
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4].map((s) => (
            <React.Fragment key={s}>
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step >= s ? 'bg-accent-ia text-white' : 'bg-earth-brown/10 text-earth-brown/40'
                }`}
              >
                {step > s ? <Check size={14} /> : s}
              </div>
              {s < 4 && <div className={`w-8 h-[2px] ${step > s ? 'bg-accent-ia' : 'bg-earth-brown/10'}`} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto"
      >
        {/* Step 1: Métadonnées du Film */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-earth-brown/60 mb-6 font-display">1. Métadonnées du Film</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="input-label">Titre original *</label>
                <input type="text" placeholder="Le titre original de l'œuvre" className="input-field" required />
              </div>
              <div className="space-y-1">
                <label className="input-label">Traduction anglaise *</label>
                <input type="text" placeholder="International English Title" className="input-field" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="input-label">Durée exacte (≤ 60s) *</label>
                <input type="text" placeholder="ex: 00:45" className="input-field" required />
                <p className="input-helper">Doit être inférieure ou égale à 1 minute.</p>
              </div>
              <div className="space-y-1">
                <label className="input-label">Langue principale *</label>
                <input type="text" placeholder="Français, Anglais..." className="input-field" required />
              </div>
            </div>

            <div className="space-y-1">
              <label className="input-label">Tags thématiques (Futurs souhaitables) *</label>
              <input type="text" placeholder="Écologie, Technologie, Espoir, Utopie..." className="input-field" required />
              <p className="input-helper">Séparez les tags par des virgules.</p>
            </div>

            <div className="space-y-1">
              <label className="input-label">Synopsis langue originale *</label>
              <textarea placeholder="Votre pitch en 300 caractères max..." maxLength={300} rows={3} className="input-field resize-none" required />
            </div>

            <div className="space-y-1">
              <label className="input-label">Synopsis anglais *</label>
              <textarea placeholder="Your pitch in english (max 300 chars)..." maxLength={300} rows={3} className="input-field resize-none" required />
            </div>

            <div className="space-y-3">
              <label className="input-label">Prix visés (Sélection multiple) *</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'grand-prix', label: 'Grand Prix marsIA' },
                  { id: 'innovation', label: 'Prix de l\'Innovation Visuelle' },
                  { id: 'public', label: 'Prix du Public' },
                  { id: 'court', label: 'Prix du Court-Métrage (< 60s)' }
                ].map((prize) => (
                  <label key={prize.id} className="flex items-center space-x-3 p-3 rounded-xl border border-earth-brown/10 bg-white/5 cursor-pointer hover:bg-accent-ia/5 transition-colors">
                    <input type="checkbox" className="accent-accent-ia w-4 h-4" />
                    <span className="text-sm font-bold text-earth-brown">{prize.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button onClick={() => setStep(2)} className="btn-primary w-full mt-8">
              Suivant : Usage de l'IA
            </button>
          </div>
        )}

        {/* Step 2: Déclaration d'Usage de l'IA */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-earth-brown/60 mb-6 font-display">2. Déclaration d'Usage de l'IA</h2>
            
            <div className="space-y-3 p-6 rounded-[2rem] bg-accent-ia/5 border-2 border-accent-ia/20 shadow-sm">
              <label className="text-[11px] uppercase tracking-[0.2em] text-accent-ia font-bold block mb-4">Classification de l'Œuvre *</label>
              <div className="flex space-x-4">
                <button 
                  type="button"
                  onClick={() => setCreationNature('100ia')}
                  className={`flex-1 py-4 rounded-2xl text-[11px] uppercase font-black tracking-widest transition-all shadow-md ${
                    creationNature === '100ia' 
                    ? 'bg-accent-ia text-white scale-[1.02] shadow-lg shadow-accent-ia/20' 
                    : 'bg-white text-accent-ia border-2 border-accent-ia/20 hover:bg-accent-ia/5'
                  }`}
                >
                  100% IA
                </button>
                <button 
                  type="button"
                  onClick={() => setCreationNature('hybrid')}
                  className={`flex-1 py-4 rounded-2xl text-[11px] uppercase font-black tracking-widest transition-all shadow-md ${
                    creationNature === 'hybrid' 
                    ? 'bg-accent-ia text-white scale-[1.02] shadow-lg shadow-accent-ia/20' 
                    : 'bg-white text-accent-ia border-2 border-accent-ia/20 hover:bg-accent-ia/5'
                  }`}
                >
                  Hybride
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="input-label">Stack Technologique *</label>
              <textarea 
                placeholder="Listez les outils utilisés (Script: ChatGPT, Image: Midjourney, Animation: Runway, Audio: Suno...)" 
                maxLength={500}
                rows={4} 
                className="input-field resize-none" 
                required 
              />
              <p className="input-helper">Max 500 caractères. Soyez le plus précis possible.</p>
            </div>

            <div className="space-y-1">
              <label className="input-label">Méthodologie Créative *</label>
              <textarea 
                placeholder="Décrivez comment vous avez collaboré avec l'IA pour créer cette œuvre..." 
                maxLength={500}
                rows={4} 
                className="input-field resize-none" 
                required 
              />
              <p className="input-helper">Décrivez le processus d'interaction humain/machine.</p>
            </div>

            <div className="flex space-x-4 mt-8">
              <button onClick={() => setStep(1)} className="btn-secondary flex-1">Retour</button>
              <button onClick={() => setStep(3)} className="btn-primary flex-1">Suivant : Médias</button>
            </div>
          </div>
        )}

        {/* Step 3: Livrables Multimédias & Accessibilité */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-earth-brown/60 mb-6 font-display">3. Médias & Accessibilité</h2>
            
            <div className="space-y-1">
              <label className="input-label">Lien YouTube source *</label>
              <div className="relative">
                <input type="url" placeholder="https://youtube.com/watch?v=..." className="input-field" required />
              </div>
              <p className="input-helper">Format Public ou Non-répertorié uniquement.</p>
            </div>

            <div className="space-y-4 p-6 rounded-[2rem] bg-white/60 border border-accent-ia/10 shadow-sm">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="accent-accent-ia w-5 h-5 rounded-lg" 
                  checked={hasSubtitles}
                  onChange={(e) => setSubtitles(e.target.checked)}
                />
                <span className="text-sm font-bold text-earth-brown group-hover:text-accent-ia transition-colors">Présence de voix ou textes nécessitant des sous-titres</span>
              </label>

              <AnimatePresence>
                {hasSubtitles && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 space-y-2 border-t border-earth-brown/5 mt-4"
                  >
                    <label className="input-label">Fichier source .srt *</label>
                    <div className="border-2 border-dashed border-accent-ia/30 rounded-2xl p-6 text-center hover:bg-accent-ia/5 hover:border-accent-ia transition-all cursor-pointer flex flex-col items-center group">
                      <FileText size={28} className="text-accent-ia mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] uppercase font-black text-accent-ia tracking-widest">Uploader le fichier .srt</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-1">
              <label className="input-label">Vignette Officielle (16:9) *</label>
              <div className="border-2 border-dashed border-earth-brown/10 rounded-[2rem] p-10 text-center hover:border-accent-ia/30 hover:bg-white/50 transition-all cursor-pointer group relative overflow-hidden bg-white/30">
                <Upload size={32} className="mx-auto text-earth-brown/20 mb-3 group-hover:text-accent-ia group-hover:-translate-y-1 transition-all" />
                <p className="text-xs font-bold text-earth-brown/40 uppercase tracking-widest">Haute résolution recommandée</p>
                <p className="input-helper mt-2 italic">Format paysage uniquement.</p>
              </div>
            </div>

            <div className="space-y-1">
              <label className="input-label">Galerie Médias (Jusqu'à 3 stills)</label>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video border-2 border-dashed border-earth-brown/10 rounded-2xl flex items-center justify-center hover:bg-white hover:border-accent-ia/20 cursor-pointer transition-all group">
                    <ImageIcon size={24} className="text-earth-brown/10 group-hover:text-accent-ia/30 transition-colors" />
                  </div>
                ))}
              </div>
              <p className="input-helper">Images fixes extraites du film pour le catalogue.</p>
            </div>

            <div className="flex space-x-4 mt-8">
              <button onClick={() => setStep(2)} className="btn-secondary flex-1">Retour</button>
              <button onClick={() => setStep(4)} className="btn-primary flex-1">Suivant : Équipe</button>
            </div>
          </div>
        )}

        {/* Step 4: Équipe & Validation */}
        {step === 4 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-earth-brown/60 mb-6 font-display">4. Composition de l'Équipe</h2>
              
              <div className="space-y-4">
                <AnimatePresence>
                  {collaborators.map((collab, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-6 rounded-3xl bg-white/80 border border-accent-ia/10 space-y-4 relative group shadow-sm hover:shadow-md transition-all"
                    >
                      <button 
                        onClick={() => removeCollaborator(index)}
                        className="absolute -top-2 -right-2 p-2 bg-red-500 text-white rounded-full transition-all shadow-lg hover:scale-110 active:scale-90"
                      >
                        <X size={14} />
                      </button>

                      <div className="grid grid-cols-3 gap-2">
                        <select className="input-field col-span-1">
                          <option value="M">M.</option>
                          <option value="Mme">Mme</option>
                          <option value="Iel">Iel</option>
                        </select>
                        <input type="text" placeholder="Prénom" className="input-field col-span-1" />
                        <input type="text" placeholder="Nom" className="input-field col-span-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input type="text" placeholder="Profession" className="input-field" />
                        <input type="email" placeholder="Email" className="input-field" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <button 
                  onClick={addCollaborator}
                  className="w-full py-6 rounded-3xl border-2 border-dashed border-earth-brown/10 text-earth-brown/40 hover:border-accent-ia/30 hover:text-accent-ia hover:bg-accent-ia/5 transition-all flex flex-col items-center justify-center space-y-2 group"
                >
                  <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ajouter un membre à l'équipe</span>
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-earth-brown/10">
              <h2 className="text-sm font-bold uppercase tracking-widest text-earth-brown/60 mb-4 font-display">Engagements & Validation</h2>
              
              <div className="space-y-4">
                <label className="flex items-start space-x-4 cursor-pointer group p-4 rounded-2xl border border-transparent hover:bg-white/40 hover:border-earth-brown/5 transition-all">
                  <input type="checkbox" className="mt-1 accent-accent-ia w-5 h-5 rounded-lg shrink-0" required />
                  <span className="text-xs text-earth-brown font-medium group-hover:text-black transition-colors leading-relaxed italic">
                    Je certifie que les informations fournies sont exactes et que je détiens l'intégralité des droits sur l'œuvre soumise (musique, images, voix, scripts IA).*
                  </span>
                </label>
                <label className="flex items-start space-x-4 cursor-pointer group p-4 rounded-2xl border border-transparent hover:bg-white/40 hover:border-earth-brown/5 transition-all">
                  <input type="checkbox" className="mt-1 accent-accent-ia w-5 h-5 rounded-lg shrink-0" required />
                  <span className="text-xs text-earth-brown font-medium group-hover:text-black transition-colors leading-relaxed italic">
                    J'autorise le festival marsIA à utiliser des extraits de mon film à des fins promotionnelles et de diffusion publique.*
                  </span>
                </label>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <button onClick={() => setStep(3)} className="btn-secondary flex-1 py-4">Retour</button>
              <button 
                onClick={() => {
                  alert('Félicitations ! Votre film a été soumis avec succès.');
                  window.location.href = '/profile';
                }}
                className="btn-primary flex-[2] py-4 shadow-lg shadow-accent-ia/20"
              >
                Soumettre mon film
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Submit;
