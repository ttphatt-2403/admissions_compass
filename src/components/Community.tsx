import { useState, useEffect, useRef } from "react";
import { Send, User as UserIcon, Circle, MessageSquare, Heart, Link, Image, Smile, Gift, ChevronDown } from "lucide-react";

interface ChatMessage {
    id: number;
    author: string;
    content: string;
    timestamp: Date;
    likes?: number;
}

interface OnlineUser {
    name: string;
    online: boolean;
}

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const getAvatarColor = (name: string) => {
    const colors = [
        'bg-blue-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-green-500',
        'bg-red-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-cyan-500',
    ];
    return colors[name.length % colors.length];
};

const Community = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([{
        id: 1,
        author: 'Hệ thống',
        content: 'Chào mừng bạn đến với cộng đồng! Hãy bắt đầu trò chuyện.',
        timestamp: new Date(),
    }]);
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("Bạn");
    const [users, setUsers] = useState<OnlineUser[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const shouldAutoScrollRef = useRef(true);
    const [isTyping, setIsTyping] = useState(false);
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);


    useEffect(() => {
        // ask for username once
        let name = localStorage.getItem('chatName');
        if (!name) {
            name = prompt('Nhập tên của bạn để tham gia cộng đồng:', '') || 'Bạn';
            localStorage.setItem('chatName', name);
        }
        setUsername(name);

        // populate with some fake online users; in a real app this would come from server
        const sample = [
            "Thuy Van",
            "Kai",
            "ngocngo",
            "TH1",
            "CR10",
            "baoduong324",
            "Carwyn0305",
            "Quankun",
            "Thảo1124",
            "phuongnt",
        ];
        setUsers(sample.map((n) => ({ name: n, online: true })));
    }, []);

    const sendMessage = () => {
        if (!input.trim()) return;
        const newMessage: ChatMessage = {
            id: Date.now(),
            author: username,
            content: input,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");
        // show tiny typing indicator and simulate a quick system reply for liveliness
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const reply: ChatMessage = {
                id: Date.now() + 1,
                author: 'Hệ thống',
                content: 'Hệ thống đã nhận tin nhắn của bạn. Thành viên khác sẽ trả lời sớm.',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, reply]);
        }, 800);
    };

    useEffect(() => {
        // scroll container to bottom when messages update without affecting page scroll
        if (!messagesContainerRef.current) return;
        if (shouldAutoScrollRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            setUnreadCount(0);
            setShowScrollBtn(false);
        } else {
            // user scrolled up: show unread badge
            setUnreadCount((c) => c + 1);
            setShowScrollBtn(true);
        }
    }, [messages]);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const handleContainerScroll = () => {
        if (!messagesContainerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 80;
        shouldAutoScrollRef.current = isAtBottom;
        setShowScrollBtn(!isAtBottom);
        if (isAtBottom) setUnreadCount(0);
    };

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            setShowScrollBtn(false);
            setUnreadCount(0);
            shouldAutoScrollRef.current = true;
        }
    };

    const toggleLike = (id: number) => {
        setMessages((prev) => prev.map(m => m.id === id ? { ...m, likes: (m.likes || 0) + 1 } : m));
    };

    return (
        // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col py-6">
        <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col p-6 overflow-hidden">
            <style>{` 
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .message-animate { animation: slideIn 0.3s ease-out; }

        /* custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
        }
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.2) rgba(255,255,255,0.05);
        }
      `}</style>

            {/* Header */}
            <div className="max-w-6xl mx-auto w-full mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-2xl rounded-2xl px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                <MessageSquare className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Cộng đồng trò chuyện</h1>
                                <p className="text-blue-100 text-sm mt-1">Kết nối với {users.length} thành viên đang trực tuyến</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-white">{messages.length}</div>
                            <p className="text-blue-100 text-sm">Tin nhắn</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat content container */}
            <div className="max-w-6xl mx-auto w-full flex flex-1 bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 relative">
                {/* Messages area */}
                <div className="flex-1 flex flex-col">
                    <div ref={messagesContainerRef} onScroll={handleContainerScroll} className="flex-1 overflow-y-auto p-8 space-y-5 bg-gray-900 custom-scrollbar">
                        {messages.map((msg, idx) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.author === username ? 'justify-end' : 'justify-start'} message-animate`}
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                <div className="flex gap-3 max-w-lg">
                                    {msg.author !== username && (
                                        <div className={`w-10 h-10 rounded-full ${getAvatarColor(msg.author)} flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-lg`}>
                                            {getInitials(msg.author)}
                                        </div>
                                    )}
                                    <div>
                                        <div className={`flex items-baseline gap-2 ${msg.author === username ? 'flex-row-reverse' : 'flex-row'}`}>
                                            <span className="text-xs font-semibold text-white">{msg.author === username ? 'Bạn' : msg.author}</span>
                                            <span className="text-xs text-white">{msg.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <div
                                            className={`mt-1 px-5 py-3 rounded-2xl shadow-lg break-words whitespace-pre-wrap ${msg.author === username
                                                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-none'
                                                    : msg.author === 'Hệ thống'
                                                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-none'
                                                        : 'bg-gray-700 text-white rounded-bl-none border border-orange-500'
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                        {msg.author === username && (
                                            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                                ✓✓ Đã có người xem
                                            </div>
                                        )}
                                    </div>
                                        {msg.author === username && (
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-lg`}>
                                            {getInitials('Bạn')}
                                        </div>
                                    )}
                                    {/* likes / reactions */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <button onClick={() => toggleLike(msg.id)} className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-1">
                                            <Heart className="w-4 h-4" />
                                        </button>
                                        <span className="text-xs text-gray-400">{msg.likes || 0}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* typing indicator */}
                        {isTyping && (
                            <div className="flex justify-start message-animate">
                                <div className="flex gap-3 max-w-lg">
                                    <div className={`w-10 h-10 rounded-full ${getAvatarColor('Hệ thống')} flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-lg`}>
                                        {getInitials('Hệ thống')}
                                    </div>
                                    <div>
                                        <div className="mt-1 px-5 py-3 rounded-2xl shadow-lg bg-gray-700 text-white">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                                                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
                                                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* scroll-to-bottom floating button */}
                    {showScrollBtn && (
                        <button onClick={scrollToBottom} className="absolute right-32 bottom-40 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2">
                            <ChevronDown className="w-4 h-4" />
                            {unreadCount > 0 && <span className="text-xs">{unreadCount}</span>}
                        </button>
                    )}

                    {/* Input area */}
                    <div className="p-6 bg-gray-700 text-white border-t border-black-600">
                        {/* formatting toolbar */}
                        <div className="mb-2 flex items-center gap-3 text-gray-400">
                            <button className="hover:text-white transition-colors"><strong>B</strong></button>
                            <button className="hover:text-white transition-colors italic"><em>I</em></button>
                            <button className="hover:text-white transition-colors"><span className="font-mono">f(x)</span></button>
                            <button className="hover:text-white transition-colors"><code>{`</>`}</code></button>
                            <button className="hover:text-white transition-colors"><Link className="w-5 h-5" /></button>
                            <button className="hover:text-white transition-colors"><Image className="w-5 h-5" /></button>
                            <button className="hover:text-white transition-colors"><Smile className="w-5 h-5" /></button>
                            <button className="hover:text-white transition-colors"><Gift className="w-5 h-5" /></button>
                        </div>
                        <div className="flex gap-3 items-end">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Viết tin nhắn của bạn..."
                                className="flex-1 resize-none p-4 bg-gray-800 border border-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-100 transition-all"
                                rows={2}
                            />
                            <button
                                onClick={sendMessage}
                                className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 font-semibold"
                                disabled={!input.trim()}
                            >
                                <Send className="w-6 h-6" />
                                <span className="hidden sm:inline">Gửi</span>
                            </button>
                        </div>
                        <div className="text-xs text-gray-400 mt-3 flex items-center justify-between">
                            <span>Đang chat dưới tên <strong className="text-white">{username}</strong></span>
                            <span>{input.length}/1000</span>
                        </div>
                    </div>
                </div>

                {/* Users list */}
                <div className="w-72 border-l border-gray-700 bg-white/5 backdrop-blur-md border-l border-white/10 p-6 overflow-y-auto custom-scrollbar">
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Circle className="w-3 h-3 text-green-400 animate-pulse" />
                            Đang trực tuyến ({users.length})
                        </h2>
                        <p className="text-xs text-gray-400 mt-1">Những thành viên hoạt động</p>
                    </div>

                    <div className="space-y-2">
                        {users.map((u, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-xl transition-all duration-200 cursor-pointer group"
                            >
                                <div className={`w-9 h-9 rounded-full ${getAvatarColor(u.name)} flex items-center justify-center text-xs font-bold text-white relative`}>
                                    {getInitials(u.name)}
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate group-hover:text-blue-400 transition-colors">{u.name}</p>
                                    <p className="text-xs text-gray-500">Hoạt động</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
