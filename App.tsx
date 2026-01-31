
import React, { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { 
  PERSONAL_INFO, 
  PROJECTS, 
  SKILLS, 
  EXPERIENCES, 
  CERTIFICATIONS,
  EDUCATION
} from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'journey', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-accent/30 selection:text-accent font-sans transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter">HA<span className="text-accent">.</span></a>
          <div className="flex items-center gap-6 md:gap-10 text-[13px] uppercase tracking-widest font-bold text-zinc-500 dark:text-zinc-400">
            <a href="#about" className={`hover:text-accent transition-colors ${activeSection === 'about' ? 'text-accent' : ''}`}>About</a>
            <a href="#work" className={`hover:text-accent transition-colors hidden sm:block ${activeSection === 'work' ? 'text-accent' : ''}`}>Projects</a>
            <a href="#journey" className={`hover:text-accent transition-colors hidden md:block ${activeSection === 'journey' ? 'text-accent' : ''}`}>Journey</a>
            <a href="#contact" className={`hover:text-accent transition-colors px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all ${activeSection === 'contact' ? 'bg-accent/10 border-accent/30 text-accent' : ''}`}>Contact</a>
            <ThemeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="pt-48 pb-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Building the Future
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.role}. <br className="hidden md:block" />
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">{PERSONAL_INFO.valueProp}</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#work" className="px-10 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold transition-all shadow-xl shadow-accent/20 hover:-translate-y-1">
                Explore Projects
              </a>
              <a href="#contact" className="px-10 py-4 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-bold transition-all hover:-translate-y-1">
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-64 h-64 md:w-96 md:h-96 relative shrink-0">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-zinc-100 dark:border-zinc-900 shadow-2xl transition-transform duration-500 hover:rotate-2">
               <img src={PERSONAL_INFO.avatar} alt={PERSONAL_INFO.name} className="w-full h-full object-cover transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-zinc-100 dark:bg-zinc-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start relative z-10">
          <div>
            <h2 className="text-4xl font-black mb-10 tracking-tight">Executive Summary<span className="text-accent">.</span></h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed font-light italic">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="space-y-10">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Education</h3>
              <div className="space-y-8">
                {EDUCATION.map(edu => (
                  <div key={edu.id} className="relative pl-10 group">
                    <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-accent bg-zinc-50 dark:bg-zinc-950 z-10"></div>
                    <div className="absolute left-2.5 top-8 bottom-[-2rem] w-0.5 bg-accent/20 group-last:hidden"></div>
                    <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{edu.degree}</p>
                    <p className="text-sm font-semibold text-accent mb-4 tracking-wide">{edu.institution} | {edu.period}</p>
                    <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((cat, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-accent/30 transition-all hover:shadow-xl group">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 group-hover:text-accent transition-colors">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-[15px] font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-6 tracking-tight">My Projects<span className="text-accent">.</span></h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">A documentation of my transition from academic theory to professional software practice.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-accent/40 transition-all flex flex-col hover:shadow-2xl">
              <div className="relative h-60 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div className="flex flex-wrap gap-2">
                     {project.stack.map(s => <span key={s} className="text-[10px] font-bold uppercase tracking-widest bg-accent text-white px-2.5 py-1 rounded-full">{s}</span>)}
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-zinc-500 flex-1 font-medium leading-relaxed italic">"{project.problem}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors" title="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </a>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors" title="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </a>
                  </div>
                  <button onClick={() => setSelectedProject(project.id)} className="text-[12px] font-bold uppercase tracking-widest text-accent hover:underline transition-colors">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="journey" className="py-32 px-6 bg-zinc-100 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Experience<span className="text-accent">.</span></h2>
            <p className="text-zinc-500 text-lg">Milestones of continuous learning and collaborative growth.</p>
          </div>
          <div className="space-y-16">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative pl-12 border-l-2 border-zinc-200 dark:border-zinc-800 group">
                <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full border-4 border-accent bg-zinc-100 dark:bg-zinc-900 group-hover:scale-125 transition-transform shadow-xl shadow-accent/20" />
                <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">{exp.role} <span className="text-accent text-xl">@ {exp.company}</span></h3>
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800">{exp.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-600 dark:text-zinc-400 flex items-start gap-4 text-base font-medium">
                      <span className="mt-2.5 shrink-0 w-2 h-2 rounded-full bg-accent"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(t => (
                    <span key={t} className="text-[10px] font-black tracking-widest uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-md text-accent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Certifications & Achievements<span className="text-accent">.</span></h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Verified credentials from industry leaders validating my technical foundations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-accent/40 transition-all hover:shadow-2xl group flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-8 flex items-center justify-center group-hover:bg-accent/10 transition-colors shadow-sm">
                  <svg className="w-7 h-7 text-zinc-400 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2 leading-tight dark:text-zinc-100">{cert.name}</h4>
                  <p className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">{cert.issuer} • {cert.date}</p>
                </div>
                {cert.link && (
                  <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 mt-6">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[12px] font-black uppercase tracking-widest text-accent hover:text-accent-hover transition-colors flex items-center gap-2 group/link"
                    >
                      Verify Credential
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contact Section */}
      <section id="contact" className="py-32 px-6 relative bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Get In Touch</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Have a project in mind or want to collaborate? I'd love to hear from you. Reach out through any of these channels.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-zinc-900 dark:text-white hover:text-accent transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">Phone</p>
                    <p className="text-lg font-bold text-zinc-900 dark:text-white">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <div className="w-3 h-3 rounded-full bg-current animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">Availability</p>
                    <p className="text-lg font-bold text-zinc-900 dark:text-white">Open to internships & collaboration</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">Interested In</p>
                <div className="flex flex-wrap gap-2">
                  {['Summer Internships', 'Technical Research', 'Open Source'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              {formStatus === 'sent' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/10 border border-accent/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-lg">Thank you for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-accent font-bold hover:underline text-sm">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-1">Full Name</label>
                    <div className="relative group">
                      <input 
                        required 
                        type="text" 
                        className="w-full px-6 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border-2 border-transparent focus:border-accent focus:bg-white dark:focus:bg-zinc-900 transition-all outline-none font-semibold text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                      />
                      <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-1">Email</label>
                      <div className="relative group">
                        <input 
                          required 
                          type="email" 
                          className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border-2 border-transparent focus:border-accent focus:bg-white dark:focus:bg-zinc-900 transition-all outline-none font-semibold text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                        />
                        <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-1">Phone</label>
                      <div className="relative group">
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border-2 border-transparent focus:border-accent focus:bg-white dark:focus:bg-zinc-900 transition-all outline-none font-semibold text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                        />
                        <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-1">Subject</label>
                    <div className="relative group">
                      <input 
                        required 
                        type="text" 
                        className="w-full px-6 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border-2 border-transparent focus:border-accent focus:bg-white dark:focus:bg-zinc-900 transition-all outline-none font-semibold text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                      />
                      <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ml-1">Message</label>
                    <div className="relative group">
                      <textarea 
                        required 
                        rows={4} 
                        className="w-full px-6 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border-2 border-transparent focus:border-accent focus:bg-white dark:focus:bg-zinc-900 transition-all outline-none font-semibold text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                      ></textarea>
                      <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className="w-full px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all disabled:opacity-60 flex items-center justify-center gap-3 shadow-lg shadow-accent/30 hover:shadow-accent/40 active:scale-95"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">
          <div className="md:col-span-2 space-y-6">
            <a href="#" className="text-3xl font-black tracking-tighter">HA<span className="text-accent">.</span></a>
            <p className="text-zinc-500 max-w-sm leading-relaxed font-medium italic">
              Architecting the next generation of digital systems with discipline, curiosity, and high-performance engineering.
            </p>
            <div className="flex gap-5">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-accent transition-all hover:-translate-y-1" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-accent transition-all hover:-translate-y-1" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Sitemap</h4>
            <nav className="flex flex-col gap-4 text-sm font-bold text-zinc-600 dark:text-zinc-400">
              <a href="#about" className="hover:text-accent transition-colors">Career Overview</a>
              <a href="#work" className="hover:text-accent transition-colors">Selected Projects</a>
              <a href="#journey" className="hover:text-accent transition-colors">Professional Journey</a>
              <a href="#contact" className="hover:text-accent transition-colors">Connect</a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Contact Details</h4>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors flex items-center gap-3">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {PERSONAL_INFO.email}
              </a>
              <div className="text-sm font-bold text-zinc-600 dark:text-zinc-400 flex items-center gap-3">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {PERSONAL_INFO.phone}
              </div>
              <a href="#" className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all w-fit group/btn">
                <svg className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download Resume PDF
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-20 pt-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 italic">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Karunya Institute of Technology and Sciences.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-zinc-950 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {PROJECTS.find(p => p.id === selectedProject) && (
              <div className="p-8 md:p-12">
                {(() => {
                  const project = PROJECTS.find(p => p.id === selectedProject);
                  return (
                    <>
                      <div className="flex justify-between items-start mb-8">
                        <h2 className="text-4xl font-bold">{project?.title}</h2>
                        <button onClick={() => setSelectedProject(null)} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>
                      
                      <div className="mb-8">
                        <img src={project?.imageUrl} alt={project?.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-bold text-accent mb-3">Problem Statement</h3>
                          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{project?.problem}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-accent mb-3">Solution & Impact</h3>
                          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{project?.impact}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-accent mb-3">Role</h3>
                          <p className="text-zinc-700 dark:text-zinc-300">{project?.role}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-accent mb-3">Tech Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {project?.stack.map(s => (
                              <span key={s} className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent font-semibold text-sm">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                          <a href={project?.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all text-center">
                            Live Demo
                          </a>
                          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent text-zinc-900 dark:text-zinc-100 font-bold rounded-xl transition-all text-center">
                            View Code
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


export default App;
