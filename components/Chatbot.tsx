"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Harish's AI Assistant. Ask me anything about his skills, experience, or projects!" },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (query: string) => {
    const q = query.toLowerCase()
    
    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("tools")) {
      return "Harish is an AI Agentic Developer. His top skills include LangGraph, LangChain, RAG, Llama-3, Vector Databases, Python, FastAPI, React.js, and Docker."
    }
    if (q.includes("experience") || q.includes("work") || q.includes("intern") || q.includes("job")) {
      return "He works at Cloudrule Tech (Mar 2026-Present) where he built the RoyalFishShop ecosystem, and interned at Techpuram (Nov 2024-Feb 2025) building CRM systems with SMTP/IMAP integration."
    }
    if (q.includes("project") || q.includes("build") || q.includes("portfolio")) {
      return "His featured projects include an AI ESG Pipeline (Multi-Agent LangGraph + RAG), TravelBuddy AI (Autonomous Travel Agent), and a Smart Service Booking Platform (Urban Worker Architecture)."
    }
    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("phone")) {
      return "You can reach him at harishkumardhanasekaran3@gmail.com or +91-9442519004."
    }
    if (q.includes("education") || q.includes("college") || q.includes("degree")) {
      return "He graduated with a B.E. in Computer Science and Design from Sethu Institute of Technology in April 2026."
    }
    
    return "I am a local AI assistant analyzing Harish's portfolio. I can answer questions about his skills, experience, projects, or contact info. What would you like to know?"
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userText = input
    setMessages((prev) => [...prev, { role: "user", text: userText }])
    setInput("")

    // Simulate AI thinking delay
    setTimeout(() => {
      const botResponse = getBotResponse(userText)
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }])
    }, 600)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Portfolio Assistant</h3>
              <p className="text-xs text-blue-100">Analyzing Resume & Codebase</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-slate-50 flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-slate-200 text-slate-600" : "bg-blue-100 text-blue-600"}`}>
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-slate-800 text-white rounded-tr-none" : "bg-white border border-slate-200 text-slate-800 shadow-sm rounded-tl-none"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my resume..."
              className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
