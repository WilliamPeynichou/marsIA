const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="text-3xl font-display font-extrabold tracking-tighter mb-4">
            MARSAI<span className="text-white/40">.</span>
          </h2>
          <p className="text-white/40 max-w-sm text-sm">
            Le festival international de courts-métrages générés par IA. Imaginez des futurs souhaitables.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-white/60 transition-colors">Accueil</a></li>
            <li><a href="#" className="hover:text-white/60 transition-colors">Règlement</a></li>
            <li><a href="#" className="hover:text-white/60 transition-colors">Partenaires</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">Contact</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="mailto:hi@marsai.com" className="hover:text-white/60 transition-colors">hi@marsai.com</a></li>
            <li><a href="#" className="hover:text-white/60 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white/60 transition-colors">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-[10px] uppercase tracking-widest font-bold opacity-30">
        <p>© 2026 MARSAI STUDIO. TOUS DROITS RÉSERVÉS.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <img src="/plateforme-logo.png" alt="La Plateforme" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          <img src="/mff-logo.png" alt="Mobile Film Festival" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
