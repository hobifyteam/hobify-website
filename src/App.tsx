/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Coffee, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Instagram,
  Menu,
  X,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const USER_FORM_URL = "https://airtable.com/appWZJDYQJrjqjcvb/pagdJlz9MKjyD9sMv/form";
const BUSINESS_FORM_URL = "https://airtable.com/appWZJDYQJrjqjcvb/pag6nDrvwp9yh7cWI/form";
const WHATSAPP_URL = "https://chat.whatsapp.com/HKLAB88gw8FAd2UwifsxMS?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnfWcJBP-vssw7UQM7GFo0U0ZunV8KaSv9yVjoUbwt2JNEt25ia6-r9EgakBU_aem_pA9Vr0c6oR5tG-Isf7qheQ";

const HobifyLogo = ({ className = "h-10" }: { className?: string }) => (
  <img 
    src="/Hobify_LOGO_PNG.png" 
    alt="Hobify Logo" 
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
  />
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Logo Placeholder - User should upload their logo to /src/logo.png */}
            <div className="h-10 flex items-center">
              <HobifyLogo />
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-brand transition-colors">How it works</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium hover:text-brand transition-colors">Experience</button>
            <button onClick={() => scrollToSection('whatsapp')} className="text-sm font-medium hover:text-brand transition-colors">Community</button>
            <button onClick={() => scrollToSection('businesses')} className="text-sm font-medium hover:text-brand transition-colors">For Businesses</button>
            <a 
              href={USER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
            >
              Join Hobify
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-surface border-b border-ink/5 px-6 py-8 flex flex-col gap-6"
          >
            <button onClick={() => scrollToSection('how-it-works')} className="text-lg font-medium text-left">How it works</button>
            <button onClick={() => scrollToSection('experience')} className="text-lg font-medium text-left">Experience</button>
            <button onClick={() => scrollToSection('whatsapp')} className="text-lg font-medium text-left">Community</button>
            <button onClick={() => scrollToSection('businesses')} className="text-lg font-medium text-left">For Businesses</button>
            <a 
              href={USER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-6 py-4 rounded-xl text-center font-bold"
            >
              Join Hobify
            </a>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative px-6 pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
                Get out. <br />
                Try something new. <br />
                <span className="text-brand">Meet your people.</span>
              </h1>
              <p className="text-xl text-ink-muted mb-10 max-w-lg leading-relaxed">
                We match you with real-life activities based on what you love. Small groups, big experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={USER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group"
                >
                  Join Hobify
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="bg-white border-2 border-ink/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-ink/5 transition-all text-center"
                >
                  See how it works
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000" 
                  alt="Friends having fun" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 -rotate-6">
                <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold">Small Groups</p>
                  <p className="text-[10px] text-ink-muted">5-15 people</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 rotate-6">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold">First event free</p>
                  <p className="text-[10px] text-ink-muted">No pressure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-ink text-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
              <p className="text-white/60 text-lg">Simple steps to your next adventure</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Fill the form",
                  desc: "Tell us what you’re into, your location, and when you're free.",
                  icon: <Calendar className="w-8 h-8" />
                },
                {
                  step: "02",
                  title: "We match you",
                  desc: "Based on your vibe, location, and schedule. We find your perfect group.",
                  icon: <Zap className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "You join",
                  desc: "We invite you to a real activity with the right people. Just show up!",
                  icon: <Users className="w-8 h-8" />
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-brand font-display font-black text-6xl opacity-20 absolute top-4 right-8">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand/20">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Community Section */}
        <section id="whatsapp" className="py-24 px-6 bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-accent/10 border border-accent/10"
            >
              <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-brand/30">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay UpToDate</h2>
              <p className="text-xl text-ink-muted mb-10 max-w-2xl mx-auto">
                Join our WhatsApp community to get the latest updates on new activities, matches, and exclusive events.
              </p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 hover:scale-105"
              >
                Join WhatsApp Community
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" 
                      alt="Hobby 1" 
                      className="rounded-2xl aspect-[3/4] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" 
                      alt="Hobby 2" 
                      className="rounded-2xl aspect-square object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600" 
                      alt="Hobby 3" 
                      className="rounded-2xl aspect-square object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" 
                      alt="Hobby 4" 
                      className="rounded-2xl aspect-[3/4] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  The Hobify Experience
                </h2>
                <ul className="space-y-6 mb-10">
                  {[
                    "Small groups (typically 5–15 people) for real connection",
                    "Friendly, curated vibe in every activity",
                    "Zero pressure, just pure discovery",
                    "Your first event is on us!"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-lg text-ink-muted">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-surface border-2 border-brand/20 p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 text-brand/10">
                    <Coffee className="w-24 h-24 rotate-12" />
                  </div>
                  <p className="text-2xl font-display font-bold italic relative z-10">
                    "Just bring your energy <span className="not-italic">⚡</span> <br />
                    Next time… you can get us a coffee <span className="not-italic">☕</span>"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vibe Section */}
        <section className="py-20 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-xl font-display font-bold text-ink/40">
              <Zap className="w-6 h-6" />
              No more boring routines
            </div>
            <div className="flex items-center gap-3 text-xl font-display font-bold text-ink/40">
              <MapPin className="w-6 h-6" />
              Just real people
            </div>
            <div className="flex items-center gap-3 text-xl font-display font-bold text-ink/40">
              <Users className="w-6 h-6" />
              Real activities
            </div>
          </div>
        </section>

        {/* CTA Section - Users */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to try something new?</h2>
            <p className="text-xl text-ink-muted mb-12">
              Join hundreds of people finding their hobbies and their tribe.
            </p>
            <a 
              href={USER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-brand-dark transition-all shadow-2xl shadow-brand/30 hover:scale-105"
            >
              Join Hobify Now
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Businesses Section */}
        <section id="businesses" className="py-24 px-6 bg-ink text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-[100px] -z-0" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Own a hobby, class, or experience?
                </h2>
                <p className="text-xl text-white/60 mb-10 leading-relaxed">
                  We bring you clients. You focus on what you love. Let's grow your community together.
                </p>
                <a 
                  href={BUSINESS_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-ink px-10 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all"
                >
                  Work with us
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <h4 className="text-3xl font-bold text-accent mb-2">100%</h4>
                  <p className="text-white/60 text-sm">Targeted Audience</p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <h4 className="text-3xl font-bold text-accent mb-2">Zero</h4>
                  <p className="text-white/60 text-sm">Marketing Stress</p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 col-span-2">
                  <h4 className="text-3xl font-bold text-accent mb-2">Growth</h4>
                  <p className="text-white/60 text-sm">Focus on your craft, we handle the rest.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-ink/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <HobifyLogo className="h-12 mb-6" />
              <p className="text-ink-muted max-w-sm leading-relaxed">
                Helping people discover and join hobbies in real life. 
                Meet new people, try new things, and improve your lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-ink-muted">
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-brand transition-colors">How it works</button></li>
                <li><button onClick={() => scrollToSection('experience')} className="hover:text-brand transition-colors">Experience</button></li>
                <li><button onClick={() => scrollToSection('whatsapp')} className="hover:text-brand transition-colors">Community</button></li>
                <li><button onClick={() => scrollToSection('businesses')} className="hover:text-brand transition-colors">For Businesses</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Connect</h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.instagram.com/hobify_/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ink-muted hover:text-brand transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @hobify_
                </a>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ink-muted hover:text-brand transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Community
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-ink/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-ink-muted">
              © {new Date().getFullYear()} Hobify. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-ink-muted">
              <a href="#" className="hover:text-brand">Privacy Policy</a>
              <a href="#" className="hover:text-brand">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
