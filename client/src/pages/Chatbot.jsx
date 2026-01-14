import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Bonjour ! Je suis l\'assistant virtuel de marsIA. Je peux répondre à vos questions sur le festival, les critères de soumission ou le processus de vote. Comment puis-je vous aider ?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulation de réponse
    setTimeout(() => {
      const botResponse = generateResponse(userMessage.text);
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('date') || lowerText.includes('quand')) return "Le festival se déroulera du 13 au 15 Mars 2026 à Marseille.";
    if (lowerText.includes('prix') || lowerText.includes('récompense')) return "Il y a 4 prix principaux : le Grand Prix marsIA, le Prix de l'Innovation, le Prix du Public et le Prix du Court-Métrage.";
    if (lowerText.includes('soumettre') || lowerText.includes('participer')) return "Vous pouvez soumettre votre film via la page 'Soumettre'. Assurez-vous d'avoir un lien vidéo valide et de respecter les droits d'auteur.";
    if (lowerText.includes('ia') || lowerText.includes('intelligence')) return "Nous acceptons les films 100% générés par IA ainsi que les créations hybrides. La transparence sur les outils utilisés est primordiale.";
    return "Je ne suis pas sûr de comprendre. Vous pouvez consulter la FAQ ou me poser une autre question sur le festival.";
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl flex flex-col h-[70vh] glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-white/5 flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-accent-ia flex items-center justify-center shadow-lg shadow-accent-ia/30">
            <Bot className="text-white" size={20} />
          </div>
          <div>
            <h1 className="font-display font-bold text-foreground">Assistant marsIA</h1>
            <p className="text-[10px] uppercase tracking-widest text-green-500 font-bold flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              En ligne
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start space-x-3 ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.type === 'bot' ? 'bg-white/10 text-accent-ia' : 'bg-earth-brown text-white'
              }`}>
                {msg.type === 'bot' ? <Sparkles size={14} /> : <User size={14} />}
              </div>
              <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                msg.type === 'bot' 
                  ? 'bg-white/5 text-foreground rounded-tl-none border border-white/5' 
                  : 'bg-accent-ia text-white rounded-tr-none shadow-lg shadow-accent-ia/20'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2 ml-12"
            >
              <div className="w-2 h-2 bg-neutral-grey/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-neutral-grey/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-neutral-grey/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/5">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              className="w-full bg-white/10 border border-white/10 rounded-xl pl-4 pr-12 py-4 text-sm focus:outline-none focus:bg-white/20 transition-all placeholder:text-neutral-grey"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent-ia text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-ia/90 transition-all"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
