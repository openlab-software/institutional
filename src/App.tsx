import { motion } from "motion/react";
import { 
  Github, 
  Layers, 
  Code2, 
  FlaskConical, 
  Users, 
  ArrowUpRight, 
  Terminal,
  Cpu,
  Globe,
  Mail,
  Linkedin
} from "lucide-react";
import { Logo } from "@/src/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-night-forest text-brand-light-gray selection:bg-brand-mint-green selection:text-brand-night-forest overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-micro">
            <a href="#about" className="hover:text-brand-mint-green transition-colors">Missão</a>
            <a href="#pillars" className="hover:text-brand-mint-green transition-colors">Pilares</a>
            <a href="#solutions" className="hover:text-brand-mint-green transition-colors">Software</a>
            <a href="#contact" className="hover:text-brand-mint-green transition-colors">Contato</a>
          </div>
          <Button variant="outline" className="text-micro h-9" asChild>
            <a href="https://github.com/openlab-software" target="_blank" rel="noreferrer" className="flex">
              GITHUB <Github className="ml-2 w-3 h-3" />
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(var(--color-brand-mint-green) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div {...fadeIn} className="max-w-4xl">
            <Badge variant="outline" className="mb-6 border-brand-mint-green/50 text-brand-mint-green text-micro px-3 py-1">
              v1.0.0 // ECOSSISTEMA OPEN SOURCE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 tracking-tighter uppercase">
              CONSTRUA ECOSSISTEMAS <br />
              DE <span className="text-brand-mint-green italic">SOFTWARE</span> COM <br />
              CONSISTÊNCIA.
            </h1>
            <p className="text-brand-mist-green/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              O OpenLab endereça os desafios estruturais de alta maturidade tecnológica: 
              da infraestrutura crítica à extensibilidade total, sem acumular dívida arquitetural.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 h-12 text-micro font-bold" asChild>
                <a href="https://github.com/openlab-software" target="_blank" rel="noreferrer">
                  EXPLORAR O ECOSSISTEMA
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Code Snippet */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="glass-panel p-6 rounded-xl w-[500px] font-mono text-[10px] text-brand-mint-green/60">
            <div className="flex gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
            <pre>
{`const OpenLab = {
  mission: "Endereçar desafios estruturais",
  pillars: ["Infraestrutura", "Software", "Extensibilidade"],
  approach: "Documentar e disponibilizar peças",
  goal: "Crescer sem dívida arquitetural"
};

// Sustentando operações com controle e autonomia
OpenLab.deploy({
  maturity: "HIGH",
  openSource: true,
  vendorLockIn: false
});`}
            </pre>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-24 px-6 border-y border-brand-deep-green/30 bg-brand-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h3 className="text-micro text-brand-mint-green mb-4">01 // MISSÃO</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">RESOLVENDO O CORE TECNOLÓGICO</h2>
              <div className="space-y-6 text-brand-mist-green/80 leading-relaxed">
                <p>
                  Toda empresa enfrenta os mesmos desafios: como construir uma base sólida, sustentar operações com autonomia e crescer sem acumular <span className="text-brand-mint-green italic">dívida arquitetural</span>.
                </p>
                <p className="font-bold text-brand-light-gray">
                  A proposta do OpenLab não é entregar um produto fechado. É documentar e disponibilizar as peças que permitem que qualquer um construa e mantenha um ecossistema de software com consistência.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="glass-panel p-8 rounded-2xl border-brand-mint-green/20">
                <div className="flex items-center gap-3 mb-6">
                  <FlaskConical className="text-brand-mint-green w-6 h-6" />
                  <span className="text-micro font-bold tracking-widest">LABORATÓRIO DE ARQUITETURA</span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed mb-6">
                  Atuo como Arquiteto de Software transformando decisões que normalmente exigem anos de experiência em componentes open source prontos para uso.
                </p>
                <Separator className="bg-brand-mint-green/20 mb-6" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-brand-mint-green">100%</div>
                    <div className="text-[9px] opacity-50 uppercase tracking-widest">Open Source</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-mint-green">ZERO</div>
                    <div className="text-[9px] opacity-50 uppercase tracking-widest">Vendor Lock-in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-micro text-brand-mint-green mb-4">02 // OS TRÊS PILARES</h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">O FUNDAMENTO DO ECOSSISTEMA</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Cpu, 
                title: "INFRAESTRUTURA", 
                desc: "O ponto de partida. Endereçamos redes, serviços, orquestração e observabilidade com alta maturidade.",
                detail: "Decisões arquiteturais complexas simplificadas."
              },
              { 
                icon: Layers, 
                title: "SOFTWARE", 
                desc: "Soluções voltadas para problemas operacionais reais, integradas nativamente com a infraestrutura.",
                detail: "Redução total de fricção entre camadas."
              },
              { 
                icon: Code2, 
                title: "EXTENSIBILIDADE", 
                desc: "Projetado para ser adaptado. Qualquer parte pode ser estendida, substituída ou contribuída.",
                detail: "Liberdade total para evoluir sua visão."
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-xl hover:border-brand-mint-green/40 transition-all group"
              >
                <pillar.icon className="w-10 h-10 text-brand-mint-green mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">{pillar.title}</h4>
                <p className="text-brand-mist-green/70 text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <div className="text-[10px] text-brand-mint-green font-bold tracking-widest uppercase opacity-60">
                  {pillar.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-brand-mint-green text-brand-night-forest">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter leading-none uppercase">
            NÃO É UM PRODUTO FECHADO. <br />
            É UM <span className="italic">CAMINHO</span> PARA A <br />
            CONSISTÊNCIA.
          </h2>
          <p className="text-lg opacity-80 mb-10 leading-relaxed">
            Acesse as peças, documentações e repositórios que permitem construir ecossistemas de software de alta maturidade.
          </p>
          <Button variant="secondary" className="h-14 text-micro font-bold" asChild>
            <a href="https://github.com/openlab-software" target="_blank" rel="noreferrer" className="flex">
              ACESSAR O LABORATÓRIO <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 bg-brand-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <Logo className="mb-8" />
              <p className="text-brand-mist-green/50 max-w-sm mb-8 leading-relaxed">
                Documentando e disponibilizando as peças para ecossistemas de software robustos.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="outline">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a href="https://github.com/openlab-software" target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="icon" variant="outline">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-micro text-brand-mint-green mb-6">RECURSOS</h4>
                <ul className="space-y-4 text-sm opacity-60">
                  <li><a href="#" className="hover:text-brand-mint-green transition-colors">Documentação</a></li>
                  <li><a href="#pillars" className="hover:text-brand-mint-green transition-colors">Pilares</a></li>
                  <li><a href="#solutions" className="hover:text-brand-mint-green transition-colors">Software</a></li>
                  <li><a href="https://github.com/openlab-software" target="_blank" rel="noreferrer" className="hover:text-brand-mint-green transition-colors">GitHub</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-micro text-brand-mint-green mb-6">COMUNIDADE</h4>
                <ul className="space-y-4 text-sm opacity-60">
                  <li><a href="#" className="hover:text-brand-mint-green transition-colors">Contribuição</a></li>
                  <li><a href="#" className="hover:text-brand-mint-green transition-colors">Discussões</a></li>
                  <li><a href="#" className="hover:text-brand-mint-green transition-colors">Licença MIT</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="bg-brand-deep-green/30 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-40 tracking-widest uppercase">
            <div>© 2024 OPENLAB // ARCHITECTING CONSISTENCY</div>
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" /> OPEN SOURCE ECOSYSTEM
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
