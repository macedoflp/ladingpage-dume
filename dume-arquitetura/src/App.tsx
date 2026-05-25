import type { FormEvent } from 'react'
import heroImage from './assets/generated/dume-hero.png'
import './App.css'

const logoPath = '/imgs/logo.png'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

const services = [
  {
    title: 'Projetos residenciais',
    description:
      'Casas e apartamentos pensados para acolher a rotina, preservar memória afetiva e revelar o modo de viver de cada cliente.',
  },
  {
    title: 'Projetos comerciais',
    description:
      'Ambientes de trabalho, lojas e espaços de atendimento com presença, fluxo inteligente e linguagem alinhada à marca.',
  },
  {
    title: 'Interiores',
    description:
      'Curadoria de layout, materiais, mobiliário, iluminação e detalhes para criar atmosferas consistentes e sofisticadas.',
  },
  {
    title: 'Consultoria arquitetônica',
    description:
      'Orientação técnica e estética para destravar decisões, qualificar escolhas e conduzir reformas com mais clareza.',
  },
  {
    title: 'Urbanismo e planejamento',
    description:
      'Leituras urbanas, estudos de uso e propostas que conectam escala humana, território e qualidade espacial.',
  },
  {
    title: 'Acompanhamento de obra',
    description:
      'Presença técnica para acompanhar etapas, interpretar projeto e proteger a intenção arquitetônica até a entrega.',
  },
]

const projects = [
  {
    title: 'Casa Brisa',
    category: 'Residencial',
    description:
      'Volumes calmos, luz natural e matéria-prima acolhedora em uma casa desenhada para encontros cotidianos.',
    visual: 'home',
  },
  {
    title: 'Atelier Nativa',
    category: 'Comercial',
    description:
      'Uma experiência de marca traduzida em circulação fluida, pontos de destaque e materiais de presença tátil.',
    visual: 'studio',
  },
  {
    title: 'Apartamento Aurora',
    category: 'Interiores',
    description:
      'Intervenção delicada com marcenaria sob medida, tons terrosos e composição luminosa para ampliar a sensação de abrigo.',
    visual: 'apartment',
  },
  {
    title: 'Praça Viva',
    category: 'Urbanismo',
    description:
      'Estudo de permanência e sombra para costurar percurso, escala humana e convivência em um espaço público.',
    visual: 'urban',
  },
]

const differentials = [
  'Projetos personalizados',
  'Estética com funcionalidade',
  'Escuta ativa do cliente',
  'Ambientes com identidade',
  'Planejamento cuidadoso',
  'Elegância nos detalhes',
]

function Header() {
  return (
    <header className="site-header" aria-label="Cabeçalho principal">
      <a className="brand logo-link" href="#inicio" aria-label="Dume Arquitetura">
        <img
          className="logo-image logo-image-header"
          src={logoPath}
          alt="Dume Arquitetura"
        />
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contato">
        Solicitar orçamento
      </a>
    </header>
  )
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy reveal">
        <p className="eyebrow">Dume Arquitetura</p>
        <h1>Arquitetura que traduz essência em espaço</h1>
        <p className="hero-lead">
          Projetos residenciais e comerciais criados com escuta, precisão e
          sensibilidade para transformar ideias em ambientes com identidade.
        </p>
        <div className="hero-actions" aria-label="Ações principais">
          <a className="button button-primary" href="#projetos">
            Conheça nossos projetos
          </a>
          <a className="button button-secondary" href="#contato">
            Fale conosco
          </a>
        </div>
      </div>

      <figure className="hero-media reveal reveal-delay">
        <img
          src={heroImage}
          alt="Interior arquitetônico contemporâneo com madeira, pedra clara e iluminação natural suave"
        />
        <figcaption>
          <span>Residencial</span>
          <span>Comercial</span>
          <span>Interiores</span>
        </figcaption>
      </figure>
    </section>
  )
}

