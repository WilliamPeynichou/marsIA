import React from 'react';
import { useTranslation } from 'react-i18next';

const SubmissionForm = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-[40px] glass space-y-6 shadow-xl border border-white/40">
      <div className="space-y-2">
        <label className="text-[9px] uppercase tracking-[0.2em] text-earth-brown/50 ml-1 font-bold">
          {t('form.label_who')}
        </label>
        <input 
          type="text" 
          placeholder={t('form.placeholder_who')}
          className="w-full bg-white/40 border border-earth-brown/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent-ia/30 transition-all placeholder:text-earth-brown/30 text-earth-brown"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[9px] uppercase tracking-[0.2em] text-earth-brown/50 ml-1 font-bold">
          {t('form.label_email')}
        </label>
        <input 
          type="email" 
          placeholder={t('form.placeholder_email')}
          className="w-full bg-white/40 border border-earth-brown/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent-ia/30 transition-all placeholder:text-earth-brown/30 text-earth-brown"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[9px] uppercase tracking-[0.2em] text-earth-brown/50 ml-1 font-bold">
          {t('form.label_video')}
        </label>
        <input 
          type="text" 
          placeholder={t('form.placeholder_video')}
          className="w-full bg-white/40 border border-earth-brown/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent-ia/30 transition-all placeholder:text-earth-brown/30 text-earth-brown"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[9px] uppercase tracking-[0.2em] text-earth-brown/50 ml-1 font-bold">
          {t('form.label_tools')}
        </label>
        <textarea 
          placeholder={t('form.placeholder_tools')}
          rows="3"
          className="w-full bg-white/40 border border-earth-brown/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent-ia/30 transition-all resize-none placeholder:text-earth-brown/30 text-earth-brown"
        ></textarea>
      </div>

      <button className="w-full bg-accent-ia text-white font-bold py-5 rounded-2xl text-[11px] uppercase tracking-[0.2em] hover:bg-accent-ia/90 transition-all active:scale-[0.98] mt-4 shadow-md">
        {t('form.submit')}
      </button>
    </div>
  );
};

export default SubmissionForm;
