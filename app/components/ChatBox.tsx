"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Helper function to clean AI responses
const cleanAIResponse = (text: string): string => {
  // Remove the pattern 【6:1†toto.json】 and similar patterns
  return text.replace(/【\d+:\d+†[^】]+】/g, '');
};

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: number;
};

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isPlaceholderFading, setIsPlaceholderFading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [chatBoxClass, setChatBoxClass] = useState("");
  
  // Récupérer les IDs depuis les variables d'environnement
  const vectorStoreId = process.env.NEXT_PUBLIC_VECTOR_STORE_ID || "";
  const assistantId = process.env.NEXT_PUBLIC_ASSISTANT_ID || "";
  const apiUrl = process.env.NEXT_PUBLIC_EDGEFCT_URL || "";

  // Suggestions de questions spécifiques au CV en français et en anglais
  const placeholderQuestions = {
    'fr': [
      "Quelles sont ses expériences ?",
      "Quelles sont ses compétences ?",
      "Liste moi ses projets personnels ?",
      "Quelle est sa formation académique ?",
      "Comment puis-je le contacter ?",
      "Quelles langues parle-t'il ?"
    ],
    'en': [
      "What professional experience Antoine has?",
      "What are his technical skills?",
      "Can you tell me about his personal projects?",
      "What is his educational background?",
      "How can I contact him?",
      "What languages does he speak?"
    ]
  };

  // Listen to language changes in the main page
  useEffect(() => {
    const checkLanguage = () => {
      // Look for language toggle button text
      const languageToggleButton = document.querySelector('button span[role="img"][aria-label="French Flag"], button span[role="img"][aria-label="English Flag"]');
      if (languageToggleButton) {
        const isEnglish = languageToggleButton.getAttribute('aria-label') === 'French Flag';
        setLanguage(isEnglish ? 'en' : 'fr');
      }
    };

    // Initial check
    checkLanguage();

    // Set up a MutationObserver to detect when the language toggle button changes
    const observer = new MutationObserver(checkLanguage);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true,
      characterData: false
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Rotate placeholder questions with animation
  useEffect(() => {
    if (messages.length > 0) return; // Don't animate if there are messages
    
    const animationInterval = setInterval(() => {
      // Start fade out
      setIsPlaceholderFading(true);
      
      // After fade out, change placeholder and start fade in
      setTimeout(() => {
        setCurrentPlaceholderIndex((prevIndex) => 
          (prevIndex + 1) % placeholderQuestions[language].length
        );
        setIsPlaceholderFading(false);
      }, 800); // Duration of fade out animation
      
    }, 5000);
    
    return () => clearInterval(animationInterval);
  }, [language, messages.length]);

  useEffect(() => {
    // Récupérer le threadId du localStorage s'il existe
    const savedThreadId = localStorage.getItem('chatThreadId');
    if (savedThreadId) {
      setThreadId(savedThreadId);
    }
    
    return () => {
      // Nettoyer les références au thread lorsque le composant est démonté
      localStorage.removeItem('chatThreadId');
    };
  }, []);

  // Save threadId to localStorage whenever it changes
  useEffect(() => {
    if (threadId) {
      localStorage.setItem('chatThreadId', threadId);
    } else {
      localStorage.removeItem('chatThreadId');
    }
  }, [threadId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChatBox = () => {
    if (isOpen) {
      // Animation de fermeture
      setIsAnimating(true);
      setChatBoxClass("scale-95 opacity-0 transition-all duration-300");
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      // Ouvrir directement et animer l'apparition
      setIsOpen(true);
      setIsAnimating(true);
      // Commencer petite et invisible
      setChatBoxClass("scale-95 opacity-0");
      
      // Après un court délai pour permettre le rendu initial
      setTimeout(() => {
        // Grandir et devenir visible
        setChatBoxClass("scale-100 opacity-100 transition-all duration-300");
      }, 10);
      
      // Fin de l'animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  };

  // Appeler l'Edge Function avec la requête de l'utilisateur
  const callOpenAIEdgeFunction = async (userQuery: string) => {
    try {  
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `$\nQuestion du client: ${userQuery}`,
          vector_store_id: vectorStoreId,
          assistant_id: assistantId,
          thread_id: threadId
        })
      });
      
      if (!response.ok) {
        throw new Error(`Erreur Edge: ${response.status}`);
      }
      
      // La réponse est maintenant un objet JSON contenant la réponse et éventuellement un nouveau thread_id
      const responseData = await response.json();
      
      // Si un nouveau thread_id a été créé, le stocker
      if (responseData.thread_id) {
        setThreadId(responseData.thread_id);
      }
      
      return cleanAIResponse(responseData.reply);
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API:", error);
      return language === 'fr' ? 
        "Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer plus tard." : 
        "Sorry, I couldn't process your request. Please try again later.";
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentMessage.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: currentMessage,
      sender: 'user',
      timestamp: Date.now()
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setCurrentMessage("");
    setIsLoading(true);
    
    try {
      // Appeler l'API Edge Function
      const aiResponse = await callOpenAIEdgeFunction(currentMessage);
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: aiResponse,
        sender: 'assistant',
        timestamp: Date.now()
      };
      
      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      // En cas d'erreur, ajouter un message d'erreur
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: language === 'fr' ? 
          "Désolé, une erreur s'est produite. Veuillez réessayer." : 
          "Sorry, an error occurred. Please try again.",
        sender: 'assistant',
        timestamp: Date.now()
      };
      
      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    // Réinitialiser l'ID de thread dans le state et localStorage
    setThreadId(null);
    localStorage.removeItem('chatThreadId');
    // Reset messages to empty array instead of having a welcome message
    setMessages([]);
  };

  // Get the appropriate placeholder based on language and current index
  const getPlaceholder = () => {
    if (messages.length > 0) {
      return language === 'fr' ? "Tapez votre message..." : "Type your message...";
    } else {
      return placeholderQuestions[language][currentPlaceholderIndex];
    }
  };

  // Apply CSS class for placeholder animation
  const getPlaceholderClass = () => {
    if (messages.length > 0) return "";
    return isPlaceholderFading 
      ? "opacity-0 transform translate-y-2 transition-all duration-700" 
      : "opacity-100 transform -translate-y-2 transition-all duration-700";
  };

  // Determines if we should show the custom animated placeholder
  const shouldShowAnimatedPlaceholder = () => {
    // Show animated placeholder only when there are no messages
    return !messages.length && !currentMessage;
  };

  // Determines if we should show any placeholder (animated or static)
  const shouldShowPlaceholder = () => {
    // Always show some form of placeholder when input is empty
    return !currentMessage;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-full">
      {isOpen ? (
        <div 
          className={`w-[calc(100vw-2rem)] sm:w-96 h-[32rem] sm:h-[32rem] bg-slate-950 rounded-lg shadow-lg flex flex-col border border-zinc-700 ${chatBoxClass}`}
        >
          <div 
            className="flex justify-between items-center p-3"
          >
            <h2 className="text-lg font-semibold text-white flex items-center">
              <Image src="/chatbox_white.svg" alt="Chat" width={24} height={24} className="mr-2" />
              Helper
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={clearChat} 
                className="text-zinc-400 hover:text-white transition-colors"
                title={language === 'fr' ? "Nouvelle conversation" : "New conversation"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button onClick={toggleChatBox} className="text-zinc-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-slate-950">
            {messages.length === 0 && (
              <div className="h-full flex items-center justify-center">
                <p className="text-zinc-500 text-center">
                  {language === 'fr' ? 
                    "Comment puis-je vous aider ?" : 
                    "What can I help with?"}
                </p>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === 'user' 
                    ? 'ml-auto bg-zinc-700 text-white' 
                    : 'mr-auto bg-zinc-800/80 text-white'
                } rounded-lg py-2 px-4 max-w-[80%] shadow-md`}
              >
                {message.sender === 'user' ? (
                  <div>{message.content}</div>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                        h1: ({ node, ...props }) => <h1 className="text-xl font-bold mb-2" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-lg font-bold mb-2" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-md font-bold mb-2" {...props} />,
                        a: ({ node, ...props }) => <a className="text-blue-400 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                        code: ({ node, className, ...props }) => {
                          const match = /language-(\w+)/.exec(className || "");
                          const isCodeBlock = className?.includes("language-");
                          return isCodeBlock 
                            ? <code className="block bg-zinc-900 text-gray-100 p-2 rounded my-2 overflow-x-auto" {...props} />
                            : <code className="bg-zinc-900 text-gray-100 px-1 rounded" {...props} />;
                        },
                        pre: ({ node, ...props }) => <pre className="bg-zinc-900 text-gray-100 p-2 rounded my-2 overflow-x-auto" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-zinc-600 pl-4 italic my-2" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                        em: ({ node, ...props }) => <em className="italic" {...props} />
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto bg-zinc-800/80 text-white rounded-lg py-3 px-4 max-w-[80%] flex items-center shadow-md">
                <div className="flex items-center">
                  <div className="relative w-8 h-8">
                    <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-t-transparent border-zinc-400 rounded-full animate-spin"></div>
                    <div className="absolute top-1 left-1 right-1 bottom-1 border-2 border-l-transparent border-zinc-500 rounded-full animate-spin" style={{ animationDuration: '1s', animationDirection: 'reverse' }}></div>
                  </div>
                  <span className="ml-3 text-zinc-300 text-sm">{language === 'fr' ? 'Réflexion...' : 'Thinking...'}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-slate-950">
            <form onSubmit={sendMessage} className="flex items-center space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  ref={inputRef}
                  placeholder=""
                  className="w-full px-3 py-1.5 border border-zinc-700 rounded bg-zinc-800 text-white text-sm
                            focus:outline-none focus:ring-2 focus:ring-zinc-600"
                  value={currentMessage}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                {shouldShowPlaceholder() && (
                  <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-zinc-400 pointer-events-none ${
                    shouldShowAnimatedPlaceholder() ? getPlaceholderClass() : ""
                  }`}>
                    {getPlaceholder()}
                  </span>
                )}
              </div>
              <button 
                type="submit" 
                className={`p-1.5 bg-zinc-700 hover:bg-zinc-600 text-white rounded-full transition-all duration-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:rotate-90'}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={toggleChatBox} 
          className={`bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 ${isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
        >
          <Image src="/chatbox_white.svg" alt="Chat" width={24} height={24} />
        </button>
      )}
    </div>
  );
}
