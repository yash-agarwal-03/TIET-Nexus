import React, { useState, useRef, useEffect } from "react";

function AIPage() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello! I'm Thapar AI, your virtual assistant for all things related to TIET. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes("admission") || input.includes("apply")) {
      return "For admissions to TIET, you can visit our official website or contact the admissions office at +91-175-2393021. The admission process typically involves JEE Main scores for undergraduate programs and GATE scores for postgraduate programs.";
    }
    if (input.includes("hostel") || input.includes("accommodation")) {
      return "TIET provides excellent hostel facilities for both boys and girls. The hostels are equipped with modern amenities including Wi-Fi, mess facilities, recreation rooms, and 24/7 security. You can apply for hostel accommodation during the admission process.";
    }
    if (input.includes("fee") || input.includes("cost")) {
      return "The fee structure varies by program. For detailed fee information, please visit the official TIET website or contact the accounts department. Financial aid and scholarships are also available for eligible students.";
    }
    if (input.includes("placement") || input.includes("job")) {
      return "TIET has an excellent placement record with top companies like Microsoft, Google, Amazon, TCS, Infosys, and many more visiting the campus. The placement cell provides comprehensive training and support to students.";
    }
    if (input.includes("course") || input.includes("program")) {
      return "TIET offers various undergraduate and postgraduate programs in Engineering, Management, Sciences, and other fields. Popular courses include Computer Science, Electronics, Mechanical, Civil Engineering, and MBA.";
    }
    if (input.includes("library")) {
      return "The Central Library at TIET is open from 7:00 AM to 11:00 PM and houses an extensive collection of books, journals, and digital resources. It also provides group study rooms and research facilities.";
    }
    return "I'm here to help with information about TIET! You can ask me about admissions, courses, hostel facilities, placements, campus life, or any other queries related to Thapar Institute.";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span role="img" aria-label="bot" className="text-white text-2xl">🤖</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thapar AI Assistant</h1>
          <p className="text-lg text-gray-600">
            Get instant answers to your questions about TIET - admissions, courses, campus life, and more!
          </p>
        </div>
        <div className="bg-white rounded shadow p-4 flex flex-col h-[500px] md:h-[600px]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "ai" && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">🤖</div>
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">🧑</div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">🤖</div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about TIET..."
                className="flex-1 border rounded px-3 py-2"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "How to apply for admission?",
              "What are the hostel facilities?",
              "Tell me about placements",
              "What courses are available?",
              "Library timings and facilities",
              "Campus life at TIET",
            ].map((question, index) => (
              <button
                key={index}
                className="border rounded px-3 py-2 text-left hover:bg-blue-50"
                onClick={() => setInputMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIPage;
