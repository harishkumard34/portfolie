"use client"

import type React from "react"
import { Github, Linkedin, ExternalLink, Mail, Code2, Database, Zap } from "lucide-react"
import { useState } from "react"

export default function Portfolio() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const projects = [
    {
      title: "ShoperAI",
      description:
        "AI-powered e-commerce platform with personalized product recommendations using React.js and Node.js",
      tags: ["React.js", "Node.js", "MongoDB", "AI"],
      link: "https://github.com/harishkumard34",
    },
    {
      title: "CareerPath",
      description: "Career guidance platform with ML-powered personalized learning roadmaps and Firebase integration",
      tags: ["FastAPI", "React.js", "Firebase", "ML"],
      link: "https://github.com/harishkumard34",
    },
    {
      title: "Smart Service Booking",
      description:
        "Full-stack platform for booking local professionals with real-time availability and JWT authentication",
      tags: ["Spring Boot", "React.js", "PostgreSQL", "JWT"],
      link: "https://github.com/harishkumard34",
    },
  ]

  const skills = {
    languages: ["Java", "Python", "C++", "C"],
    frontend: ["React.js", "Svelte 5", "Angular"],
    backend: ["Spring Boot", "Node.js", "FastAPI"],
    databases: ["PostgreSQL", "MongoDB", "Firebase"],
    tools: ["Git", "GitHub", "Postman"],
  }

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
      console.log("[v0] Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-cyan-400">Harish Kumar</div>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">
              About
            </a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-3xl">
          <div className="mb-6 inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code2 className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">D. Harish Kumar</h1>

          <p className="text-xl md:text-2xl text-cyan-400 mb-2">Full Stack Developer</p>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Building scalable web and AI-powered applications with modern technologies
          </p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <a
              href="https://github.com/harishkumard34"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition font-semibold"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/d-harish-kumar-0b0164285"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition font-semibold"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <button
              onClick={handleSendEmail}
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition font-semibold"
            >
              <Mail className="w-5 h-5" />
              Email
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <div className="text-cyan-400/50 text-sm">↓ Scroll to explore</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I'm a Full Stack Developer with expertise in building end-to-end web applications using modern
                technologies like Spring Boot, React.js, Svelte 5, FastAPI, and PostgreSQL.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Passionate about creating scalable REST APIs, AI-driven platforms, and optimized database systems that
                solve real-world problems.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Currently pursuing Bachelor of Engineering in Computer Science and Design at Sethu Institute of
                Technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition">
                <div className="text-cyan-400 font-bold text-2xl mb-2">3+</div>
                <p className="text-slate-300">Projects Completed</p>
              </div>
              <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition">
                <div className="text-cyan-400 font-bold text-2xl mb-2">85%</div>
                <p className="text-slate-300">User Satisfaction</p>
              </div>
              <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition">
                <div className="text-cyan-400 font-bold text-2xl mb-2">10K+</div>
                <p className="text-slate-300">Database Profiles</p>
              </div>
              <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition">
                <div className="text-cyan-400 font-bold text-2xl mb-2">99.9%</div>
                <p className="text-slate-300">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Languages" icon={<Code2 />} items={skills.languages} />
            <SkillCard title="Frontend" icon={<Code2 />} items={skills.frontend} />
            <SkillCard title="Backend" icon={<Zap />} items={skills.backend} />
            <SkillCard title="Databases" icon={<Database />} items={skills.databases} />
            <SkillCard title="Tools" icon={<Code2 />} items={skills.tools} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>

          <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-400 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Full Stack Developer Intern</h3>
                <p className="text-cyan-400">Techpuran Technology Private Limited</p>
              </div>
              <span className="text-slate-400 text-sm">Nov 2024 – Feb 2025</span>
            </div>

            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>
                  Developed and maintained backend services for CRM SaaS product using Spring Boot, Svelte 5, and
                  PostgreSQL
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>
                  Implemented comprehensive email management system with SMTP functionality achieving 99% delivery
                  success rate
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Built IMAP integration solution reducing email processing time by 60%</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Created dynamic email template management enabling mass communication capabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 transition group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 h-32 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition">
                  <Code2 className="w-12 h-12 text-cyan-400 opacity-50 group-hover:opacity-100 transition" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-semibold text-sm"
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Let's Connect</h2>
          <p className="text-slate-300 text-lg mb-12 text-center">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="space-y-8">
            {/* Quick Contact Buttons */}
            <div className="flex gap-6 justify-center flex-wrap">
              <button
                onClick={handleSendEmail}
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-lg transition font-semibold"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </button>
              <a
                href="https://github.com/harishkumard34"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg transition font-semibold"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>

            {/* Email Display */}
            <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6 text-center">
              <p className="text-slate-400 text-sm mb-2">Email Address:</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("harishkumardhanasekaran3@gmail.com")
                  alert("Email copied!")
                }}
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition"
              >
                harishkumardhanasekaran3@gmail.com
              </button>
              <p className="text-slate-500 text-xs mt-2">Click to copy email</p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleContactSubmit}
              className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6 space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-slate-700 border border-cyan-500/20 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={4}
                  className="w-full bg-slate-700 border border-cyan-500/20 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-700 text-white font-semibold py-2 rounded-lg transition"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm text-center">Error sending message. Try emailing directly.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-cyan-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 D. Harish Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return (
    <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-cyan-400">{icon}</div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="text-slate-300 text-sm flex items-center gap-2">
            <span className="text-cyan-400">▹</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
