import { useEffect, useState } from 'react'
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

type PortfolioPhoto = {
  src: string
  alt: string
}

type SelectedPortfolioPhoto = PortfolioPhoto & {
  projectTitle: string
}

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
    title: 'Cozinha',
    category: 'Residencial',
    description:
      'Cozinha compacta com marcenaria sob medida, bancada funcional e materiais resistentes para uso diário.',
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
    ],
  },
  {
    title: 'Área Gourmet',
    category: 'Residencial',
    description:
      'Espaço gourmet com bancada de apoio, churrasqueira em tijolinho e pergolado de madeira para receber com conforto.',
    cover: '/imgs/projetos/projeto6.jpeg',
    coverAlt:
      'Espaço gourmet com bancada, churrasqueira em tijolinho e pergolado de madeira',
    photos: [
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
                alt="Amanda Duarte e Thalia Melônio, arquitetas e urbanistas da Dume Arquitetura"
              />
            </picture>
            <figcaption>
              <span>Amanda Duarte e Thalia Melônio</span>
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
              <h3>Amanda Duarte</h3>
            </article>
            <article>
              <span>Arquiteta e urbanista</span>
              <h3>Thalia Melônio</h3>
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
  const [selectedPhoto, setSelectedPhoto] = useState<SelectedPortfolioPhoto | null>(null)

  useEffect(() => {
    if (!selectedPhoto) {
      document.documentElement.classList.remove('is-lightbox-open')
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }

    document.documentElement.classList.add('is-lightbox-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.documentElement.classList.remove('is-lightbox-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPhoto])

  function openPortfolioPhoto(photo: PortfolioPhoto, projectTitle: string) {
    setSelectedPhoto({ ...photo, projectTitle })
  }

  function closePortfolioPhoto() {
    setSelectedPhoto(null)
  }

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
              <button
                className="project-image-button project-media-button"
                type="button"
                aria-label={`Ampliar imagem do projeto ${project.title}`}
                onClick={() =>
                  openPortfolioPhoto(
                    { src: project.cover, alt: project.coverAlt },
                    project.title,
                  )
                }
              >
                <img
                  src={project.cover}
                  width={1280}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  alt={project.coverAlt}
                />
              </button>
              <figcaption>{project.photos.length} fotos</figcaption>
            </figure>
            <div className="project-card-body">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-photo-strip" aria-label={`Fotos do projeto ${project.title}`}>
                {project.photos.map((photo) => (
                  <button
                    key={photo.src}
                    className="project-image-button project-photo-button"
                    type="button"
                    aria-label={`Ampliar foto do projeto ${project.title}`}
                    onClick={() => openPortfolioPhoto(photo, project.title)}
                  >
                    <img
                      src={photo.src}
                      width={320}
                      height={320}
                      loading="lazy"
                      decoding="async"
                      alt={photo.alt}
                    />
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedPhoto ? (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada de ${selectedPhoto.projectTitle}`}
          onClick={closePortfolioPhoto}
        >
          <div
            className="portfolio-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="portfolio-lightbox-close"
              type="button"
              aria-label="Fechar visualização expandida"
              onClick={closePortfolioPhoto}
              autoFocus
            >
              ×
            </button>
            <figure className="portfolio-lightbox-figure">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={1600}
                height={1200}
                decoding="async"
              />
              <figcaption>
                <span>{selectedPhoto.projectTitle}</span>
                <p>{selectedPhoto.alt}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      ) : null}
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
  const whatsappMessage =
    'Ol%C3%A1%2C%20Dume%20Arquitetura.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.'
  const whatsappHref =
    `https://wa.me/5598987151513?text=${whatsappMessage}`
  const secondaryWhatsappHref =
    `https://wa.me/5598981404014?text=${whatsappMessage}`

  return (
    <section className="page-section contact-section" id="contato">
      <div className="contact-grid">
        <div className="contact-copy">
          <SectionIntro
            eyebrow="Contato"
            title="Solicite seu orçamento pelo WhatsApp."
            description="Uma conversa direta para entender seu espaço, sua rotina e o tipo de projeto que você deseja iniciar."
          />

          <div className="contact-details" aria-label="Informações de contato">
            <p>
              <span>WhatsApp</span>
              <a
                className="contact-phone-link"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: (98) 98715-1513
              </a>
              <a
                className="contact-phone-link"
                href={secondaryWhatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: (98) 98140-4014
              </a>
            </p>
            <p>
              <span>Email</span>
              <a href="mailto:dumearquitetura03@gmail.com">
                dumearquitetura03@gmail.com
              </a>
            </p>
            <p>
              <span>Atendimento</span>
              Projetos residenciais, comerciais e urbanos
            </p>
          </div>
        </div>

        <aside
          className="contact-whatsapp-panel reveal"
          aria-label="Solicitar orçamento pelo WhatsApp"
        >
          <div>
            <p className="eyebrow">Orçamento direto</p>
            <h3>Conte sua ideia e receba o próximo passo da Dume.</h3>
            <p className="whatsapp-panel-text">
              O atendimento começa em uma conversa objetiva, com espaço para
              compartilhar referências, medidas, localização e o momento atual
              do seu projeto.
            </p>
          </div>

          <ul className="contact-benefits" aria-label="Etapas iniciais do atendimento">
            <li>
              <span>01</span>
              Contato inicial pelo WhatsApp
            </li>
            <li>
              <span>02</span>
              Direcionamento para o melhor serviço
            </li>
            <li>
              <span>03</span>
              Próximos passos para orçamento
            </li>
          </ul>

          <a
            className="whatsapp-link whatsapp-link-strong"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento no WhatsApp
          </a>

          <p className="whatsapp-note">
            Atendimento pelos números (98) 98715-1513 e (98) 98140-4014
          </p>
        </aside>
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
        <a href="https://www.instagram.com/dume.arquitetura/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        {/* <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
          Behance
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a> */}
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
