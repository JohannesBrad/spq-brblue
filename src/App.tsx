import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Zap, 
  ArrowRight, 
  Layers, 
  Smartphone, 
  Terminal,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Logo } from './components/Logo';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-text-primary selection:bg-electric-blue/10 selection:text-electric-blue overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-silver/20">
        <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
          <div className="flex flex-col gap-0.5 group cursor-pointer">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <div className="text-[12px] font-bold tracking-[0.3em] uppercase text-navy leading-none">
                BR BLUE // <span className="text-electric-blue">TECH CORP</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {['Solutions', 'Infrastructure', 'Innovation', 'Company'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[14px] font-bold uppercase tracking-widest text-navy/60 hover:text-electric-blue transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-navy text-white px-8 py-3 rounded-none text-[12px] font-bold uppercase tracking-widest hover:bg-electric-blue transition-all transform active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              className="absolute top-24 left-0 right-0 bg-white border-b border-silver/20 p-10 flex flex-col gap-6 md:hidden shadow-2xl origin-top"
            >
              {['Solutions', 'Infrastructure', 'Innovation', 'Company'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-black uppercase tracking-tighter text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-navy text-white w-full py-5 rounded-none font-bold uppercase tracking-widest mt-4">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-52 pb-32 px-10 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-silver mb-8 block">
              VER_4.0_SYSTEM_READY // 2026
            </div>
            
            <h1 className="text-8xl md:text-[10rem] font-black text-navy leading-[0.8] tracking-[-0.06em] mb-12">
              B<span className="text-electric-blue">R</span><br />
              BLUE
            </h1>
            
            <p className="text-xl text-text-primary mb-12 leading-tight max-w-lg font-medium">
              High-performance technology infrastructure. Minimalist geometric precision for the next generation of global software.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="bg-navy text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-electric-blue">
                Explore Systems
                <ArrowRight size={18} />
              </button>
              <button className="bg-white text-navy border-2 border-navy px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
                The Portfolio
              </button>
            </div>
            
            <div className="mt-24 grid grid-cols-3 gap-10 border-t border-silver/20 pt-10">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver">Core.Spec</span>
                <span className="text-sm font-bold uppercase tracking-tight text-navy">High-Bandwidth</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver">Net.Protocol</span>
                <span className="text-sm font-bold uppercase tracking-tight text-navy">Zero-Latency</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver">Sec.Vault</span>
                <span className="text-sm font-bold uppercase tracking-tight text-navy">Encrypted.v2</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square relative flex items-center justify-center">
              {/* Massive Monogram Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <div className="text-[30rem] font-black tracking-[-0.1em] leading-none text-navy">BR</div>
              </div>
              
              {/* Tech Schematic Visual */}
              <div className="w-full h-full border border-silver/30 p-12 relative">
                <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-silver text-right uppercase leading-relaxed">
                  [IDENTITY_SPECS]<br />
                  HEX_#0070FF<br />
                  HEX_#001A33
                </div>
                
                <div className="w-full h-full bg-slate-50 relative overflow-hidden group">
                  <img 
                    src="https://picsum.photos/seed/br-blue/1000/1000" 
                    alt="Technical infrastructure" 
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
                  
                  {/* Decorative corner lines */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-electric-blue" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-electric-blue" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 px-10 bg-white border-y border-silver/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline gap-6 mb-24">
            <h2 className="text-7xl font-black text-navy tracking-tight uppercase">Solutions</h2>
            <div className="h-px flex-1 bg-silver/30" />
            <div className="font-mono text-[10px] text-silver uppercase">[INFRASTRUCTURE_MODULES]</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-silver/20">
            {[
              {
                icon: <Terminal size={20} />,
                title: "Custom Systems",
                id: "01"
              },
              {
                icon: <ShieldCheck size={20} />,
                title: "Security Layers",
                id: "02"
              },
              {
                icon: <Globe size={20} />,
                title: "Cloud.NET",
                id: "03"
              },
              {
                icon: <Smartphone size={20} />,
                title: "Integration.v4",
                id: "04"
              }
            ].map((service) => (
              <div
                key={service.title}
                className="group border-r border-b border-silver/20 p-12 hover:bg-navy transition-all duration-500 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-slate-50 text-navy group-hover:bg-electric-blue group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <span className="font-mono text-[10px] text-silver group-hover:text-electric-blue">{service.id}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 group-hover:text-silver transition-colors">
                  Minimalist architecture built for high-performance scalability and cross-platform precision.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-32 px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-electric-blue mb-10">
            [THE_LAB_REPORT]
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-navy leading-none tracking-tight mb-20 max-w-4xl uppercase">
            Constant innovation <span className="text-silver">is the standard</span>
          </h2>
          
          <div className="w-full grid md:grid-cols-3 gap-16 max-w-5xl">
            {[
              { title: "Consensus", val: 92, unit: "MB/S" },
              { title: "Latencies", val: 0.04, unit: "MS" },
              { title: "Protection", val: 100, unit: "%" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="text-5xl font-black text-navy mb-2">{item.val}<span className="text-lg ml-1 text-silver">{item.unit}</span></div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-electric-blue font-bold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-10 bg-navy">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
            Ready to <br /><span className="text-electric-blue">Sync?</span>
          </h2>
          <div className="flex flex-col gap-6 md:w-1/3">
            <p className="text-silver leading-relaxed font-medium">
              Join the elite tier of enterprises running on BR Blue infrastructure. Professional-grade results, guaranteed.
            </p>
            <button className="bg-electric-blue text-white w-full py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
              Initialize Project
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-10 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr_1fr] gap-20">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <Logo size={28} />
              <div className="text-[14px] font-black tracking-[0.2em] uppercase text-navy">
                BR BLUE // <span className="text-electric-blue text-[10px]">[HQ]</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-10">
              Minimalist geometric monogram representing connectivity and precision in the digital age. San Francisco, CA.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 bg-slate-50 text-navy hover:bg-electric-blue hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-10">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-silver mb-6">Directory</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-navy">
                <li><a href="#" className="hover:text-electric-blue transition-colors">Infrastructure</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Applications</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Asset Pack</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-silver mb-6">Company</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-navy">
                <li><a href="#" className="hover:text-electric-blue transition-colors">The Missions</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Tech Stack</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Terminal</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-silver/20 flex flex-col md:flex-row justify-between gap-6 font-mono text-[9px] text-silver uppercase tracking-[0.2em]">
          <p>© 2026 BR BLUE TECHNOLOGY GROUP. ALL SYSTEMS OPERATIONAL.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-navy transition-colors">Legal_Protocols</a>
            <a href="#" className="hover:text-navy transition-colors">Data_Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
