import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CheckCircle2, Image, MessageSquareText, Sparkles, ShieldCheck, BookOpenCheck, Accessibility, GraduationCap, Code, ExternalLink, Mail, PlayCircle, Layers, FileText, Users } from 'lucide-react';
import './styles.css';

const CONFIG = {
  gptLink: 'https://chatgpt.com/g/https://chatgpt.com/g/g-6a26fda220c8819188b4c522a002b0e3-audiodescricao-educacional',
  projectName: 'GPT Audiodescritor Educacional',
  subtitle: 'Apoio à criação de audiodescrições de imagens para contextos educacionais.',
  ownerName: 'Profa. Dra. Mariella Berger Andrade',
  institution: 'Cefor/Ifes',
  contactEmail: 'mariellaberger@gmail.com',
};

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Logos />
      <About />
      <HowItWorks />
      <Examples />
      <Principles />
      <UseCases />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Menu principal">
        <a className="brand" href="#inicio" aria-label="Página inicial">
          <span className="brand-icon"><Accessibility size={22} /></span>
          <span>{CONFIG.projectName}</span>
        </a>
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#exemplos">Exemplos</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav-button" href={CONFIG.gptLink} target="_blank" rel="noreferrer">
          Acessar GPT <ExternalLink size={16} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Inteligência artificial, acessibilidade e educação</span>
          <h1>{CONFIG.projectName}</h1>
          <p className="lead">{CONFIG.subtitle}</p>
          <p className="hero-text">
            Uma página para apresentar e disponibilizar um GPT criado no ChatGPT, pensado para apoiar professores, designers educacionais e equipes de EaD na elaboração de audiodescrições claras, objetivas e pedagogicamente situadas.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={CONFIG.gptLink} target="_blank" rel="noreferrer">
              Experimentar agora <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#exemplos">
              Ver exemplos <PlayCircle size={18} />
            </a>
          </div>
          <div className="hero-badges" aria-label="Características do projeto">
            <span><CheckCircle2 size={16} /> Educacional</span>
            <span><CheckCircle2 size={16} /> Acessível</span>
            <span><CheckCircle2 size={16} /> Personalizável</span>
          </div>
        </div>
        <div className="hero-card" aria-label="Demonstração ilustrativa do GPT">
          <div className="browser-dots"><span></span><span></span><span></span></div>
          <div className="chat-card user">
            <Image size={18} />
            <p>Crie uma audiodescrição para esta imagem de um estudante usando um tablet em aula.</p>
          </div>
          <div className="chat-card bot">
            <MessageSquareText size={18} />
            <p><strong>Audiodescrição sugerida:</strong> Em uma sala de aula iluminada, um estudante sentado à mesa utiliza um tablet. Ao fundo, há materiais escolares e outros colegas em atividade...</p>
          </div>
          <div className="mini-panel">
            <div><strong>Tom</strong><span>claro e objetivo</span></div>
            <div><strong>Contexto</strong><span>material didático</span></div>
            <div><strong>Saída</strong><span>texto revisável</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section className="strip">
      <div className="container strip-content">
        <span>Projeto educacional</span>
        <span>Design universal</span>
        <span>Audiodescrição</span>
        <span>Educação a distância</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section">
      <div className="container two-col">
        <div>
          <span className="section-kicker">Sobre o projeto</span>
          <h2>Uma ferramenta de apoio, não de substituição, ao trabalho humano.</h2>
        </div>
        <div className="text-block">
          <p>
            O {CONFIG.projectName} foi pensado para auxiliar na elaboração inicial de audiodescrições de imagens utilizadas em materiais didáticos, ambientes virtuais de aprendizagem, apresentações, cursos e objetos educacionais digitais.
          </p>
          <p>
            A proposta é apoiar a produção de descrições mais consistentes, mantendo a revisão humana como etapa essencial para adequação pedagógica, cultural, comunicacional e de acessibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: <Image />, title: 'Envie ou descreva a imagem', text: 'Informe a imagem, o contexto de uso e o público-alvo.' },
    { icon: <FileText />, title: 'Receba uma versão inicial', text: 'O GPT gera uma audiodescrição estruturada e revisável.' },
    { icon: <BookOpenCheck />, title: 'Revise pedagogicamente', text: 'Ajuste vocabulário, intenção didática e informações relevantes.' },
  ];
  return (
    <section id="como-funciona" className="section tinted">
      <div className="container">
        <span className="section-kicker">Como funciona</span>
        <h2>Da imagem à descrição em três passos.</h2>
        <div className="cards three">
          {steps.map((step, index) => (
            <article className="card" key={step.title}>
              <span className="step">0{index + 1}</span>
              <div className="icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Examples() {
  return (
    <section id="exemplos" className="section">
      <div className="container">
        <span className="section-kicker">Exemplos de uso</span>
        <h2>Modelos de saída que podem ser adaptados ao material.</h2>
        <div className="example-grid">
          <article className="example-card">
            <div className="placeholder gradient-one"><GraduationCap size={44} /></div>
            <h3>Imagem em material didático</h3>
            <p><strong>Exemplo:</strong> “Fotografia horizontal de uma professora em frente a uma lousa, apontando para um esquema com setas. Três estudantes observam a explicação...”</p>
          </article>
          <article className="example-card">
            <div className="placeholder gradient-two"><Layers size={44} /></div>
            <h3>Infográfico ou esquema</h3>
            <p><strong>Exemplo:</strong> “Infográfico dividido em três blocos conectados por setas. O primeiro bloco indica planejamento, o segundo produção e o terceiro avaliação...”</p>
          </article>
          <article className="example-card">
            <div className="placeholder gradient-three"><Users size={44} /></div>
            <h3>Imagem de interação social</h3>
            <p><strong>Exemplo:</strong> “Grupo de quatro estudantes reunidos em torno de uma mesa, manipulando cartões coloridos durante uma atividade colaborativa...”</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const items = [
    'Descrever o que é visualmente relevante para o objetivo educacional.',
    'Evitar julgamentos, inferências desnecessárias ou excesso de detalhes.',
    'Usar linguagem clara, objetiva e adequada ao público.',
    'Considerar contexto, finalidade didática e revisão humana.',
  ];
  return (
    <section className="section dark">
      <div className="container two-col align-center">
        <div>
          <span className="section-kicker light">Princípios</span>
          <h2>Boas audiodescrições são intencionais, situadas e revisadas.</h2>
        </div>
        <div className="check-list">
          {items.map(item => <p key={item}><ShieldCheck size={19} /> {item}</p>)}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = ['Cursos EaD', 'Slides e apresentações', 'Materiais didáticos digitais', 'Objetos de aprendizagem', 'Atividades no Moodle', 'Produtos educacionais'];
  return (
    <section className="section">
      <div className="container center">
        <span className="section-kicker">Aplicações</span>
        <h2>Onde o GPT pode apoiar?</h2>
        <div className="pill-grid">
          {cases.map(item => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'O GPT substitui um audiodescritor profissional?', a: 'Não. Ele apoia a criação de versões iniciais, mas a revisão humana é indispensável.' },
    { q: 'Posso usar em materiais educacionais?', a: 'Sim, especialmente como apoio à elaboração e revisão de descrições em materiais didáticos e ambientes virtuais.' },
    { q: 'O estudante precisa ter conta no ChatGPT?', a: 'Se o acesso for pelo link de um GPT público no ChatGPT, normalmente será necessário acessar a plataforma.' },
    { q: 'Posso adaptar esta página?', a: 'Sim. O projeto foi organizado para facilitar edição de textos, links, cores e seções.' },
  ];
  return (
    <section id="faq" className="section tinted">
      <div className="container">
        <span className="section-kicker">Perguntas frequentes</span>
        <h2>Dúvidas comuns.</h2>
        <div className="faq-list">
          {faqs.map(item => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section cta-section">
      <div className="container cta-box">
        <div>
          <span className="section-kicker light">Comece agora</span>
          <h2>Experimente o GPT e gere sua primeira audiodescrição.</h2>
          <p>Use o botão abaixo para acessar o GPT no ChatGPT. Depois, substitua o link no código pelo endereço público do seu GPT.</p>
        </div>
        <a className="button white" href={CONFIG.gptLink} target="_blank" rel="noreferrer">
          Acessar GPT <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>{CONFIG.projectName}</strong>
          <p>{CONFIG.ownerName} · {CONFIG.institution}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${CONFIG.contactEmail}`}><Mail size={16} /> Contato</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Code size={16} /> GitHub</a>
        </div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
