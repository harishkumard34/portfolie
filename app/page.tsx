"use client"

import type React from "react"
import { Github, Linkedin, ExternalLink, Mail, Code2, Database, Zap, Smartphone, Server, Cloud, ShieldCheck, Trophy, Phone, Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Portfolio() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const projects = [
    {
      title: "Smart Service Booking Platform",
      description:
        "Full-stack web application with secure JWT authentication, role-based access control, and payment integration. Optimized RESTful APIs and MongoDB queries, improving performance by 50%. Built interactive dashboards leading to 35% higher user retention.",
      tags: ["Spring Boot", "React.js", "MongoDB", "REST API", "Razorpay"],
      link: "https://github.com/harishkumard34",
    },
    {
      title: "ShoperAI",
      description:
        "Developed an AI-driven e-commerce platform that leverages machine learning for personalized product recommendations. Implemented user authentication, dynamic product catalog, and secure checkout using Node.js and MongoDB. The recommendation engine improved user engagement by serving targeted content and optimizing the shopping experience.",
      tags: ["React.js", "Node.js", "MongoDB", "AI"],
      link: "https://github.com/harishkumard34",
    },
    {
      title: "CareerPath",
      description: "Built a comprehensive career guidance platform utilizing FastAPI and React.js. It features ML-powered personalized learning roadmaps based on user skills and goals. Integrated Firebase for real-time data sync and user management, providing a seamless experience for students navigating complex career choices.",
      tags: ["FastAPI", "React.js", "Firebase", "ML"],
      link: "https://github.com/harishkumard34",
    },
  ]

  const skills = [
    { title: "Languages", icon: <Code2 />, items: ["Java", "Python", "JavaScript", "TypeScript", "Dart", "SQL"] },
    { title: "Mobile Dev", icon: <Smartphone />, items: ["Flutter", "Provider", "FCM", "Play Store Deployment"] },
    { title: "Frontend", icon: <Code2 />, items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Svelte 5"] },
    { title: "Backend", icon: <Server />, items: ["Spring Boot", "Django", "Node.js", "Express.js", "FastAPI"] },
    { title: "Databases", icon: <Database />, items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase Firestore"] },
    { title: "Cloud & Tools", icon: <Cloud />, items: ["AWS", "Hostinger VPS", "Git", "Postman", "Razorpay"] },
  ]

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Cloudrule Technologies Private Limited",
      location: "Madurai, India",
      period: "March 2026 – Present",
      achievements: [
        "Developed and deployed the complete RoyalFishShop mobile application (Admin & User apps) using Flutter, Django REST Framework, and MySQL.",
        "Built scalable Flutter frontend architecture using Provider state management, REST API integration, and JSON serialization.",
        "Implemented Firebase Cloud Messaging (FCM) for push notifications, 4-digit OTP authentication, and Razorpay payment gateway.",
        "Deployed Django backend on Hostinger VPS and published Flutter apps to the Google Play Store."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Techpuram Technology Private Limited",
      location: "Madurai, India",
      period: "November 2024 – February 2025",
      achievements: [
        "Developed a SaaS CRM product using Spring Boot (backend), Svelte 5 (frontend), and PostgreSQL.",
        "Designed and implemented SMTP-based email sending and an IMAP-based email receiving service using entity and repository patterns.",
        "Created reusable bulk email templates and a Gmail-like compose UI with rich text formatting.",
        "Configured secure CORS policies to enable seamless cross-origin communication."
      ]
    }
  ]

  const handleSendEmail = async () => {
    const emailAddress = "harishkumardhanasekaran3@gmail.com"
    try {
      await navigator.clipboard.writeText(emailAddress)
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`, "_blank")
    } catch {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`, "_blank")
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message,
          toEmail: "harishkumardhanasekaran3@gmail.com",
        }),
      })
      if (response.ok) {
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
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            HK.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-sm font-medium mb-8 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Hi, I'm <br className="md:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                D. Harish Kumar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Results-driven Full Stack Developer building scalable, production-grade web and mobile applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://github.com/harishkumard34" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/d-harish-kumar-0b0164285" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About & Education */}
        <section id="about" className="py-24 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-blue-400" />
                About Me
              </h2>
              <div className="prose prose-invert prose-lg text-slate-400">
                <p>
                  I'm a Full Stack Developer with expertise in Java, Python, JavaScript, Flutter, Spring Boot, Django, and RESTful APIs. 
                  I focus on cloud deployment, mobile app publishing, payment gateway integrations, and building robust architectures.
                </p>
                <p>
                  Passionate about writing clean code and collaborating in cross-functional teams to deliver performance-optimized, scalable solutions.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-200">Bachelor of Engineering in Computer Science and Design</h3>
                  <p className="text-blue-400 font-medium">Sethu Institute of Technology</p>
                  <div className="flex justify-between items-center mt-2 text-slate-400 text-sm">
                    <span>2022 – 2026</span>
                    <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">CGPA: 7.8/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Work Experience</h2>
            
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-[-42px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                  <div className="hidden md:block absolute left-[-35px] top-8 bottom-[-48px] w-[2px] bg-white/10" />
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                        <p className="text-lg text-blue-400 font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-slate-300">
                          {exp.period}
                        </span>
                        <p className="text-slate-500 text-sm mt-2">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/10">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-sm bg-white/5 border border-white/10 text-slate-300 px-3 py-1.5 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors cursor-default">
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
        <section id="projects" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group flex flex-col bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] transition-all duration-500 hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-900 p-8 flex items-center justify-center relative overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                    <Code2 className="w-16 h-16 text-slate-700 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500 relative z-10 drop-shadow-[0_0_10px_rgba(6,182,212,0)] group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow relative">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-500" />
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">{project.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-300 font-semibold transition-colors group/link mt-auto">
                      View Source <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="py-24 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              Achievements & Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg font-bold text-white mb-4 text-center md:text-left flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    <span><strong>Java Programming</strong> <br/><span className="text-sm text-cyan-400">NPTEL Certified</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    <span><strong>Introduction to Internet of Things</strong> <br/><span className="text-sm text-cyan-400">NPTEL Certified</span></span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-colors">
                <h3 className="text-lg font-bold text-white mb-4 text-center md:text-left flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Awards
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                    <span>Won <strong>2nd and 3rd prizes</strong> in technical paper and project presentations (Fire Engine Robot, EV Power Management).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Great</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to say hi, I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-slate-400 text-sm mb-4">harishkumardhanasekaran3@gmail.com</p>
                  <button onClick={handleSendEmail} className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-2 transition-colors">
                    Write me <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                  <p className="text-slate-400 text-sm mb-4">+91 9442519004</p>
                  <a href="tel:+919442519004" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-2 transition-colors">
                    Call me <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-3">
                <form onSubmit={handleContactSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can I help you?"
                        required
                        rows={4}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                    >
                      {isLoading ? "Sending Message..." : "Send Message"}
                    </button>

                    {submitStatus === "success" && (
                      <p className="text-emerald-400 text-sm text-center bg-emerald-500/10 py-3 rounded-lg border border-emerald-500/20">
                        Thanks for reaching out! I'll get back to you soon.
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-rose-400 text-sm text-center bg-rose-500/10 py-3 rounded-lg border border-rose-500/20">
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
        <footer className="border-t border-white/5 py-12 px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/harishkumard34" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/d-harish-kumar-0b0164285" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:harishkumardhanasekaran3@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} D. Harish Kumar. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}
