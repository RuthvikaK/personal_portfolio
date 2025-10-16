import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ChatBot = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Ruthvika's AI assistant. I can answer questions about her education, experience, projects, and skills. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Create context from portfolio data
  const createContext = () => {
    const context = `
    You are an AI assistant for Ruthvika Kosuri's portfolio website. Answer questions based only on the following information:

    PERSONAL INFO:
    - Name: ${portfolioData.personalInfo.name}
    - Title: ${portfolioData.personalInfo.title}
    - Email: ${portfolioData.personalInfo.email}
    - Location: ${portfolioData.personalInfo.location}
    - Bio: ${portfolioData.personalInfo.bio}
    - About: ${portfolioData.personalInfo.about}

    EDUCATION:
    ${portfolioData.education.map(edu => `
    - ${edu.degree} at ${edu.school} (${edu.period})
      ${edu.gpa ? `GPA: ${edu.gpa}` : ''}
      ${edu.honors ? `Honors: ${edu.honors}` : ''}
      ${edu.minors ? `Minors: ${edu.minors.join(', ')}` : ''}
      Coursework: ${edu.coursework.join(', ')}
    `).join('')}

    EXPERIENCE:
    ${portfolioData.experience.map(exp => `
    - ${exp.title} at ${exp.company} (${exp.period})
      ${exp.supervisor ? `Supervisor: ${exp.supervisor}` : ''}
      ${exp.description.join(' ')}
    `).join('')}

    PROJECTS:
    ${portfolioData.projects.map(proj => `
    - ${proj.name}: ${proj.description}
      Technologies: ${proj.technologies.join(', ')}
      ${proj.highlights.join(' ')}
    `).join('')}

    SKILLS:
    - Programming Languages: ${portfolioData.skills.languages.join(', ')}
    - AI/ML Frameworks: ${portfolioData.skills.frameworks["AI/ML"].join(', ')}
    - Web Development: ${portfolioData.skills.frameworks["Web Development"].join(', ')}
    - Cloud & DevOps: ${portfolioData.skills.cloud.join(', ')}
    
    Answer questions conversationally and helpfully, but only based on this information. If asked about something not in this context, politely say you can only answer questions about Ruthvika's professional background and skills.
    `;
    return context;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Together AI API call
      const response = await fetch('https://api.together.xyz/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Using environment variable for API key
          'Authorization': `Bearer ${import.meta.env.VITE_TOGETHER_API_KEY || 'YOUR_API_KEY_HERE'}`,
        },
        body: JSON.stringify({
          model: 'meta-llama/Llama-3.3-70B-Instruct-Turbo-Free',
          messages: [
            {
              role: 'system',
              content: createContext(),
            },
            ...messages.slice(1).map(msg => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.content,
            })),
            {
              role: 'user',
              content: input,
            },
          ],
          max_tokens: 512,
          temperature: 0.7,
          top_p: 0.7,
          top_k: 50,
          repetition_penalty: 1,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: data.choices[0].message.content,
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        // Fallback response if API fails
        const fallbackResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: "I apologize, but I'm having trouble connecting to my AI service. Please try again later or feel free to explore the website directly!",
        };
        setMessages(prev => [...prev, fallbackResponse]);
      }
    } catch (error) {
      console.error('Error calling Together AI:', error);
      // Fallback to a simple rule-based response
      const fallbackResponse = generateFallbackResponse(input);
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: fallbackResponse,
      };
      setMessages(prev => [...prev, botResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple fallback responses when API is not available
  const generateFallbackResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('project')) {
      return "Ruthvika has worked on several exciting projects including Trade Compass (AI-powered trading analytics), Agentic Planner (LLM selection framework), Mosaic Music (music streaming platform), Filia (social media app), and the ARC Challenge. Each project showcases different technical skills from ML to full-stack development!";
    }
    if (lowerQuery.includes('education') || lowerQuery.includes('study')) {
      return "Ruthvika is currently pursuing her M.S. in Computer Science at UNC Chapel Hill (2024-2026). She completed her B.S. in Computer Science from UNC Charlotte with Summa Cum Laude honors and a 3.93 GPA, with minors in Bio-informatics and Mathematics.";
    }
    if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
      return "Ruthvika is currently a Research Assistant on the ATLAS Project at BIND Lab, working on containerized ML model deployment. She also completed a Research Internship in Computational Drug Discovery at UNC School of Medicine, focusing on peptide inhibitors for CDK2.";
    }
    if (lowerQuery.includes('skill') || lowerQuery.includes('language') || lowerQuery.includes('technology')) {
      return "Ruthvika is proficient in Python, Java, C/C++, JavaScript, TypeScript, and SQL. She has experience with AI/ML frameworks like TensorFlow, PyTorch, and LangChain, as well as cloud technologies including AWS, Docker, and Kubernetes.";
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('email')) {
      return `You can reach Ruthvika at ${portfolioData.personalInfo.email} or connect with her on LinkedIn at ${portfolioData.personalInfo.linkedin}`;
    }
    
    return "I can help you learn about Ruthvika's education, experience, projects, and skills. What specific aspect would you like to know more about?";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '6rem',
      right: '1.5rem',
      width: '24rem',
      height: '600px',
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    }} className="glass-effect">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-white" />
          <h3 className="text-white font-semibold">Portfolio Assistant</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-black hover:bg-white/20 rounded-lg p-1 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start gap-2 max-w-[80%] ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'bg-gray-700'
                }`}
              >
                {message.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-200'
                }`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-800 rounded-lg p-3">
                <Loader className="w-4 h-4 text-gray-400 animate-spin" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about my experience, projects..."
            className="flex-1 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
