import { useEffect, useState, type FormEvent } from 'react'
import './App.css'

const logoPath = '/imgs/logo.png'
const headerIconPath = '/imgs/DumeIcone.png'
const footerLogoPath = '/imgs/logofooter.png'
const footerIconPath = '/imgs/DumeFooter.svg?v=2'
const heroImage = '/imgs/projetos/projeto8.jpeg'
const foundersImage = '/imgs/thalia-amanda.jpg'
const foundersMobileImage = '/imgs/thalia-amanda-mobile.jpg'

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
    title: 'Acompanhamento de obra',
    description:
      'Presença técnica para acompanhar etapas, interpretar projeto e proteger a intenção arquitetônica até a entrega.',
  },
]

const projects = [
  {
    title: 'Sala multifuncional',
    category: 'Residencial',
    description:
      'Sala integrada a estação de trabalho, marcenaria planejada e pontos de cor para acolher descanso, estudo e rotina.',
    cover: '/imgs/projetos/projeto8.jpeg',
    coverAlt:
      'Sala residencial com sofá claro, estante em marcenaria, estação de trabalho e parede verde suave',
    photos: [
      {
        src: '/imgs/projetos/projeto8.jpeg',
        alt: 'Vista da sala com sofá, estante, mesa de trabalho e painel de TV',
      },
      {
        src: '/imgs/projetos/projeto9.jpeg',
        alt: 'Vista da sala integrada com mesa redonda, painel de TV e porta em madeira',
      },
    ],
  },
  {
    title: 'Consultório Sâmia Silva',
    category: 'Comercial',
    description:
      'Projeto de interiores para atendimento odontológico com recepção delicada, áreas técnicas claras e linguagem acolhedora.',
    cover: '/imgs/projetos/projeto4.jpeg',
    coverAlt:
      'Consultório odontológico com mesa branca, luminária pendente dourada e painel em madeira',
    photos: [
      {
        src: '/imgs/projetos/projeto4.jpeg',
        alt: 'Sala de atendimento do consultório com mesa branca e luminária pendente',
      },
      {
        src: '/imgs/projetos/projeto1.jpeg',
        alt: 'Área de espera estreita com painel de madeira, poltronas e iluminação linear',
      },
      {
        src: '/imgs/projetos/projeto2.jpeg',
        alt: 'Área clínica com bancada branca, armários e janela com persiana',
      },
      {
        src: '/imgs/projetos/projeto3.jpeg',
        alt: 'Consultório odontológico com cadeira clínica e divisória em madeira',
      },
      {
        src: '/imgs/projetos/projeto5.jpeg',
        alt: 'Marcenaria branca com nichos, gaveteiro e espelho orgânico no consultório',
      },
    ],
  },
  {
    title: 'Cozinha e gourmet',
    category: 'Residencial',
    description:
      'Ambientes compactos com marcenaria sob medida, bancada funcional e materiais resistentes para uso diário.',
    cover: '/imgs/projetos/projeto7.jpeg',
    coverAlt:
      'Cozinha compacta com armários verdes, bancada preta, madeira clara e pendentes naturais',
    photos: [
      {
        src: '/imgs/projetos/projeto7.jpeg',
        alt: 'Cozinha compacta com armários verdes, bancada preta e geladeira inox',
      },
      {
        src: '/imgs/projetos/projeto10.jpeg',
        alt: 'Área de apoio com armários brancos, prateleiras em madeira e máquina de lavar',
      },
      {
        src: '/imgs/projetos/projeto6.jpeg',
        alt: 'Espaço gourmet com bancada, churrasqueira em tijolinho e pergolado de madeira',
      },
    ],
  },
  {
    title: 'Quarto infantil Liz',
    category: 'Interiores',
    description:
      'Quarto lúdico com marcenaria leve, bancada de estudos, brinquedoteca e uma paleta suave para acompanhar a infância.',
    cover: '/imgs/projetos/projeto11.jpg',
    coverAlt:
      'Quarto infantil em tons suaves com bancada, cadeira em formato de flor, brinquedos e cortina clara',
    photos: [
      {
        src: '/imgs/projetos/projeto11.jpg',
        alt: 'Quarto infantil com bancada de estudos, nichos, brinquedos e cortina clara',
      },
      {
        src: '/imgs/projetos/projeto12.jpg',
        alt: 'Parede lúdica do quarto infantil com casinha decorativa, flores e mobiliário rosa',
      },
    ],
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    document.documentElement.classList.toggle('is-nav-open', isMenuOpen)
    return () => document.documentElement.classList.remove('is-nav-open')
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`site-header ${isMenuOpen ? 'is-menu-open' : ''}`}
      aria-label="Cabeçalho principal"
    >
      <a
        className="brand logo-link"
        href="#inicio"
        aria-label="Dume Arquitetura"
        onClick={closeMenu}
      >
        <img
          className="brand-icon brand-icon-header"
          src={headerIconPath}
          width={1050}
          height={1094}
          alt=""
          aria-hidden="true"
        />
        <img
          className="logo-image logo-image-header"
          src={logoPath}
          width={1065}
          height={634}
          alt="Dume Arquitetura"
        />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}
        id="main-navigation"
        aria-label="Navegação principal"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a className="mobile-nav-cta" href="#contato" onClick={closeMenu}>
          Solicitar orçamento
        </a>
      </nav>

      <a className="header-cta" href="#contato" onClick={closeMenu}>
        Solicitar orçamento
      </a>

      <button
        className="menu-backdrop"
        type="button"
        aria-label="Fechar menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />
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
    <div className="section-intro reveal">
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

      <div className="hero-board reveal reveal-delay">
        <figure className="hero-media">
          <img
            src={heroImage}
            sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1100px) calc(100vw - 44px), 690px"
            width={1280}
            height={720}
            decoding="async"
            fetchPriority="high"
            alt="Sala residencial projetada pela Dume com sofá claro, estante planejada, estação de trabalho e parede verde suave"
          />
        </figure>

        <div className="plan-panel" aria-hidden="true">
          <span className="plan-kicker">Estudo 01</span>
          <div className="plan-lines">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>luz natural / fluxo / permanência</p>
        </div>

        <div className="material-strip" aria-label="Paleta de materiais Dume">
          <span />
          <span />
          <span />
          <span />
        </div>

        <p className="hero-board-caption">
          Residencial, comercial, interiores e planejamento urbano.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="page-section about-section" id="sobre">
      <div className="about-grid">
        <div className="about-identity">
          <SectionIntro
            eyebrow="Sobre a Dume"
            title="Um olhar autoral para espaços que precisam fazer sentido."
            description="A Dume Arquitetura nasce do encontro entre técnica, escuta e delicadeza visual."
          />

          <figure className="about-photo reveal">
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet={foundersMobileImage}
              />
              <img
                src={foundersImage}
                srcSet={`${foundersMobileImage} 900w, ${foundersImage} 1500w`}
                sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1100px) calc(100vw - 44px), 560px"
                width={1500}
                height={1002}
                loading="lazy"
                decoding="async"
                alt="Thalia Melônio e Amanda Duarte, arquitetas e urbanistas da Dume Arquitetura"
              />
            </picture>
            <figcaption>
              <span>Thalia Melônio e Amanda Duarte</span>
              <strong>Arquitetas, urbanistas e sócias da Dume.</strong>
            </figcaption>
          </figure>
        </div>

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

