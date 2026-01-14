import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Upload, Check, FileText, Image, MessageSquare } from 'lucide-react';

const Submit = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [participation, setParticipation] = useState('solo');

  return (
    <div className="min-h-screen px-6 pt-8 pb-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif italic text-earth-brown">Soumettre un film</h1>
        <div className="w-16 h-[1px] bg-accent-ia/30 mx-auto mt-4" />
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step >= s ? 'bg-accent-ia text-white' : 'bg-earth-brown/10 text-earth-brown/40'
                }`}
              >
                {step > s ? <Check size={14} /> : s}
              </div>
              {s < 3 && <div className={`w-8 h-[2px] ${step > s ? 'bg-accent-ia' : 'bg-earth-brown/10'}`} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto"
      >
        {/* Step 1: Informations générales */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-earth-brown/60 mb-6">Informations Générales</h2>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Titre du film *</label>
              <input type="text" placeholder="Le titre de votre court-métrage" className="input-field" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Synopsis court *</label>
              <textarea placeholder="Décrivez votre film en quelques lignes..." rows={3} className="input-field resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Année *</label>
                <input type="number" placeholder="2026" className="input-field" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Pays *</label>
                <select className="input-field">
                  <option value="">Sélectionner...</option>
                  <option value="FR">France</option>
                  <option value="US">États-Unis</option>
                  <option value="UK">Royaume-Uni</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Langue du film *</label>
              <input type="text" placeholder="Français, Anglais..." className="input-field" />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Prix visés (Sélection multiple) *</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'grand-prix', label: 'Grand Prix marsIA' },
                  { id: 'innovation', label: 'Prix de l\'Innovation' },
                  { id: 'public', label: 'Prix du Public' },
                  { id: 'court', label: 'Prix du Court-Métrage (< 2min)' }
                ].map((prize) => (
                  <label key={prize.id} className="flex items-center space-x-3 p-3 rounded-xl border border-earth-brown/10 bg-white/5 cursor-pointer hover:bg-accent-ia/5 transition-colors">
                    <input type="checkbox" className="accent-accent-ia w-4 h-4" />
                    <span className="text-sm font-bold text-earth-brown">{prize.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Nature de la création IA *</label>
              <div className="flex space-x-4">
                <button 
                  type="button"
                  className="flex-1 py-3 rounded-xl text-[10px] uppercase font-bold bg-white/5 border border-white/10 text-neutral-grey hover:bg-accent-ia hover:text-white transition-all"
                >
                  100% IA
                </button>
                <button 
                  type="button"
                  className="flex-1 py-3 rounded-xl text-[10px] uppercase font-bold bg-white/5 border border-white/10 text-neutral-grey hover:bg-accent-ia hover:text-white transition-all"
                >
                  Hybride IA/Réel
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Participation *</label>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setParticipation('solo')}
                  className={`flex-1 py-3 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${
                    participation === 'solo' ? 'bg-accent-ia text-white' : 'bg-earth-brown/5 text-earth-brown/60'
                  }`}
                >
                  Solo
                </button>
                <button 
                  onClick={() => setParticipation('group')}
                  className={`flex-1 py-3 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${
                    participation === 'group' ? 'bg-accent-ia text-white' : 'bg-earth-brown/5 text-earth-brown/60'
                  }`}
                >
                  Groupe
                </button>
              </div>
            </div>

            {participation === 'group' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2"
              >
                <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Membres du groupe</label>
                <textarea placeholder="Nom, Prénom, Rôle (un par ligne)" rows={3} className="input-field resize-none" />
              </motion.div>
            )}

            <button onClick={() => setStep(2)} className="btn-primary w-full mt-8">
              Continuer
            </button>
          </div>
        )}

        {/* Step 2: Fiche Technique IA */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-earth-brown/60 mb-6">Fiche Technique IA</h2>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">IA pour le scénario *</label>
              <input type="text" placeholder="ChatGPT, Claude, Gemini..." className="input-field" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">IA pour images/vidéos *</label>
              <input type="text" placeholder="Midjourney, Runway, Sora..." className="input-field" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">IA pour le montage</label>
              <input type="text" placeholder="DaVinci, Premiere Pro avec IA..." className="input-field" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">IA pour le son/musique</label>
              <input type="text" placeholder="Suno, Udio, ElevenLabs..." className="input-field" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Autres outils IA</label>
              <textarea placeholder="Décrivez tout autre outil IA utilisé..." rows={2} className="input-field resize-none" />
            </div>

            <div className="flex space-x-4 mt-8">
              <button onClick={() => setStep(1)} className="btn-secondary flex-1">Retour</button>
              <button onClick={() => setStep(3)} className="btn-primary flex-1">Continuer</button>
            </div>
          </div>
        )}

        {/* Step 3: Médias & Validation */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-earth-brown/60 mb-6">Médias & Validation</h2>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Lien YouTube *</label>
              <input type="url" placeholder="https://youtube.com/watch?v=..." className="input-field" />
              <p className="text-[10px] text-earth-brown/40 mt-1">Format 16:9 horizontal, durée max 2 min</p>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Poster du film *</label>
              <div className="border-2 border-dashed border-earth-brown/10 rounded-2xl p-8 text-center hover:border-accent-ia/30 transition-colors cursor-pointer">
                <Upload size={32} className="mx-auto text-earth-brown/30 mb-2" />
                <p className="text-xs text-earth-brown/50">JPG, PNG, GIF (max 2Mo)</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Fichier SRT (S-T)</label>
                <div className="border border-dashed border-earth-brown/10 rounded-xl p-4 text-center hover:border-accent-ia/30 transition-colors cursor-pointer flex flex-col items-center">
                  <FileText size={20} className="text-earth-brown/30 mb-1" />
                  <span className="text-[8px] uppercase font-bold text-neutral-grey">Uploader .srt</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Galerie Photos</label>
                <div className="border border-dashed border-earth-brown/10 rounded-xl p-4 text-center hover:border-accent-ia/30 transition-colors cursor-pointer flex flex-col items-center">
                  <Image size={20} className="text-earth-brown/30 mb-1" />
                  <span className="text-[8px] uppercase font-bold text-neutral-grey">Uploader images</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Fichiers d'accompagnement</label>
              <div className="border border-dashed border-earth-brown/10 rounded-xl p-4 text-center hover:border-accent-ia/30 transition-colors cursor-pointer flex items-center justify-center space-x-2">
                <Upload size={16} className="text-earth-brown/30" />
                <span className="text-[9px] uppercase font-bold text-neutral-grey">Dossier de presse, PDF, etc.</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Conformité droits *</label>
              <textarea placeholder="Décrivez les droits (musique, images, voix...)" rows={2} className="input-field resize-none" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-earth-brown/50 font-bold">Référent légal *</label>
              <input type="text" placeholder="Nom du référent pour les droits" className="input-field" />
            </div>

            {/* Consents */}
            <div className="space-y-4 pt-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-accent-ia" />
                <span className="text-xs text-earth-brown/70">J'accepte le règlement du festival marsIA</span>
              </label>
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-accent-ia" />
                <span className="text-xs text-earth-brown/70">J'autorise l'utilisation promotionnelle d'extraits</span>
              </label>
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-accent-ia" />
                <span className="text-xs text-earth-brown/70">Je certifie détenir tous les droits nécessaires</span>
              </label>
            </div>

            <div className="flex space-x-4 mt-8">
              <button onClick={() => setStep(2)} className="btn-secondary flex-1">Retour</button>
              <button className="btn-primary flex-1">Soumettre</button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Submit;
