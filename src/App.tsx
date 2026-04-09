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
            <a href="#about" className="hover:text-brand-mint-green transition-colors">Sobre</a>
            <a href="#solutions" className="hover:text-brand-mint-green transition-colors">Soluções</a>
            <a href="#lab" className="hover:text-brand-mint-green transition-colors">Laboratório</a>
            <a href="#contact" className="hover:text-brand-mint-green transition-colors">Contato</a>
          </div>
          <Button variant="outline" className="text-micro h-9">
            GITHUB <Github className="ml-2 w-3 h-3" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(var(--color-brand-mint-green) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div {...fadeIn} className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-brand-mint-green/50 text-brand-mint-green text-micro px-3 py-1">
              v1.0.0 // STATUS: OPERATIONAL
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 tracking-tighter">
              ARQUITETURA DE <br />
              <span className="text-brand-mint-green italic">SOFTWARE</span> COM <br />
              RIGOR CIENTÍFICO.
            </h1>
            <p className="text-brand-mist-green/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              OpenLab é um laboratório de experimentação técnica focado em soluções open source robustas, 
              unindo a precisão da engenharia com a abertura da comunidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 h-12 text-micro font-bold">
                EXPLORAR REPOSITÓRIOS
              </Button>
              <Button variant="outline" size="lg" className="px-8 h-12 text-micro">
                VER PROJETOS ERP/CMS
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Code Snippet / Visual Element */}
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
{`class OpenLab {
  constructor() {
    this.values = ["Abertura", "Inovação", "Precisão"];
    this.focus = "Open Source Solutions";
  }

  async solve(problem) {
    const experiment = await this.lab.test(problem);
    if (experiment.isRobust()) {
      return this.community.share(experiment);
    }
  }
}

// Initializing laboratory...
const lab = new OpenLab();
lab.status = "ACTIVE";`}
            </pre>
          </div>
        </motion.div>
      </section>

      {/* About Section - Theory vs Practice */}
      <section id="about" className="py-24 px-6 border-y border-brand-deep-green/30 bg-brand-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h3 className="text-micro text-brand-mint-green mb-4">01 // CONCEITO</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">O QUE É A OPENLAB?</h2>
              <div className="space-y-6 text-brand-mist-green/80 leading-relaxed">
                <p>
                  Na <span className="text-brand-mint-green font-bold italic">teoria</span>, a OpenLab é um ecossistema de soluções de software open source, 
                  desenhado para promover o estudo profundo e a colaboração técnica entre desenvolvedores e arquitetos.
                </p>
                <p>
                  Na <span className="text-brand-mint-green font-bold italic">prática</span>, é o meu laboratório pessoal como arquiteto de software. 
                  Aqui, transformo desafios corporativos complexos em repositórios modulares, escaláveis e transparentes.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FlaskConical, label: "EXPERIMENTAÇÃO", desc: "Método científico aplicado ao código." },
                { icon: Code2, label: "OPEN SOURCE", desc: "Transparência total e colaboração." },
                { icon: Layers, label: "ARQUITETURA", desc: "Sistemas robustos e escaláveis." },
                { icon: Users, label: "COMUNIDADE", desc: "Crescimento coletivo e troca." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6 rounded-lg flex flex-col gap-4 hover:border-brand-mint-green/40 transition-colors group"
                >
                  <item.icon className="w-6 h-6 text-brand-mint-green group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[10px] font-bold tracking-widest mb-1">{item.label}</div>
                    <div className="text-[10px] opacity-60 leading-tight">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h3 className="text-micro text-brand-mint-green mb-4">02 // PORTFÓLIO</h3>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">SOLUÇÕES CORPORATIVAS</h2>
              <p className="text-brand-mist-green/60 mt-4">
                Projetos desenvolvidos com foco em alta performance e manutenibilidade, servindo como base para sistemas de missão crítica.
              </p>
            </div>
            <Button variant="link" className="text-brand-mint-green text-micro p-0 h-auto hover:no-underline group">
              VER TODOS NO GITHUB <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Core ERP Engine", 
                type: "ENTERPRISE", 
                desc: "Arquitetura modular para gestão de recursos, focada em eventos e consistência eventual.",
                tags: ["Node.js", "PostgreSQL", "Kafka"]
              },
              { 
                title: "Headless CMS Lab", 
                type: "CONTENT", 
                desc: "Sistema de gerenciamento de conteúdo focado em performance e SEO, com API-first approach.",
                tags: ["TypeScript", "Redis", "GraphQL"]
              },
              { 
                title: "Auth Gateway", 
                type: "SECURITY", 
                desc: "Solução de identidade e acesso centralizada, implementando protocolos OAuth2 e OpenID Connect.",
                tags: ["Go", "Docker", "OIDC"]
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <Card className="bg-brand-deep-green/5 border-brand-deep-green/30 h-full flex flex-col overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Terminal className="w-5 h-5 text-brand-mint-green" />
                  </div>
                  <CardHeader>
                    <div className="text-[9px] text-brand-mint-green font-bold tracking-[0.3em] mb-2">{project.type}</div>
                    <CardTitle className="text-xl group-hover:text-brand-mint-green transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-brand-mist-green/70 mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <Badge key={j} variant="secondary" className="bg-brand-deep-green/20 text-brand-mint-green text-[9px] border-none">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Section - Open Source */}
      <section id="lab" className="py-24 px-6 bg-brand-mint-green text-brand-night-forest">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-night-forest/5 rounded-full blur-3xl"></div>
              <motion.div 
                initial={{ rotate: -5 }}
                whileInView={{ rotate: 0 }}
                className="relative glass-panel border-brand-night-forest/20 p-8 rounded-2xl shadow-2xl bg-brand-night-forest/5"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-brand-night-forest flex items-center justify-center">
                    <Cpu className="text-brand-mint-green w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl tracking-tight">LABORATÓRIO ABERTO</div>
                    <div className="text-[10px] font-bold opacity-60 tracking-widest uppercase">Open Source Initiative</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-brand-night-forest/10 rounded-lg border border-brand-night-forest/10">
                    <div className="text-xs font-bold mb-1">CONTRIBUIÇÃO</div>
                    <div className="text-sm opacity-80">Repositórios públicos para estudo e evolução coletiva.</div>
                  </div>
                  <div className="p-4 bg-brand-night-forest/10 rounded-lg border border-brand-night-forest/10">
                    <div className="text-xs font-bold mb-1">TRANSPARÊNCIA</div>
                    <div className="text-sm opacity-80">Processos de decisão e arquitetura documentados.</div>
                  </div>
                  <div className="p-4 bg-brand-night-forest/10 rounded-lg border border-brand-night-forest/10">
                    <div className="text-xs font-bold mb-1">EVOLUÇÃO</div>
                    <div className="text-sm opacity-80">Iteração constante baseada em feedback real.</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div {...fadeIn}>
              <h3 className="text-micro font-bold opacity-60 mb-4">03 // FILOSOFIA</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter leading-none">
                CÓDIGO QUE <br />
                <span className="italic">PERTENCE</span> AO <br />
                MUNDO.
              </h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed">
                Acreditamos que a inovação não deve ser guardada em silos. 
                Nossos repositórios são laboratórios vivos onde a teoria encontra a prática, 
                disponíveis para qualquer um estudar, colaborar e evoluir.
              </p>
              <Button variant="secondary" className="px-10 h-14 text-micro font-bold">
                ACESSAR LABORATÓRIO <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 border-b border-brand-deep-green/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "ABERTURA", value: "OPEN", desc: "Transparência total" },
              { label: "INOVAÇÃO", value: "LAB", desc: "Experimentação constante" },
              { label: "PRECISÃO", value: "CODE", desc: "Rigor técnico" },
              { label: "COMUNIDADE", value: "CORE", desc: "Crescimento coletivo" }
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-micro text-brand-mint-green mb-2">{v.label}</div>
                <div className="text-4xl font-bold tracking-tighter mb-2">{v.value}</div>
                <div className="text-[10px] opacity-40 uppercase tracking-widest">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-20 px-6 bg-brand-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <Logo className="mb-8" />
              <p className="text-brand-mist-green/50 max-w-sm mb-8 leading-relaxed">
                Construindo o futuro do software através da colaboração e do rigor técnico. 
                Vamos conversar sobre o seu próximo desafio?
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="outline">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-micro text-brand-mint-green mb-6">NAVEGAÇÃO</h4>
                <ul className="space-y-4 text-sm opacity-60">
                  <li><a href="#" className="hover:text-brand-mint-green transition-colors">Início</a></li>
                  <li><a href="#about" className="hover:text-brand-mint-green transition-colors">Sobre</a></li>
                  <li><a href="#solutions" className="hover:text-brand-mint-green transition-colors">Soluções</a></li>
                  <li><a href="#lab" className="hover:text-brand-mint-green transition-colors">Laboratório</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-micro text-brand-mint-green mb-6">LEGAL</h4>
                <ul className="space-y-4 text-sm opacity-60">
                  <li><a href="#" className="hover:text-brand-mint-green transition-colors">Privacidade</a></li>
                  <li><a href="#" className="hover:text-brand-mint-green transition-colors">Termos</a></li>
                  <li><a href="#" className="hover:text-brand-mint-green transition-colors">Licença MIT</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="bg-brand-deep-green/30 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-40 tracking-widest uppercase">
            <div>© 2024 OPENLAB // ALL RIGHTS RESERVED</div>
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" /> BASED IN BRAZIL // SERVING THE WORLD
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
