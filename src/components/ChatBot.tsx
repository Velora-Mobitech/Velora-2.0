import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  RotateCcw,
  ChevronDown,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  getGeminiResponse,
  isGeminiConfigured,
  getVeloraQuickResponse,
} from "../lib/gemini";
import { testGeminiConnection } from "../lib/test-gemini";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Velora's AI Mobility Intelligence Assistant. I can help answer questions about our 5 Intelligence Modules, data reconciliation across your existing ETMS, the Failure Economics framework, or how to get a Mobility Efficiency Diagnostic. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const [isAIEnabled] = useState(isGeminiConfigured());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "What is Velora Mobility Intelligence?",
    "What is the Failure Economics framework?",
    "Does Velora replace our existing ETMS?",
    "Explain the 5 Intelligence Modules",
    "How do I get a Mobility Diagnostic?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollButton(!isNearBottom && messages.length > 3);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Test Gemini connection on component mount (development only)
  useEffect(() => {
    if (import.meta.env.DEV && isAIEnabled) {
      console.log("🧪 Testing Gemini AI connection...");
      testGeminiConnection().then((success) => {
        if (success) {
          console.log("✅ Gemini AI is ready!");
        } else {
          console.log(
            "❌ Gemini AI connection failed - using fallback responses"
          );
        }
      });
    }
  }, [isAIEnabled]);

  // AI-powered response handler with fallbacks
  const getResponse = async (input: string): Promise<string> => {
    // First check for quick Velora-specific responses
    const quickResponse = getVeloraQuickResponse(input);
    if (quickResponse) {
      return quickResponse;
    }

    // Handle diagnostic calculator requests with scroll functionality
    if (
      input.toLowerCase().includes("calculator") ||
      input.toLowerCase().includes("calculate") ||
      input.toLowerCase().includes("show me the pricing calculator") ||
      input.toLowerCase().includes("estimate my cost") ||
      input.toLowerCase().includes("savings")
    ) {
      setTimeout(() => {
        const calculatorElement = document.getElementById("calculator");
        if (calculatorElement) {
          calculatorElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);

      return "📊 **Mobility Opportunity Estimator**\n\nI'm scrolling you to our interactive Diagnostic Model below. You can:\n\n• Input monthly transport expenditure and employee counts\n• Model mathematical Identifiable Opportunity (corridor overlap, dead km)\n• Model realistic Implementable Opportunity (accounting for safety escorts & detour tolerances)\n• Request a verified telemetry diagnostic audit for your organization.";
    }

    // Use AI for more complex questions if configured
    if (isAIEnabled) {
      try {
        const aiResponse = await getGeminiResponse(input, conversationHistory);

        setConversationHistory((prev) => [
          ...prev.slice(-10),
          `User: ${input}`,
          `Assistant: ${aiResponse}`,
        ]);

        return aiResponse;
      } catch (error) {
        console.error("AI Response failed:", error);
      }
    }

    // Backup responses for when AI is not available
    const question = input.toLowerCase();

    // Greeting responses
    if (
      question.includes("hello") ||
      question.includes("hi") ||
      question.includes("hey") ||
      question.includes("good morning") ||
      question.includes("good afternoon") ||
      question.includes("good evening")
    ) {
      const greetings = [
        "Hello! 👋 Welcome to **Velora Mobitech** — Enterprise Mobility Intelligence. We turn fragmented transport, vendor and financial data into actionable intelligence. How can I help you today?",
        "Hi there! 🚗 Welcome to Velora. We sit as an independent analytical layer above existing ETMS tools to uncover cost leakage, capacity waste, and failure economics. What would you like to explore?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Company introduction
    if (
      question.includes("who are you") ||
      question.includes("what is velora") ||
      question.includes("about velora") ||
      question.includes("company") ||
      question.includes("tell me about")
    ) {
      return "📌 **About Velora — Enterprise Mobility Intelligence**\n\nVelora is an independent, vendor-neutral intelligence and orchestration layer designed specifically for corporate shift transport operations.\n\nKey Principles:\n• **Data Harmonization**: Integrates ETMS logs, raw GPS telematics, vendor invoices, contracts, and ERP ledgers.\n• **Failure Economics**: Measures the true composite cost of vendor failure (spot-ride markups, shift delays, and disputes).\n• **Explainability Standard**: Every recommendation is backed by observed evidence, explicit assumptions, and constraints.\n• **Pre-Validation**: Currently partnering with enterprise transport heads as Design Partners.";
    }

    // Help and capabilities
    if (question.includes("help") || question.includes("what can you do")) {
      return "🤖 **How I Can Assist You:**\n\n• **Specialized Intelligence Modules**: Cost, Utilization, Vendor, Failure, and Sustainability\n• **Failure Economics**: Calculation of Contract Tariff + Compound Failure Burden\n• **ETMS Integration**: How we work with MoveInSync, Safetrax, Routematic, Whistle, and SAP\n• **Mobility Diagnostic**: How to participate in our NDA-protected design partner audit\n• **Opportunity Framework**: Explaining Identifiable vs. Implementable savings\n\nAsk me any operational or financial question about corporate mobility!";
    }

    // How it works
    if (
      question.includes("how does it work") ||
      question.includes("how it works") ||
      question.includes("process") ||
      question.includes("sequence")
    ) {
      return "🔄 **The Velora Operational Sequence**:\n\n1. **CONNECT**: Ingest and harmonize data across ETMS, GPS providers, vendor invoices, and ERP ledgers without replacing existing systems.\n2. **DIAGNOSE**: Isolate billing discrepancies, dead kilometres, low-occupancy corridors, and chronic SLA breach hotspots.\n3. **DECIDE**: Deliver ranked, constraint-aware operational recommendations with auditable evidence.\n4. **EXECUTE** *(Future Vision)*: Programmatic capacity clearing across multi-provider liquidity networks.";
    }

    // Contact and team information
    if (
      question.includes("contact") ||
      question.includes("team") ||
      question.includes("founder") ||
      question.includes("ceo") ||
      question.includes("cto")
    ) {
      return "👥 **Velora Leadership & Research Team**\n\n• **Krishna Vamsi Veerisetti** - CEO & Founder\n  Enterprise validation & mobility economics | kv@veloramobitech.systems | +91 8688505081\n\n• **Vijaya Balaji Tatta** - CTO & Co-Founder\n  Telemetry reconciliation & spatial engines | tvb@veloramobitech.systems | +91 9347767825\n\nClick **Get a Mobility Diagnostic** in the top navigation to connect with our team directly.";
    }

    if (question.includes("thank") || question.includes("thanks")) {
      return "You're welcome! Feel free to reach out if you'd like to explore how a Mobility Efficiency Diagnostic can identify cost leakage in your corporate fleet.";
    }

    return "Velora helps enterprises discover where corporate mobility is losing money. Ask me about our 5 Intelligence Engines, Failure Economics, or how to get a Mobility Diagnostic.";
  };

  const handleSendMessage = async (customMessage?: string) => {
    const messageText = customMessage || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setShowQuickQuestions(false);

    try {
      // Get AI-powered response
      const responseText = await getResponse(messageText);

      // Simulate typing delay for better UX
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          isUser: false,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, 800 + Math.random() * 800);
    } catch (error) {
      console.error("Error getting response:", error);
      setTimeout(() => {
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'm having a temporary connection issue, but I can still help explain Velora's intelligence engines, Failure Economics, or how to get a Mobility Diagnostic. What would you like to explore?",
          isUser: false,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorResponse]);
        setIsTyping(false);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        text: "Hello! I'm Velora's AI assistant powered by advanced AI. I can help you with information about our B2B transport models, pricing, features, or answer any general questions you might have. How can I assist you today?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    setConversationHistory([]);
    setShowQuickQuestions(true);
  };

  return (
    <div>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={() => {
                console.log("Opening chat");
                setIsOpen(true);
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden group"
              size="icon"
              type="button"
              aria-label="Open chat assistant"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <MessageCircle className="w-7 h-7 relative z-10" />
              </motion.div>

              <motion.div
                className="absolute top-2 right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-3 h-3 text-white/80" />
              </motion.div>
            </Button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            height: isMinimized ? "64px" : "450px", // here
          }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 w-96 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          style={{
            background: "hsl(var(--background) / 0.95)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Fixed Header */}
          <div className="flex items-center justify-between p-2 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden flex-shrink-0 sticky top-0 z-20 rounded-t-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />

            <div className="flex items-center gap-2 relative z-10">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center"
              >
                <Bot className="w-3 h-3" />
              </motion.div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-xs">
                    Velora Assistant
                  </span>
                  {isAIEnabled && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center"
                    >
                      <Zap className="w-3 h-3 text-yellow-400" />
                    </motion.div>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[10px] opacity-90">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span>{isAIEnabled ? "AI-Powered" : "Online"}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 relative z-10">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearChat}
                  className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20 rounded-lg"
                  title="Clear Chat"
                >
                  <RotateCcw className="w-3 h-3" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20 rounded-lg"
                  title={isMinimized ? "Expand" : "Minimize"}
                >
                  <motion.div
                    animate={{ rotate: isMinimized ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Minimize2 className="w-3 h-3" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0 text-primary-foreground hover:bg-red-500/20 hover:text-red-100 rounded-lg transition-colors duration-200"
                  title="Close Chat"
                >
                  <X className="w-3 h-3" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col flex-1 relative"
            >
              {/* Messages Container with Custom Scrollbar */}
              <div className="flex-1 relative bg-background/50">
                <div
                  ref={scrollAreaRef}
                  className="h-96 overflow-y-auto p-4 chatbot-scrollbar"
                  onScroll={handleScroll}
                >
                  <div className="space-y-4 pr-2">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start gap-3 ${
                          message.isUser ? "justify-end" : "justify-start"
                        }`}
                      >
                        {!message.isUser && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md"
                          >
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </motion.div>
                        )}
                        <div
                          className={`max-w-[280px] rounded-2xl px-4 py-3 text-sm relative group ${
                            message.isUser
                              ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground ml-8 rounded-br-md"
                              : "bg-gradient-to-r from-muted to-muted/80 text-muted-foreground rounded-bl-md border border-border/50"
                          }`}
                        >
                          <div className="whitespace-pre-wrap leading-relaxed">
                            {message.text}
                          </div>
                          <div className="text-xs opacity-70 mt-2 flex items-center gap-1">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                            {message.isUser && (
                              <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                            )}
                          </div>
                        </div>
                        {message.isUser && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center flex-shrink-0 shadow-md"
                          >
                            <User className="w-4 h-4 text-secondary-foreground" />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}

                    {/* Quick Questions */}
                    {showQuickQuestions && messages.length === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        <p className="text-xs text-muted-foreground px-2 font-medium">
                          Quick questions:
                        </p>
                        {quickQuestions.map((question, index) => (
                          <motion.button
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSendMessage(question)}
                            className="w-full text-left px-4 py-3 text-sm bg-gradient-to-r from-secondary/30 to-secondary/20 hover:from-secondary/50 hover:to-secondary/30 rounded-xl transition-all duration-200 border border-border/30 hover:border-primary/30 hover:shadow-md"
                          >
                            <span className="text-primary mr-2">•</span>
                            {question}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="bg-gradient-to-r from-muted to-muted/80 text-muted-foreground rounded-2xl rounded-bl-md px-4 py-3 text-sm border border-border/50">
                          <div className="flex gap-1">
                            <motion.div
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: 0,
                              }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: 0.2,
                              }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: 0.4,
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Scroll to Bottom Button */}
                {showScrollButton && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute bottom-4 right-4 z-10"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={scrollToBottom}
                      className="w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Fixed Input Area */}
              <div className="p-4 border-t border-border/50 bg-background/90 backdrop-blur-sm flex-shrink-0 sticky bottom-0 z-20 rounded-b-2xl">
                <div className="flex gap-3 items-end">
                  <div className="flex-1 relative">
                    <Input
                      id="chatbot-input"
                      name="chatbot-input"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about Velora..."
                      className="pr-12 py-3 rounded-xl border-border/50 focus:border-primary/50 bg-background/50 backdrop-blur-sm transition-all duration-200"
                      disabled={isTyping}
                      maxLength={500}
                      aria-label="Chat message input"
                    />
                    {inputValue && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <span className="text-xs text-muted-foreground">
                          {inputValue.length}/500
                        </span>
                      </motion.div>
                    )}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleSendMessage()}
                      size="sm"
                      disabled={!inputValue.trim() || isTyping}
                      className="h-11 w-11 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:scale-95"
                    >
                      {isTyping ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Bot className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </Button>
                  </motion.div>
                </div>

                {/* Input help text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inputValue ? 0 : 1 }}
                  className="mt-2 text-xs text-muted-foreground text-center"
                >
                  Press Enter to send • Shift+Enter for new line
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ChatBot;