function About() {
  return (
    <section className="page-section about-section" id="sobre">
      <div className="about-grid">
        <SectionIntro
          eyebrow="Sobre a Dume"
          title="Um olhar autoral para espaços que precisam fazer sentido."
          description="A Dume Arquitetura nasce do encontro entre técnica, escuta e delicadeza visual."
        />

        <div className="about-content reveal">
          <p>
            Somos arquitetas e urbanistas apaixonadas por transformar ideias em
            espaços com identidade, funcionalidade e significado. Através da
            Dume Arquitetura, desenvolvemos projetos residenciais e comerciais
            que unem estética, conforto e personalidade, sempre buscando criar
            ambientes que traduzam a essência de cada cliente.
          </p>

          <div className="founders" aria-label="Arquitetas responsáveis">
            <article>
              <span>Arquiteta e urbanista</span>
              <h3>Thalia Melônio</h3>
            </article>
            <article>
              <span>Arquiteta e urbanista</span>
              <h3>Amanda Duarte</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="page-section services-section" id="servicos">
      <SectionIntro
        eyebrow="Serviços"
        title="Do primeiro conceito ao detalhe que finaliza o ambiente."
        description="Cada entrega é organizada para unir beleza, viabilidade e uma narrativa espacial coerente."
      />

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card reveal" key={service.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectVisual({ type, title }: { type: string; title: string }) {
  return (
    <div
      className={`project-visual project-visual-${type}`}
      role="img"
      aria-label={`Composição visual placeholder do projeto ${title}`}
    >
      <span className="visual-wall" />
      <span className="visual-window" />
      <span className="visual-object visual-object-one" />
      <span className="visual-object visual-object-two" />
    </div>
  )
}

function Portfolio() {
  return (
    <section className="page-section portfolio-section" id="projetos">
      <div className="portfolio-heading">
        <SectionIntro
          eyebrow="Portfólio"
          title="Estudos visuais para apresentar a linguagem do escritório."
          description="Placeholders elegantes ocupam o espaço das imagens reais até que os projetos fotografados sejam inseridos."
        />
        <a className="text-link" href="#contato">
          Solicitar apresentação completa
        </a>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <ProjectVisual type={project.visual} title={project.title} />
            <div className="project-card-body">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Differentials() {
  return (
    <section className="page-section differentials-section">
      <SectionIntro
        eyebrow="Diferenciais"
        title="Processo atento, resultado sensível."
        description="A experiência da Dume se apoia em escolhas bem fundamentadas e em uma relação próxima com cada cliente."
      />

      <div className="differentials-list">
        {differentials.map((item) => (
          <article className="differential-item reveal" key={item}>
            <span aria-hidden="true" />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function EmotionalCallout() {
  return (
    <section className="emotional-section" aria-label="Chamada emocional">
      <div className="emotional-content reveal">
        <p className="script-line">Cada espaço conta uma história.</p>
        <h2>A nossa missão é projetar a sua.</h2>
        <a className="button button-light" href="#contato">
          Começar um projeto
        </a>
      </div>
    </section>
  )
}

function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section className="page-section contact-section" id="contato">
      <div className="contact-grid">
        <div>
          <SectionIntro
            eyebrow="Contato"
            title="Vamos transformar sua ideia em projeto?"
            description="Conte um pouco sobre o espaço que você imagina. A Dume retorna com o próximo passo para iniciar a conversa."
          />

          <div className="contact-details" aria-label="Informações de contato">
            <p>
              <span>Email</span>
              contato@dumearquitetura.com
            </p>
            <p>
              <span>WhatsApp</span>
              (85) 9 0000-0000
            </p>
            <p>
              <span>Atendimento</span>
              Projetos residenciais, comerciais e urbanos
            </p>
          </div>

          <a
            className="whatsapp-link"
            href="https://wa.me/5585900000000?text=Ol%C3%A1%2C%20Dume%20Arquitetura.%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
          >
            Conversar pelo WhatsApp
          </a>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" type="text" autoComplete="name" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />

          <label htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />

          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Fale sobre seu projeto, cidade, prazo ou etapa atual."
          />

          <button className="button button-primary" type="submit">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand logo-link" href="#inicio">
          <img
            className="logo-image logo-image-footer"
            src={logoPath}
            alt="Dume Arquitetura"
          />
        </a>
        <p>Projetos com identidade, funcionalidade e significado.</p>
      </div>

      <nav aria-label="Links rápidos do rodapé">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="social-links" aria-label="Redes sociais">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
          Behance
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <p className="credits">
        Dume Arquitetura, 2026. Todos os direitos reservados.
      </p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Differentials />
        <EmotionalCallout />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
