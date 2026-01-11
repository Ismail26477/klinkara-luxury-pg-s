import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello! 👋 Welcome to Klinkara Luxury PG. I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickQuestions = [
    "What are the room types available?",
    "What's the monthly rent?",
    "What amenities do you offer?",
    "How do I book a visit?",
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { type: "user", content: message }]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      let response = "Thank you for your query! Our team will get back to you shortly. For immediate assistance, please call us at +91 98765 43210.";
      
      if (message.toLowerCase().includes("room")) {
        response = "We offer Single (₹18,000/month), Double (₹12,000/month), and Triple sharing (₹8,500/month) rooms. All rooms come with AC, attached bathroom, and premium amenities!";
      } else if (message.toLowerCase().includes("rent") || message.toLowerCase().includes("price")) {
        response = "Our pricing starts from ₹8,500/month for triple sharing. Double sharing is ₹12,000/month and Single rooms are ₹18,000/month. All inclusive of amenities!";
      } else if (message.toLowerCase().includes("amenities")) {
        response = "We provide high-speed Wi-Fi, AC, 24/7 security, daily housekeeping, power backup, parking, washing machine, hot water, and delicious meals!";
      } else if (message.toLowerCase().includes("visit") || message.toLowerCase().includes("book")) {
        response = "You can schedule a site visit by clicking the 'Schedule a Visit' button on our homepage or scrolling to the Site Visit section. We're open 9 AM - 8 PM!";
      }

      setMessages((prev) => [...prev, { type: "bot", content: response }]);
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent("Hi! I'm interested in Klinkara Luxury PG. Please share more details.");
  const whatsappLink = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating Book Now Button */}
      <motion.a
        href="#booking"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="btn-luxury py-4 px-3 rounded-l-xl rounded-r-none shadow-elevated writing-mode-vertical">
          <span className="text-sm font-bold tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            BOOK NOW
          </span>
        </div>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-24 right-6 z-40"
      >
        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </motion.a>

      {/* AI Assistant Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-40"
      >
        <div className="w-14 h-14 rounded-full btn-luxury flex items-center justify-center shadow-gold hover:shadow-[0_15px_50px_-10px_hsla(45,43%,59%,0.5)] hover:scale-110 transition-all duration-300">
          <Bot className="w-7 h-7" />
        </div>
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-500 animate-pulse" />
      </motion.button>

      {/* AI Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)]"
          >
            <div className="luxury-card-elevated overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Klinkara AI Assistant</h4>
                    <p className="text-xs text-white/60">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/30">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.type === "user"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-card shadow-soft rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="p-3 border-t border-border bg-card/50">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSendMessage(q)}
                      className="px-3 py-1.5 text-xs bg-secondary rounded-full whitespace-nowrap hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-card">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-secondary/50 border-0 rounded-full"
                  />
                  <Button type="submit" variant="luxury" size="icon" className="rounded-full">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Call Button */}
      <motion.a
        href="tel:+919876543210"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-6 left-6 z-40 lg:hidden"
      >
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <Phone className="w-6 h-6 text-gold" />
        </div>
      </motion.a>
    </>
  );
};

export default FloatingButtons;
