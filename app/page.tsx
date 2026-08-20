"use client"

import type React from "react"
import { Github, Linkedin, ExternalLink, Mail, Code2, Database, Zap, Smartphone, Server, Cloud, ShieldCheck, Trophy, Phone, Briefcase, GraduationCap, ArrowRight, Download } from "lucide-react"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Chatbot from "@/components/Chatbot"

export default function Portfolio() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    })
  }, [])

  const projects = [
    {
      title: "AI ESG Pipeline",
      description: "Engineered a Multi-Agent state-machine workflow using LangGraph to orchestrate specialized AI agents that automatically process, validate, and extract anomalies from dense ESG reports. Developed a high-speed RAG chatbot utilizing a hybrid Vector and Vectorless DB architecture.",
      tags: ["FastAPI", "LangGraph", "VectorDB", "React.js"],
      link: "https://github.com/harishkumard34/AI-ESG-Pipeline",
      liveLink: "https://ai-esg-pipeline.vercel.app/dashboard",
      image: "/esg-project.png"
    },
    {
      title: "TravelBuddy AI",
      description: "Built an autonomous multi-agent AI travel assistant using LangChain and FastAPI that intelligently researches global destinations and dynamically generates personalized itineraries. Implemented advanced Prompt Engineering strategies to enforce strictly structured JSON outputs.",
      tags: ["Python", "LangChain", "FastAPI", "LLMs"],
      link: "https://github.com/harishkumard34/TravelbuddyAI",
      liveLink: "https://hilarious-queijadas-17a3e8.netlify.app/",
      image: "/travel-buddy.png"
    },
    {
      title: "Smart Service Booking Platform",
      description: "Developed a comprehensive 3-part ecosystem (User App, Worker App, and Admin Dashboard) matching local professionals with customers. Implemented secure JWT RBAC pipelines and optimized RESTful APIs via FastAPI and PostgreSQL.",
      tags: ["React.js", "FastAPI", "PostgreSQL", "JWT"],
      link: "https://github.com/harishkumard34",
      image: "/smart-platform.png"
    },
  ]

  const skills = [
    { title: "AI & Agentic Systems", icon: <Zap />, items: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "Llama-3", "Vector Databases", "Vectorless DB", "LLM Gateways", "LLM Evals"] },
    { title: "Backend Development", icon: <Server />, items: ["Python", "FastAPI", "Django", "Spring Boot", "Node.js", "REST APIs", "SMTP", "IMAP"] },
    { title: "Frontend Development", icon: <Code2 />, items: ["React.js", "Svelte 5", "Flutter", "Tailwind CSS", "HTML5", "CSS3"] },
    { title: "Databases & Cloud", icon: <Cloud />, items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase", "Docker", "Kubernetes", "AWS", "Hostinger VPS"] },
    { title: "Integrations & Tools", icon: <Database />, items: ["Razorpay API", "FCM", "Cursor", "Git", "Postman", "VS Code", "npm"] },
  ]

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Cloudrule Technologies Private Limited",
      location: "Madurai, India",
      period: "March 2026 – Present",
      achievements: [
        "Architected the production-grade RoyalFishShop e-commerce ecosystem, engineering the mobile applications and RESTful backend using Flutter, Django, and MySQL.",
        "Deployed scalable backend infrastructure on Hostinger VPS, successfully integrating Razorpay API for transactions and Firebase Cloud Messaging (FCM) for real-time alerts.",
        "Optimized frontend architecture using Provider state management and streamlined JSON serialization, significantly reducing UI latency and improving application stability.",
      ],
      link: { text: "Play Store (Royal Seafoods)", url: "https://play.google.com/store/apps/details?id=com.royalseafoods.customer&pcampaignid=web_share" }
    },
    {
      role: "Full Stack Developer Intern",
      company: "Techpuram Technology Private Limited",
      location: "Madurai, India",
      period: "November 2024 – February 2025",
      achievements: [
        "Engineered a highly responsive SaaS CRM platform, combining a robust Spring Boot backend architecture with a modern Svelte 5 frontend client.",
        "Built secure email integration pipelines using SMTP and IMAP protocols, enabling automated bulk client communication and real-time inbox synchronization.",
        "Designed scalable PostgreSQL database schemas for complex CRUD operations, optimizing data retrieval for customer profiles using entity and repository design patterns.",
      ],
      link: { text: "Magudam CRM", url: "https://magudamcrm.com/" }
    }
  ]

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // Go to web3forms.com to get this
          email: email,
          message: message,
          subject: "New Message from Portfolio",
          from_name: "Portfolio Contact Form",
        }),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus("success")
        setEmail("")
        setMessage("")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.log("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600/20 selection:text-blue-900 overflow-x-hidden">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-300/30 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200" data-aos="fade-down" data-aos-duration="1000">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-extrabold text-blue-600 tracking-tight">
            HK.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-32 lg:pt-24 px-4 pb-16 lg:pb-12">
          <div className="text-center max-w-4xl mx-auto">
            
            <div data-aos="zoom-in" data-aos-delay="100" className="relative w-40 h-40 mx-auto mb-8 rounded-full p-1 bg-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.2)]">
              <img src="/profile.jpg" alt="D. Harish Kumar" className="w-full h-full object-cover rounded-full border-4 border-slate-50" />
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Available for Opportunities
            </div>
            
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
              Hi, I'm <br className="md:hidden" />
              <span className="text-blue-600">
                D. Harish Kumar
              </span>
            </h1>
            
            <p data-aos="fade-up" data-aos-delay="400" className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Full Stack AI Engineer specializing in production-grade autonomous workflows and highly scalable enterprise architectures.
            </p>

            <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="500">
              <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/Harish_Kumar.pdf" download="Harish_Kumar_Resume.pdf" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-sm hover:-translate-y-1">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a href="https://github.com/harishkumard34" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-sm hover:-translate-y-1">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/d-harish-kumar-0b0164285" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-sm hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About & Education */}
        <section id="about" className="py-16 lg:py-24 px-4 bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-slate-900">
                <Briefcase className="w-8 h-8 text-blue-600" />
                About Me
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  I am a <strong>Full Stack AI Engineer</strong> specializing in production-grade autonomous workflows and highly scalable architectures. My expertise lies in orchestrating multi-agent pipelines (<strong>LangGraph, LangChain</strong>) and optimizing RAG systems with <strong>VectorDBs and Llama-3</strong>.
                </p>
                <p>
                  I have a proven ability to architect full-stack enterprise solutions integrating modern backends (<strong>FastAPI, Django, Spring Boot</strong>) with complex cloud infrastructure and secure deployments. I am passionate about bridging raw LLM capabilities with enterprise automation.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-slate-900">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Bachelor of Engineering in Computer Science and Design</h3>
                  <p className="text-blue-600 font-medium mt-1">Sethu Institute of Technology</p>
                  <div className="flex justify-between items-center mt-4 text-slate-600 text-sm font-medium">
                    <span>2022 – 2026</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">CGPA: 7.8/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 lg:py-24 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Work Experience</h2>
            
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="hidden md:block absolute left-[-42px] top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(248,250,252,1)] z-10" />
                  <div className="hidden md:block absolute left-[-35px] top-8 bottom-[-48px] w-[2px] bg-slate-200" />
                  
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                        <p className="text-lg text-blue-600 font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <span className="inline-block bg-slate-100 px-4 py-1.5 rounded-full text-sm font-semibold text-slate-700">
                          {exp.period}
                        </span>
                        <p className="text-slate-500 text-sm mt-2 font-medium">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.link && (
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <a href={exp.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors group/link text-sm bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg w-fit">
                          <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                          {exp.link.text}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 lg:py-24 px-4 bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50} className={`bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${idx === 0 ? 'md:col-span-2' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-sm bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 lg:py-24 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Featured Projects</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} data-aos="flip-up" data-aos-delay={idx * 100} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2">
                  <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden border-b border-slate-200">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <Code2 className="w-16 h-16 text-slate-300 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500 relative z-10" />
                    )}
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-6 mt-auto">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold transition-colors group/link">
                        <Github className="w-4 h-4" /> Source
                      </a>
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors group/link">
                          Live Link <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="py-16 lg:py-24 px-4 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-3 text-slate-900">
              <Trophy className="w-8 h-8 text-blue-600" />
              Achievements & Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div data-aos="fade-right" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-4 text-center md:text-left flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span><strong>Java Programming</strong> <br/><span className="text-sm text-slate-500 font-medium">NPTEL Certified</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span><strong>Introduction to Internet of Things</strong> <br/><span className="text-sm text-slate-500 font-medium">NPTEL Certified</span></span>
                  </li>
                </ul>
              </div>
              <div data-aos="fade-left" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-4 text-center md:text-left flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-blue-600" />
                  Awards
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>Won <strong>2nd and 3rd prizes</strong> in technical paper and project presentations (Fire Engine Robot, EV Power Management).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 lg:py-24 px-4 relative overflow-hidden bg-slate-50">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Let's Build Something Great</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to say hi, I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 space-y-6" data-aos="fade-right">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600 text-sm mb-4">harishkumardhanasekaran3@gmail.com</p>
                  <a href="mailto:harishkumardhanasekaran3@gmail.com" className="text-blue-600 hover:text-blue-700 font-bold text-sm flex items-center gap-2 transition-colors w-fit">
                    Write me <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600 text-sm mb-4">+91 9442519004</p>
                  <a href="tel:+919442519004" className="text-blue-600 hover:text-blue-700 font-bold text-sm flex items-center gap-2 transition-colors">
                    Call me <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-3" data-aos="fade-left">
                <form onSubmit={handleContactSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all shadow-sm">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can I help you?"
                        required
                        rows={4}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-medium"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
                    >
                      {isLoading ? "Sending Message..." : "Send Message"}
                    </button>

                    {submitStatus === "success" && (
                      <p className="text-emerald-600 text-sm font-semibold text-center bg-emerald-50 py-3 rounded-lg border border-emerald-100">
                        Thanks for reaching out! I'll get back to you soon.
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-600 text-sm font-semibold text-center bg-red-50 py-3 rounded-lg border border-red-100">
                        Oops! Something went wrong. Please try emailing directly.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-12 px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/harishkumard34" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/d-harish-kumar-0b0164285" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:harishkumardhanasekaran3@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} D. Harish Kumar. All rights reserved.
          </p>
        </footer>
      </div>
      <Chatbot />
    </div>
  )
}
