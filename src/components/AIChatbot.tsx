// app/components/AIChatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Zap,
  Sparkles,
  Ticket,
  Plane,
  Calendar,
  HelpCircle,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
}

// এআই চ্যাটবট ডাটা
const faqResponses: Record<string, string> = {
  "hello": "হ্যালো! 👋 আমি FlyBD এর AI সহায়ক। আপনি কিভাবে সাহায্য পেতে চান?",
  "hi": "হাই! 👋 আমি আপনার সেবায় আছি। ফ্লাইট বুকিং, টিকেট বা যেকোনো প্রশ্নে সাহায্য করতে পারি।",
  "flight": "ফ্লাইট বুকিং করতে আপনি সার্চ বার ব্যবহার করতে পারেন। গন্তব্য, তারিখ এবং যাত্রী সংখ্যা দিন। ✈️",
  "ticket": "টিকেট বুকিং খুব সহজ! হোম পেজ থেকে ফ্লাইট সার্চ করুন এবং পেমেন্ট সম্পন্ন করুন।",
  "cancel": "টিকেট বাতিল করতে 'আমার বুকিং' পেজে গিয়ে বাতিল অপশন সিলেক্ট করুন। ২৪ ঘন্টার মধ্যে বিনামূল্যে বাতিল সুবিধা আছে।",
  "refund": "রিফান্ড সাধারণত ৫-৭ কার্যদিবসের মধ্যে আপনার অ্যাকাউন্টে ফেরত দেওয়া হয়।",
  "luggage": "আপনি ৭ কেজি হ্যান্ড লাগেজ এবং ২০ কেজি চেকড লাগেজ বিনামূল্যে নিতে পারবেন।",
  "payment": "আমরা বিকাশ, নগদ, রকেট, ক্রেডিট/ডেবিট কার্ড এবং ব্যাংক ট্রান্সফার গ্রহণ করি।",
  "offer": "বর্তমান অফার দেখতে 'অফারসমূহ' পেজটি দেখুন। ফ্লাইট বুকিংয়ে ২০% পর্যন্ত ছাড় পাচ্ছেন! 🎉",
  "help": "আমি এখানে আছি! আপনার কি সাহায্য দরকার?",
  "default": "আমি আপনার প্রশ্ন বুঝতে পারিনি। দয়া করে ভিন্নভাবে জিজ্ঞাসা করুন অথবা 'help' টাইপ করুন।"
};

const suggestedQuestions = [
  { text: "ফ্লাইট বুকিং কিভাবে করব?", icon: Plane },
  { text: "টিকেট বাতিলের নিয়ম কি?", icon: Ticket },
  { text: "বর্তমান অফার কী কী?", icon: Zap },
  { text: "পেমেন্ট অপশনগুলো কি?", icon: Calendar },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "হ্যালো! 👋 আমি FlyBD এর AI সহায়ক। আপনার যেকোনো প্রশ্নের উত্তর দিতে পারি। কিভাবে সাহায্য করতে পারি?",
      sender: "bot",
      timestamp: new Date(),
      suggestions: suggestedQuestions.map(q => q.text)
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // কিওয়ার্ড ম্যাচিং
    if (lowerMessage.includes("hello") || lowerMessage.includes("হ্যালো") || lowerMessage.includes("হাই")) {
      return faqResponses["hello"];
    } else if (lowerMessage.includes("flight") || lowerMessage.includes("ফ্লাইট") || lowerMessage.includes("বুকিং")) {
      return faqResponses["flight"];
    } else if (lowerMessage.includes("ticket") || lowerMessage.includes("টিকেট")) {
      return faqResponses["ticket"];
    } else if (lowerMessage.includes("cancel") || lowerMessage.includes("বাতিল")) {
      return faqResponses["cancel"];
    } else if (lowerMessage.includes("refund") || lowerMessage.includes("রিফান্ড")) {
      return faqResponses["refund"];
    } else if (lowerMessage.includes("luggage") || lowerMessage.includes("লাগেজ") || lowerMessage.includes("ব্যাগ")) {
      return faqResponses["luggage"];
    } else if (lowerMessage.includes("payment") || lowerMessage.includes("পেমেন্ট") || lowerMessage.includes("টাকা")) {
      return faqResponses["payment"];
    } else if (lowerMessage.includes("offer") || lowerMessage.includes("অফার") || lowerMessage.includes("ছাড়")) {
      return faqResponses["offer"];
    } else if (lowerMessage.includes("help") || lowerMessage.includes("সাহায্য")) {
      return faqResponses["help"];
    } else {
      return faqResponses["default"];
    }
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // ইউজারের মেসেজ যোগ করুন
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // AI রেসপন্স সিমুলেশন
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
        suggestions: suggestedQuestions.map(q => q.text)
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setFeedbackGiven(null);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFeedback = (messageId: string, isHelpful: boolean) => {
    setFeedbackGiven(messageId);
    // এখানে ফিডব্যাক API কল করা যেতে পারে
    console.log(`Message ${messageId} was ${isHelpful ? "helpful" : "not helpful"}`);
  };

  return (
    <>
      {/* চ্যাট বাটন */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle size={24} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
      </motion.button>

      {/* চ্যাট উইন্ডো */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[400px] h-[550px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col"
          >
            {/* হেডার */}
            <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">FlyBD AI সহায়ক</h3>
                  <p className="text-white/60 text-[10px]">অনলাইন • ২৪/৭ সক্রিয়</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* মেসেজ এরিয়া */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/20">
              {messages.map((message, idx) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: message.sender === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                    <div className={`flex items-start gap-2 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user" 
                          ? "bg-indigo-500" 
                          : "bg-gradient-to-r from-indigo-500 to-purple-500"
                      }`}>
                        {message.sender === "user" ? <User size={12} /> : <Bot size={12} />}
                      </div>
                      <div className={`rounded-2xl px-3 py-2 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                          : "bg-white/10 text-white"
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <p className="text-[10px] text-white/40 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                    
                    {/* ফিডব্যাক বাটন (শুধু বট মেসেজের জন্য) */}
                    {message.sender === "bot" && feedbackGiven !== message.id && (
                      <div className="flex gap-2 mt-1 ml-9">
                        <button 
                          onClick={() => handleFeedback(message.id, true)}
                          className="p-1 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-white/5 transition"
                        >
                          <ThumbsUp size={12} />
                        </button>
                        <button 
                          onClick={() => handleFeedback(message.id, false)}
                          className="p-1 rounded-lg text-slate-500 hover:text-red-400 hover:bg-white/5 transition"
                        >
                          <ThumbsDown size={12} />
                        </button>
                      </div>
                    )}

                    {/* সাজেশন */}
                    {message.suggestions && message.suggestions.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2 ml-9">
                        {message.suggestions.map((suggestion, i) => (
                          <button
                            key={i}
                            onClick={() => handleSendMessage(suggestion)}
                            className="px-2 py-1 text-xs rounded-full bg-white/10 text-slate-300 hover:bg-white/20 transition"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* ইনপুট এরিয়া */}
            <div className="p-3 border-t border-white/10 bg-black/30">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="আপনার প্রশ্ন লিখুন..."
                  className="flex-1 px-4 py-2.5 bg-white/10 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 text-center mt-2">
                AI দ্বারা চালিত • আপনার প্রশ্নের উত্তর ২৪/৭
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}