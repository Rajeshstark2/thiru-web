import React, { useState, useRef, useLayoutEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot'; button?: { text: string; href: string } }[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for scrolling to the latest message

  // Context about Thirumoorthy Murugadoss and chatbot guidelines
  const personalContext = `
    Professional Summary of Thirumoorthy Murugadoss (Thiru):
    - Business & Entrepreneurship: Founder and owner of a social media marketing agency named Scalevel.
    - Founded Scalevel with a creative partner/best friend on January 17, 2024.
    - closed some clients in web dev and social marketing services
    - Contact details: Email: thirumoorthy07dj@gmail.com , Phone: +91 936023177.
    - projects he does not client's :QR Genie QR code generator with customization options ,AI Fitness Pro AI-powered workout assistant for personalized training ,HireSkill Pro Portfolio & skill exploration platform ,Data Insight Pro Interactive graph & data insight dashboard, Last Minute Preparation Student-focused exam preparation app with study tools, Skate Boarder 2D fun arcade-style game with challenging obstacles Game ,Delivery Man Obstacle delivery game with time challenges Game
    - Responsibilities at Scalevel: Makes 15–20 cold calls per day to generate leads and grow the business.
    - Client Strategy: Testing a 1-week free trial for website development to acquire and analyze client response.
    - Goals & Ambitions: Main Goal is to Build a successful and scalable business. Actively working on developing a strong YouTube personal brand with a series on the mindset of success through summaries of impactful business books.
    - Professional Skills: Graphite Pencil Art (12 years experience, freelancing, paid portrait commissions), Singing (Skilled Carnatic vocalist, cleared third-grade exam directly), Sports (Basketball player, practices regularly).
    - Soft Skills & Development: Strong focus on Communication skills, Sales mastery, Discipline and time management, English fluency (including accent improvement).

    Chatbot Guidelines (from conversation):
    - The chatbot should only share professional, public-facing information.
    - Your name : when the user asks you name , tell (Luna) as your name as a chatbot
    - links: when the user asks for any links , tell that (please check the website that you are currently at ,may be you can find them) (the social media links, project links are there nothing more than these links exist in the website they are currently at)
    - Allowed topics: About Thiru (multi-talented creative professional, co-founder of Scalevel, 12+ years in art, basketball player, passionate about productivity, communication, building scalable business), Skills (Social Media Marketing, Cold Calling & Lead Generation, Web Strategy & Client Conversion, Graphite Pencil Portraits, Content Creation & YouTube Strategy, Communication & Sales Skills), Agency Work (Scalevel offers tailored social media and website solutions, currently running a 1-week free trial for website development, focus on improving online presence and digital credibility for local and small businesses), Contact (How to commission art or inquire about business services, reach out via contact form).
    - NOT Allowed topics: Personal location, age, weight, family details, daily habits, food choices, routines, deep personal goals (unless relevant to business), names of personal friends or private stories, emotional or subjective opinions (unless brand-relevant).
    - If asked about unrelated or inappropriate content, politely decline and state that you can only discuss Thirumoorthy Murugadoss and his professional work.
    - Refuse to generate any inappropriate, harmful, or unsafe response.
  `;

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Very basic inappropriate keyword check (limited and not secure/robust)
  const isMessageInappropriate = (message: string): boolean => {
    const inappropriateKeywords = ['badword1', 'badword2', 'inappropriate_term']; // Add actual keywords here
    const lowerCaseMessage = message.toLowerCase();
    return inappropriateKeywords.some(keyword => lowerCaseMessage.includes(keyword));
  };

  // Effect to scroll to the bottom whenever messages state changes
  useLayoutEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Dependency array: run this effect whenever the 'messages' state changes

  const handleSendMessage = async () => {
    if (input.trim() === '') return; // Don't send empty messages

    const newMessage = { text: input, sender: 'user' as 'user' };
    setMessages([...messages, newMessage]);
    setInput(''); // Clear input field

    // Perform basic inappropriate content check
    if (isMessageInappropriate(newMessage.text)) {
      const botResponse = { text: "Bot: I cannot respond to inappropriate content.", sender: 'bot' as 'bot' };
      setMessages(prevMessages => [...prevMessages, botResponse]);
      return;
    }

    // --- Gemini API Call (Frontend - INSECURE for production) ---
    // Accessing API key from environment variables (assuming Vite or similar)
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // If using Create React App, use process.env.REACT_APP_GEMINI_API_KEY
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent'; // Placeholder URL - UPDATE THIS

    if (!apiKey) {
      console.error('Gemini API key not found in environment variables.');
      const errorMessage = { text: "Bot: Error - API key not configured.", sender: 'bot' as 'bot' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // The structure of the request body depends on the specific Gemini API endpoint
          // This is a common format for text generation
          // Added instructions to the prompt for filtering and topic focus
          contents: [
            { // System instructions or context as an initial user turn
              role: "user",
              parts: [
                {text: `Here is context about Thirumoorthy Murugadoss and guidelines for you as a chatbot:
${personalContext}

You are a helpful AI assistant responding to questions based ONLY on the provided context about Thirumoorthy Murugadoss. Your responses must adhere strictly to the allowed topics and guidelines given in the context.
If a question is unrelated to the provided context about Thirumoorthy Murugadoss or falls under the NOT Allowed topics, politely decline to answer and explain that you can only provide information based on the details you have about Thirumoorthy Murugadoss and his professional work.
Under no circumstances provide information outside the given context or generate inappropriate/harmful content.`}
              ]
            },
            { // A placeholder model response to establish the turn taking
               role: "model",
               parts: [
                  {text: "Okay, I understand. I am ready to answer questions based on the information provided."}
               ]
            },
            { // The user's current message
               role: "user",
               parts: [
                  {text: input}
               ]
            }
          ]
          // Add other parameters like temperature, max_output_tokens, etc. if needed
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API error:', response.status, errorData);
        const errorMessage = { text: `Bot: API Error - ${response.statusText}`, sender: 'bot' as 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
        return;
      }

      const data = await response.json();
      // Adjust this based on the actual structure of the API response
      const botResponseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Bot: Sorry, I couldn't get a response.";

      const botResponse: { text: string; sender: 'bot'; button?: { text: string; href: string } } = { text: botResponseText, sender: 'bot' as 'bot' };

      // Simple check to add a "Book Now" button if the response seems appropriate
      // This is a basic frontend check and might not be perfectly accurate.
      const lowerCaseBotResponse = botResponseText.toLowerCase();
      const isBookingRelated = lowerCaseBotResponse.includes('contact') || lowerCaseBotResponse.includes('book') || lowerCaseBotResponse.includes('get in touch') || lowerCaseBotResponse.includes('services') || lowerCaseBotResponse.includes('inquire') || lowerCaseBotResponse.includes('commission'); // Add more relevant keywords

      // Only add button if it's not an error/inappropriate message AND is potentially booking related
      const isErrorOrInappropriate = botResponseText.startsWith("Bot: Error") || botResponseText.startsWith("Bot: I cannot respond to inappropriate content.");

      if (!isErrorOrInappropriate && isBookingRelated) {
        botResponse.button = { text: "Book Now", href: "#contact" }; // Link to the contact section
      }

      setMessages(prevMessages => [...prevMessages, botResponse]);

    } catch (error) {
      console.error('Error making API call:', error);
      const errorMessage = { text: "Bot: An error occurred while fetching response.", sender: 'bot' as 'bot' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
    // --- End Gemini API Call ---
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="bg-neon-red text-white p-4 rounded-full shadow-lg hover:bg-neon-red/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-red focus:ring-opacity-50"
        aria-label="Open Chatbot"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chatbot Window (Placeholder) */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[400px] h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-neon-red/50 flex flex-col">
          <div className="p-4 border-b border-neon-red/50 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-foreground">Chat with Luna </h3>
            <button onClick={toggleChat} className="text-foreground hover:text-neon-red">
              &times;
            </button>
          </div>
          {/* Chat messages display area */}
          <div className="flex-1 p-4 overflow-y-auto text-foreground/80 space-y-4" ref={messagesEndRef}>
            {/* Initial welcome message */}
            {messages.length === 0 && (
               <div className="flex justify-start">
                 <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg max-w-[70%]">
                   Hello! How can I help you today?
                 </div>
               </div>
            )}
            {/* Display messages */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`${message.sender === 'user'
                    ? 'bg-neon-red text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-foreground'
                  } p-3 rounded-lg max-w-[70%]`}
                >
                  {message.text}
                  {message.sender === 'bot' && message.button && (
                    <div className="mt-2">
                      <a
                        href={message.button.href}
                        className="inline-block bg-neon-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neon-red/90 transition-colors duration-300"
                        onClick={() => setIsOpen(false)} // Optionally close chat on button click
                      >
                        {message.button.text}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Empty div to scroll into view */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Message input area */}
          <div className="p-4 border-t border-neon-red/50 flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              onKeyPress={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
              className="flex-1 px-4 py-2 mr-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-neon-red/50"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-neon-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-neon-red/90 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotButton; 