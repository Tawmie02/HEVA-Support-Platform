import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Bot, User, Download } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm HEVA's AI assistant. I can help you with funding opportunities, business advice, and connecting with resources. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateBotResponse = (userMessage: string): string => {
    const responses = {
      funding: "🎯 I can help you find funding opportunities! HEVA offers several grant programs:\n\n💰 Entrepreneur Support Grant - up to $10,000\n🎨 Creative Arts Fund - up to $5,000\n🚀 Tech Innovation Grant - up to $15,000\n👩‍💼 Women in Business Grant - up to $7,500\n\nWould you like me to provide application details for any specific program?",
      grant: "📋 Great question about grants! Here are our most popular programs:\n\n1️⃣ Small Business Startup Grant - $2,500\n2️⃣ Women in Business Grant - $7,500\n3️⃣ Tech Innovation Grant - $15,000\n4️⃣ Creative Arts Fund - $5,000\n5️⃣ Recovery Grant - $7,500\n\nWhich type of business are you planning to start? I can provide more specific guidance!",
      apply: "📝 To apply for HEVA grants, you'll need:\n\n✅ Detailed business plan\n✅ Financial projections (2 years)\n✅ Resume and team credentials\n✅ Letters of recommendation\n✅ Proof of eligibility\n\n⏱️ Application process: 4-6 weeks\n📧 Would you like me to send you the application forms?",
      business: "🏢 I'd love to help with your business questions! HEVA provides:\n\n🤝 Mentorship programs\n🌐 Networking events\n📚 Educational workshops\n🔗 Resource connections\n💡 Business development support\n\nWhat specific area needs guidance?\n• Marketing & Sales\n• Finance & Funding\n• Legal & Compliance\n• Operations & Strategy",
      products: "🛍️ HEVA Products & Services:\n\n💼 Business Development Programs\n🎓 Educational Workshops\n🤝 Mentorship Matching\n💰 Grant & Funding Programs\n🌐 Networking Events\n📊 Market Research Support\n🔧 Technical Assistance\n📈 Growth Acceleration Programs\n\nWhich service interests you most?",
      support: "🆘 HEVA Support Services:\n\n📞 24/7 Chat Support (that's me!)\n📧 Email Support: support@heva.ca\n📱 Phone: 1-800-HEVA-HELP\n🏢 In-person consultations\n📚 Resource library access\n🎯 Personalized guidance\n\nHow can I assist you today?",
      opportunities: "🌟 Current Opportunities:\n\n📅 Upcoming Events:\n• Women in Business Workshop - Feb 20\n• Digital Marketing Bootcamp - Feb 25\n• Startup Mentorship Program - Feb 28\n\n💰 Open Grants:\n• Tech Innovation Grant - Deadline: Mar 15\n• Creative Arts Fund - Deadline: Apr 1\n• Recovery Grant - Deadline: Mar 30\n\nWould you like details on any specific opportunity?",
      default: "👋 That's a great question! I'm HEVA's AI assistant, here to help with:\n\n💰 Funding opportunities & grants\n🏢 Business development support\n🛍️ HEVA products & services\n🌟 Current opportunities & events\n📚 Resources & guidance\n\n🤔 Could you tell me more about what you're specifically looking for? I'm here to help you succeed!"
    };

    const message = userMessage.toLowerCase();
    if (message.includes('funding') || message.includes('money') || message.includes('finance')) return responses.funding;
    if (message.includes('grant')) return responses.grant;
    if (message.includes('apply') || message.includes('application') || message.includes('how to')) return responses.apply;
    if (message.includes('business') || message.includes('startup') || message.includes('entrepreneur')) return responses.business;
    if (message.includes('product') || message.includes('service') || message.includes('program')) return responses.products;
    if (message.includes('support') || message.includes('help') || message.includes('contact')) return responses.support;
    if (message.includes('opportunity') || message.includes('event') || message.includes('workshop')) return responses.opportunities;
    return responses.default;
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: simulateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input would be implemented here with Web Speech API
    if (!isListening) {
      setTimeout(() => {
        setInputText("How can I apply for funding?");
        setIsListening(false);
      }, 2000);
    }
  };

  const exportChat = () => {
    const chatData = messages.map(msg => 
      `${msg.sender === 'user' ? 'You' : 'HEVA Bot'} (${msg.timestamp.toLocaleTimeString()}): ${msg.text}`
    ).join('\n\n');
    
    const blob = new Blob([chatData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'heva-chat-export.txt';
    a.click();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">HEVA Assistant</h2>
                <p className="text-purple-100 text-sm">Always ready to help • Online</p>
              </div>
            </div>
            <button
              onClick={exportChat}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              <Download className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-gray-900">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' 
                    ? 'bg-purple-600' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white rounded-br-sm'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm shadow-md'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-purple-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl rounded-bl-sm shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me about funding, grants, or business advice..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={toggleVoiceInput}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors ${
                  isListening 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                }`}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            </div>
            <button
              onClick={sendMessage}
              disabled={!inputText.trim()}
              className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              'How do I apply for grants?', 
              'What HEVA products are available?', 
              'Show me funding opportunities',
              'Business mentorship program',
              'Contact support'
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInputText(suggestion)}
                className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}