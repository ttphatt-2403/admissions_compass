import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Sparkles, MessageCircle, Zap } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Xin chào! 👋 Tôi là trợ lý AI của hệ thống tư vấn tuyển sinh. Tôi có thể giúp bạn tìm hiểu về các trường đại học, ngành học, và lời khuyên tuyển sinh. Bạn cần hỗ trợ gì?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { 
      role: 'user', 
      content: input, 
      timestamp: new Date() 
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Call Vercel API instead of direct Gemini API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Unknown error');
      }

      // Simulate typing delay for better UX
      setTimeout(() => {
        const assistantMessage: Message = { 
          role: 'assistant', 
          content: data.response, 
          timestamp: new Date(),
          isTyping: false
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 500);

    } catch (error) {
      console.error('Error calling chat API:', error);
      setTimeout(() => {
        const errorMessage: Message = {
          role: 'assistant',
          content: 'Xin lỗi, có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau. 😔',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header với animation */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden mb-6 transform hover:scale-[1.02] transition-all duration-300">
          <div className="relative p-6 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 -translate-y-12 animate-pulse animation-delay-1000"></div>
              <div className="absolute bottom-0 left-1/2 w-20 h-20 bg-white rounded-full translate-x-8 translate-y-8 animate-pulse animation-delay-2000"></div>
            </div>
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-ping"></div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <Sparkles className="w-6 h-6 animate-spin" />
                  Trợ lý AI Tư vấn Tuyển sinh
                </h1>
                <p className="text-blue-100 mt-1 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Hỏi tôi về các trường đại học, ngành học, và lời khuyên tuyển sinh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Messages Area */}
          <div className="h-[600px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-transparent to-blue-50/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-4 animate-fade-in ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {message.role === 'assistant' && (
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                )}
                
                <div className={`max-w-lg ${message.role === 'user' ? 'order-first' : ''}`}>
                  <div
                    className={`px-6 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                  
                  <div className={`text-xs text-gray-500 mt-2 px-2 ${
                    message.role === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    {message.timestamp.toLocaleTimeString('vi-VN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
                
                {message.role === 'user' && (
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg animate-float animation-delay-500">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Animation */}
            {isTyping && (
              <div className="flex gap-4 justify-start animate-fade-in">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="bg-white px-6 py-4 rounded-2xl rounded-bl-md shadow-lg border border-gray-100">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-100"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
                    </div>
                    <span className="text-gray-500 ml-2">AI đang suy nghĩ...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white/50 backdrop-blur-sm border-t border-gray-100">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập câu hỏi của bạn... 💬"
                  className="w-full p-4 pr-12 border-2 border-gray-200 rounded-2xl resize-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  rows={2}
                  disabled={isLoading}
                />
                <div className="absolute right-3 top-4 text-gray-400">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim() || isTyping}
                className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 font-semibold"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Gửi</span>
              </button>
            </div>
            
            <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>AI sẵn sàng hỗ trợ bạn 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;