function Portfolio() {
  return (
    <section className="page-section portfolio-section" id="projetos">
      <div className="portfolio-heading">
        <SectionIntro
          eyebrow="Portfólio"
          title="Projetos reais com identidade, detalhe e presença."
          description="Uma seleção de ambientes desenvolvidos pela Dume em diferentes escalas, do comercial ao residencial."
        />
        <a className="text-link" href="#contato">
          Solicitar apresentação completa
        </a>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <figure className="project-media">
              <img
                src={project.cover}
                width={1280}
                height={900}
                loading="lazy"
                decoding="async"
                alt={project.coverAlt}
              />
              <figcaption>{project.photos.length} fotos</figcaption>
            </figure>
            <div className="project-card-body">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-photo-strip" aria-label={`Fotos do projeto ${project.title}`}>
                {project.photos.map((photo) => (
                  <img
                    key={photo.src}
                    src={photo.src}
                    width={320}
                    height={320}
                    loading="lazy"
                    decoding="async"
                    alt={photo.alt}
                  />
                ))}
              </div>
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
              dumearquitetura03@gmail.com
            </p>
            <p>
              <span>WhatsApp</span>
              (98) 98715-1513
            </p>
            <p>
              <span>Atendimento</span>
              Projetos residenciais, comerciais e urbanos
            </p>
          </div>

          <a
            className="whatsapp-link"
            href="https://wa.me/5598987151513?text=Ol%C3%A1%2C%20Dume%20Arquitetura.%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
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
            className="brand-icon brand-icon-footer"
            src={footerIconPath}
            width={1920}
            height={1080}
            alt=""
            aria-hidden="true"
          />
          <img
            className="logo-image logo-image-footer"
            src={footerLogoPath}
            width={1065}
            height={634}
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
  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    animatedElements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 70}ms`)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

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
