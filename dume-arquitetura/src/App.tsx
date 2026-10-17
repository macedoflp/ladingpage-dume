import { Analytics, track } from '@vercel/analytics/react'
import { useEffect, useRef, useState } from 'react'
import './App.css'

const logoPath = '/imgs/logo.png'
const headerIconPath = '/imgs/DumeIcone.png'
const footerLogoPath = '/imgs/logofooter.png'
const footerIconPath = '/imgs/DumeFooter.svg?v=2'
const foundersImage = '/imgs/thalia-amanda.jpg'
const foundersMobileImage = '/imgs/thalia-amanda-mobile.jpg'
const heroMainImage = '/imgs/dume-hero.jpg'
const heroMainMobileImage = '/imgs/dume-hero-mobile.jpg'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Escritório', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Atuação', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const heroPillars = [
  {
    label: 'Projetos Autorais',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 3L3 8l9 5 9-5-9-5z" />
        <path d="M3 16l9 5 9-5" />
        <path d="M3 12l9 5 9-5" />
      </svg>
    ),
  },
  {
    label: 'Curadoria de Materiais',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: 'Escuta Exclusiva',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Estética Atemporal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    label: 'Atenção aos Detalhes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.5l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
]

const services = [
  {
    title: 'Projetos residenciais',
    tag: 'Arquitetura & Morar',
    image: '/imgs/projetos/projeto8.jpeg',
    imageAlt: 'Sala residencial integrada projetada pela Dume Arquitetura',
    description:
      'Casas e apartamentos pensados para acolher a rotina, preservar memória afetiva e revelar o modo de viver de cada cliente.',
  },
  {
    title: 'Projetos comerciais',
    tag: 'Clínicas, Lojas & Corporativo',
    image: '/imgs/projetos/projeto4.jpeg',
    imageAlt: 'Consultório comercial com iluminação pendente e marcenaria',
    description:
      'Ambientes de trabalho, clínicas, lojas e espaços de atendimento com presença, fluxo inteligente e linguagem alinhada à marca.',
  },
  {
    title: 'Design de Interiores',
    tag: 'Atmosfera & Marcenaria',
    image: '/imgs/projetos/projeto7.jpeg',
    imageAlt: 'Interiores de cozinha com armários verdes e madeira natural',
    description:
      'Curadoria completa de layout, marcenaria sob medida, mobiliário, iluminação e detalhes para criar atmosferas sofisticadas.',
  },
  {
    title: 'Consultoria arquitetônica',
    tag: 'Direcionamento Ágil',
    image: '/imgs/projetos/projeto11.jpg',
    imageAlt: 'Detalhe de ambiente planejado com paleta suave e marcenaria leve',
    description:
      'Orientação técnica e estética para destravar decisões, qualificar escolhas e conduzir transformações pontuais com clareza.',
  },
  {
    title: 'Acompanhamento de obra',
    tag: 'Rigor Técnico',
    image: '/imgs/projetos/projeto6.jpeg',
    imageAlt: 'Espaço gourmet com pergolado em madeira e revestimento em tijolinho',
    description:
      'Presença técnica para acompanhar etapas construtivas, interpretar projeto e proteger a intenção arquitetônica até a entrega.',
  },
]

type PortfolioPhoto = {
  src: string
  alt: string
}

type ProjectItem = {
  title: string
  category: string
  location: string
  description: string
  cover: string
  coverAlt: string
  photos: PortfolioPhoto[]
}

type SelectedLightboxState = {
  project: ProjectItem
  photoIndex: number
}

const projects: ProjectItem[] = [
  {
    title: 'Sala multifuncional',
    category: 'Arquitetura Residencial',
    location: 'São Luís, MA',
    description:
      'Sala integrada a estação de trabalho, marcenaria planejada e pontos de cor para acolher descanso, estudo e rotina com leveza.',
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
    category: 'Arquitetura Comercial',
    location: 'São Luís, MA',
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
    title: 'Cozinha Autoral',
    category: 'Arquitetura Residencial',
    location: 'São Luís, MA',
    description:
      'Cozinha compacta com marcenaria sob medida em tom verde sálvia, bancada funcional e materiais resistentes para o cotidiano.',
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
    category: 'Arquitetura Residencial',
    location: 'São Luís, MA',
    description:
      'Espaço gourmet com bancada de apoio, churrasqueira em tijolinho aparente e pergolado de madeira para receber com conforto.',
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
    category: 'Design de Interiores',
    location: 'São Luís, MA',
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

const heroScenes = [
  {
    src: heroMainImage,
    mobileSrc: heroMainMobileImage,
    alt: 'Ambiente contemporâneo com materiais naturais, madeira quente e iluminação difusa da Dume Arquitetura',
    title: 'Estética & Essência',
    category: 'Arquitetura & Interiores',
  },
  {
    src: '/imgs/projetos/projeto8.jpeg',
    alt: 'Sala multifuncional com marcenaria sob medida e paleta acolhedora',
    title: 'Sala multifuncional',
    category: 'Residencial',
  },
  {
    src: '/imgs/projetos/projeto4.jpeg',
    alt: 'Consultório Sâmia Silva com marcenaria em madeira e iluminação dourada',
    title: 'Consultório Sâmia Silva',
    category: 'Comercial',
  },
  {
    src: '/imgs/projetos/projeto7.jpeg',
    alt: 'Cozinha com marcenaria verde e detalhes em madeira natural',
    title: 'Cozinha Autoral',
    category: 'Interiores',
  },
  {
    src: '/imgs/projetos/projeto6.jpeg',
    alt: 'Área Gourmet com pergolado em madeira e tijolinho',
    title: 'Área Gourmet',
    category: 'Residencial',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Imersão & Escuta Ativa',
    description:
      'Compreendemos sua rotina, referências, necessidades técnicas e expectativas de investimento em uma conversa próxima e estruturada.',
  },
  {
    number: '02',
    title: 'Estudo Preliminar & 3D',
    description:
      'Traduzimos o conceito em plantas humanizadas e volumetria 3D realista para que você visualize cada proporção, textura e iluminação.',
  },
  {
    number: '03',
    title: 'Projeto Executivo Completo',
    description:
      'Desenvolvemos todos os cadernos técnicos — marcenaria, pontos elétricos, iluminação, paginações e especificações — para uma obra sem imprevistos.',
  },
  {
    number: '04',
    title: 'Suporte & Acompanhamento',
    description:
      'Acompanhamos as etapas decisivas junto a fornecedores e equipe de obra para garantir fidelidade absoluta ao projeto concebido.',
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

const faqs = [
  {
    question: 'Onde fica o escritório da Dume Arquitetura e quais regiões vocês atendem?',
    answer:
      'Nosso escritório está sediado em São Luís - MA. Realizamos atendimento presencial em toda a Grande São Luís e desenvolvemos projetos de arquitetura, interiores e consultorias no formato online para clientes em todo o Brasil.',
  },
  {
    question: 'Quais tipos de serviços de arquitetura a Dume realiza?',
    answer:
      'Desenvolvemos projetos arquitetônicos residenciais (casas e apartamentos), projetos comerciais e corporativos, projetos completos de interiores, consultorias arquitetônicas pontuais e acompanhamento técnico de obras.',
  },
  {
    question: 'Como funciona o processo de desenvolvimento de um projeto?',
    answer:
      'Nosso método é organizado em etapas transparentes: escuta ativa e briefing detalhado, estudos preliminares com maquete 3D para você visualizar os espaços, anteprojeto com especificações de materiais e entrega do projeto executivo completo com detalhamentos para a obra.',
  },
  {
    question: 'A Dume faz projetos apenas para construções novas ou também para reformas?',
    answer:
      'Atuamos tanto na concepção de construções novas a partir do zero quanto em reformas completas ou parciais para renovar a funcionalidade, iluminação e estética do seu imóvel.',
  },
  {
    question: 'Como solicitar um orçamento com a Dume Arquitetura?',
    answer:
      'O contato inicial é feito de forma prática pelo WhatsApp. Basta clicar nos botões de contato para conversarmos sobre as necessidades do seu espaço, prazos e direcionarmos a melhor proposta para o seu projeto.',
  },
]

function trackCtaClick(location: string, destination: string) {
  track('CTA Clicked', { location, destination })
}

function trackContactClick(location: string, channel: string) {
  track('Contact Clicked', { location, channel })
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 48)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const useLightBrand = !isScrolled && !isMenuOpen

  return (
    <header
      className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${
        isMenuOpen ? 'is-menu-open' : ''
      }`}
      aria-label="Cabeçalho principal"
    >
      <div className="site-header-inner">
        <a
          className="brand logo-link"
          href="#inicio"
          aria-label="Dume Arquitetura"
          onClick={closeMenu}
        >
          <img
            className="brand-icon brand-icon-header"
            src={useLightBrand ? footerIconPath : headerIconPath}
            width={1050}
            height={1094}
            alt=""
            aria-hidden="true"
          />
          <div className="brand-wordmark">
            <img
              className="logo-image logo-image-header"
              src={useLightBrand ? footerLogoPath : logoPath}
              width={1065}
              height={634}
              alt="Dume Arquitetura"
            />
            <span className="brand-sublabel">ARQUITETURA & INTERIORES</span>
          </div>
        </a>

        <nav
          className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                track('Navigation Clicked', { label: link.label })
                closeMenu()
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            className="mobile-nav-cta"
            href="#contato"
            onClick={() => {
              trackCtaClick('Mobile navigation', 'contact')
              closeMenu()
            }}
          >
            <span>Solicitar orçamento</span>
            <ArrowUpRightIcon />
          </a>
        </nav>

        <a
          className="header-cta"
          href="#contato"
          onClick={() => {
            trackCtaClick('Header', 'contact')
            closeMenu()
          }}
        >
          <span>Solicitar orçamento</span>
          <span className="header-cta-arrow" aria-hidden="true">
            <ArrowUpRightIcon />
          </span>
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
      </div>

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

function Hero() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const activeScene = heroScenes[activeSceneIndex]

  useEffect(() => {
    if (isPaused) {
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % heroScenes.length)
    }, 6400)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  return (
    <section
      className="hero-stage"
      id="inicio"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-backdrop" aria-live="polite">
        {heroScenes.map((scene, index) => (
          <figure
            key={scene.src}
            className={`hero-backdrop-slide ${
              index === activeSceneIndex ? 'is-active' : ''
            }`}
            aria-hidden={index !== activeSceneIndex}
          >
            {scene.mobileSrc ? (
              <picture>
                <source media="(max-width: 760px)" srcSet={scene.mobileSrc} />
                <img
                  src={scene.src}
                  srcSet={`${scene.mobileSrc} 960w, ${scene.src} 1536w`}
                  sizes="100vw"
                  width={1536}
                  height={1024}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  alt={scene.alt}
                />
              </picture>
            ) : (
              <img
                src={scene.src}
                sizes="100vw"
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                alt={scene.alt}
              />
            )}
          </figure>
        ))}
        <div className="hero-backdrop-overlay" />
      </div>

      <div className="hero-content-grid">
        <div className="hero-main-copy reveal">
          <div className="hero-kicker">
            <span className="hero-kicker-dot" aria-hidden="true" />
            <span>ARQUITETURA RESIDENCIAL, COMERCIAL & INTERIORES • SÃO LUÍS, MA</span>
          </div>

          <h1>
            Arquitetura que traduz{' '}
            <em>essência em espaço.</em>
          </h1>

          <p className="hero-subtitle">
            Projetos autorais que unem estética atemporal, funcionalidade
            estratégica e sofisticação silenciosa para transformar a forma de
            viver e trabalhar.
          </p>

          <div className="hero-cta-group" aria-label="Ações principais">
            <a
              className="pill-cta pill-cta-primary"
              href="#projetos"
              onClick={() => trackCtaClick('Hero', 'projects')}
            >
              <span>Conheça nossos projetos</span>
              <span className="pill-cta-circle" aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </a>

            <a
              className="pill-cta pill-cta-glass"
              href="#contato"
              onClick={() => trackCtaClick('Hero', 'contact')}
            >
              <span>Solicitar um orçamento</span>
            </a>
          </div>
        </div>

        <aside className="hero-side-meta reveal">
          <div className="hero-poetic-note">
            <p>Design que expressa identidade.</p>
            <p>Arquitetura que gera valor e permanência.</p>
          </div>

          <div className="hero-scene-switcher" aria-label="Selecionar ambiente em destaque">
            <div className="hero-scene-info">
              <span>{String(activeSceneIndex + 1).padStart(2, '0')} / {String(heroScenes.length).padStart(2, '0')} • {activeScene.category}</span>
              <strong>{activeScene.title}</strong>
            </div>

            <div className="hero-scene-dots">
              {heroScenes.map((scene, index) => (
                <button
                  key={scene.title}
                  type="button"
                  className={index === activeSceneIndex ? 'is-active' : ''}
                  aria-label={`Visualizar ambiente ${scene.title}`}
                  aria-current={index === activeSceneIndex}
                  onClick={() => setActiveSceneIndex(index)}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="hero-ribbon" aria-label="Pilares da Dume Arquitetura">
        <div className="hero-ribbon-inner">
          {heroPillars.map((pillar) => (
            <div className="hero-ribbon-item" key={pillar.label}>
              <span className="hero-ribbon-icon">{pillar.icon}</span>
              <span>{pillar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-editorial-section" id="sobre">
      <a
        href="#sobre"
        className="section-notch"
        aria-label="Rolar para seção Sobre a Dume"
      >
        <span aria-hidden="true">⌄</span>
      </a>

      <div className="editorial-container">
        {/* Top Row: Hofstaetter 01 index + Decoris asymmetrical text & dual vertical cards */}
        <div className="about-top-row">
          <div className="about-narrative reveal">
            <div className="editorial-index-bar">
              <span className="section-index">01 / O ESCRITÓRIO</span>
              <span className="decoris-dots" aria-hidden="true">
                <i />
                <i />
                <i />
                <b />
              </span>
            </div>

            <h2 className="editorial-serif-title">SOBRE A DUME</h2>
            <p className="editorial-subtitle">
              O essencial ganha forma quando estética e técnica caminham em equilíbrio.
            </p>

            <div className="about-paragraphs">
              <p>
                <strong>Na Dume Arquitetura,</strong> cada projeto nasce de uma
                imersão profunda no estilo de vida, na rotina e nas expectativas
                de nossos clientes. Liderado pelas arquitetas e urbanistas{' '}
                <strong>Amanda Duarte</strong> e <strong>Thalia Melônio</strong>,
                nosso escritório em São Luís (MA) desenvolve propostas
                residenciais e comerciais para todo o Brasil.
              </p>
              <p>
                Não projetamos apenas ambientes. Criamos experiências
                arquitetônicas que acolhem a memória afetiva, organizam os fluxos
                do dia a dia e elevam a forma de viver e receber.
              </p>
              <p>
                Nossa assinatura combina linhas contemporâneas, marcenaria
                inteligente e materiais naturais, sempre com precisão técnica e
                atenção absoluta aos detalhes.
              </p>
            </div>

            <div className="founders-signature-row" aria-label="Arquitetas sócias">
              <article className="founder-badge">
                <span>Arquiteta e Urbanista • Sócia</span>
                <h3>Amanda Duarte</h3>
              </article>
              <article className="founder-badge">
                <span>Arquiteta e Urbanista • Sócia</span>
                <h3>Thalia Melônio</h3>
              </article>
            </div>
          </div>

          <div className="about-dual-gallery reveal">
            <figure className="about-tall-card about-tall-card-founders">
              <picture>
                <source
                  media="(max-width: 760px)"
                  srcSet={foundersMobileImage}
                />
                <img
                  src={foundersImage}
                  srcSet={`${foundersMobileImage} 900w, ${foundersImage} 1500w`}
                  sizes="(max-width: 760px) calc(100vw - 36px), 380px"
                  width={1500}
                  height={1002}
                  loading="lazy"
                  decoding="async"
                  alt="Amanda Duarte e Thalia Melônio, arquitetas e urbanistas da Dume Arquitetura"
                />
              </picture>
              <figcaption>
                <span>Direção Criativa & Técnica</span>
                <strong>Amanda Duarte & Thalia Melônio</strong>
              </figcaption>
            </figure>

            <figure className="about-tall-card about-tall-card-detail">
              <img
                src="/imgs/projetos/projeto4.jpeg"
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
                alt="Detalhe de iluminação e marcenaria em madeira natural projetado pela Dume"
              />
              <figcaption>
                <span>Curadoria Material</span>
                <strong>Luz, madeira e proporção</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('Todos')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightbox, setLightbox] = useState<SelectedLightboxState | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const categories = ['Todos', 'Residencial', 'Comercial', 'Interiores']

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) =>
          project.category.toLowerCase().includes(activeFilter.toLowerCase()),
        )

  function selectFilter(category: string) {
    setActiveFilter(category)
    setCurrentSlide(0)
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (!lightbox) {
      document.documentElement.classList.remove('is-lightbox-open')
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setLightbox(null)
      } else if (event.key === 'ArrowRight') {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                photoIndex: (prev.photoIndex + 1) % prev.project.photos.length,
              }
            : null,
        )
      } else if (event.key === 'ArrowLeft') {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                photoIndex:
                  prev.photoIndex === 0
                    ? prev.project.photos.length - 1
                    : prev.photoIndex - 1,
              }
            : null,
        )
      }
    }

    document.documentElement.classList.add('is-lightbox-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.documentElement.classList.remove('is-lightbox-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox])

  function scrollCarousel(direction: 'prev' | 'next') {
    if (!trackRef.current || filteredProjects.length === 0) {
      return
    }

    const nextIndex =
      direction === 'next'
        ? (currentSlide + 1) % filteredProjects.length
        : currentSlide === 0
          ? filteredProjects.length - 1
          : currentSlide - 1

    setCurrentSlide(nextIndex)

    const cards = trackRef.current.querySelectorAll<HTMLElement>('.showcase-card')
    const targetCard = cards[nextIndex]
    if (targetCard) {
      trackRef.current.scrollTo({
        left: targetCard.offsetLeft - trackRef.current.offsetLeft,
        behavior: 'smooth',
      })
    }
  }

  function openProjectLightbox(project: ProjectItem, photoIndex = 0) {
    track('Portfolio Photo Opened', { project: project.title })
    setLightbox({ project, photoIndex })
  }

  function closeLightbox() {
    setLightbox(null)
  }

  return (
    <section className="portfolio-dark-section" id="projetos">
      <div className="editorial-container">
        <div className="portfolio-dark-header reveal">
          <div className="portfolio-dark-title-group">
            <span className="section-index section-index-light">02 / PROJETOS</span>
            <h2>
              Espaços que
              <br />
              falam por si.
            </h2>
          </div>

          <div className="portfolio-dark-controls-group">
            <div className="portfolio-filter-pills" role="tablist" aria-label="Filtrar projetos por categoria">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === category}
                  className={`filter-pill ${activeFilter === category ? 'is-active' : ''}`}
                  onClick={() => selectFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="showcase-nav-bar" aria-label="Navegação de projetos">
              <span className="showcase-counter">
                {String(Math.min(currentSlide + 1, filteredProjects.length)).padStart(2, '0')} /{' '}
                {String(filteredProjects.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="showcase-circle-btn"
                aria-label="Projeto anterior"
                onClick={() => scrollCarousel('prev')}
              >
                ←
              </button>
              <button
                type="button"
                className="showcase-circle-btn"
                aria-label="Próximo projeto"
                onClick={() => scrollCarousel('next')}
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div
          className="showcase-track"
          ref={trackRef}
          onScroll={(e) => {
            const container = e.currentTarget
            const scrollLeft = container.scrollLeft
            const cardWidth = container.firstElementChild?.clientWidth || 1
            const estimatedIndex = Math.round(scrollLeft / (cardWidth + 28))
            if (
              estimatedIndex >= 0 &&
              estimatedIndex < filteredProjects.length &&
              estimatedIndex !== currentSlide
            ) {
              setCurrentSlide(estimatedIndex)
            }
          }}
        >
          {filteredProjects.map((project, index) => (
            <article
              className="showcase-card reveal"
              key={project.title}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="showcase-media-frame">
                <button
                  type="button"
                  className="showcase-main-image-btn"
                  aria-label={`Abrir galeria completa do projeto ${project.title}`}
                  onClick={() => openProjectLightbox(project, 0)}
                >
                  <img
                    src={project.cover}
                    width={1280}
                    height={960}
                    loading="lazy"
                    decoding="async"
                    alt={project.coverAlt}
                  />
                </button>

                <span className="showcase-photo-count">
                  {project.photos.length} {project.photos.length === 1 ? 'foto' : 'fotos'}
                </span>

                {/* Hofstaetter-inspired floating glass bar inside image */}
                <div className="showcase-glass-bar">
                  <div className="showcase-glass-meta">
                    <span>{project.category.toUpperCase()} • {project.location}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <button
                    type="button"
                    className="showcase-expand-circle"
                    aria-label={`Ver projeto ${project.title}`}
                    onClick={() => openProjectLightbox(project, 0)}
                  >
                    <ArrowUpRightIcon />
                  </button>
                </div>
              </div>

              <div className="showcase-card-footer">
                <p>{project.description}</p>

                <div
                  className="showcase-thumbs"
                  aria-label={`Miniaturas do projeto ${project.title}`}
                >
                  {project.photos.map((photo, photoIdx) => (
                    <button
                      key={photo.src}
                      type="button"
                      className="showcase-thumb-btn"
                      aria-label={`Ver foto ${photoIdx + 1} de ${project.title}`}
                      onClick={() => openProjectLightbox(project, photoIdx)}
                    >
                      <img
                        src={photo.src}
                        width={160}
                        height={160}
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

        <div className="portfolio-dark-footbar">
          <span>FORMA, LUZ E MATÉRIA.</span>
          <a
            href="#contato"
            onClick={() => trackCtaClick('Portfolio footbar', 'contact')}
          >
            SOLICITAR APRESENTAÇÃO COMPLETA →
          </a>
        </div>
      </div>

      {lightbox ? (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria do projeto ${lightbox.project.title}`}
          onClick={closeLightbox}
        >
          <div
            className="portfolio-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="portfolio-lightbox-topbar">
              <div>
                <span className="lightbox-category">{lightbox.project.category}</span>
                <strong>{lightbox.project.title}</strong>
              </div>

              <div className="lightbox-controls">
                {lightbox.project.photos.length > 1 ? (
                  <>
                    <button
                      type="button"
                      className="lightbox-nav-btn"
                      aria-label="Foto anterior"
                      onClick={() =>
                        setLightbox((prev) =>
                          prev
                            ? {
                                ...prev,
                                photoIndex:
                                  prev.photoIndex === 0
                                    ? prev.project.photos.length - 1
                                    : prev.photoIndex - 1,
                              }
                            : null,
                        )
                      }
                    >
                      ‹
                    </button>
                    <span className="lightbox-counter">
                      {lightbox.photoIndex + 1} / {lightbox.project.photos.length}
                    </span>
                    <button
                      type="button"
                      className="lightbox-nav-btn"
                      aria-label="Próxima foto"
                      onClick={() =>
                        setLightbox((prev) =>
                          prev
                            ? {
                                ...prev,
                                photoIndex:
                                  (prev.photoIndex + 1) % prev.project.photos.length,
                              }
                            : null,
                        )
                      }
                    >
                      ›
                    </button>
                  </>
                ) : null}

                <button
                  className="portfolio-lightbox-close"
                  type="button"
                  aria-label="Fechar visualização expandida"
                  onClick={closeLightbox}
                  autoFocus
                >
                  ×
                </button>
              </div>
            </div>

            <figure className="portfolio-lightbox-figure">
              <img
                src={lightbox.project.photos[lightbox.photoIndex].src}
                alt={lightbox.project.photos[lightbox.photoIndex].alt}
                width={1600}
                height={1200}
                decoding="async"
              />
              <figcaption>
                <p>{lightbox.project.photos[lightbox.photoIndex].alt}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      ) : null}
    </section>
  )
}

function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(1)

  return (
    <section className="services-strip-section" id="servicos">
      <div className="editorial-container">
        <div className="services-centered-header reveal">
          <span className="section-index">03 / NOSSA ATUAÇÃO</span>
          <h2>
            Um escritório, do primeiro
            <br />
            traço <strong>à última peça.</strong>
          </h2>
          <p>
            Um escritório completo, com expertise técnica, estrutura e olhar
            sensível para transformar diferentes conceitos em projetos únicos.
          </p>
        </div>
      </div>

      {/* Image 5 Inspired Full-Bleed Staggered Architectural Strip */}
      <div className="services-interactive-strip" role="list">
        {services.map((service, index) => {
          const isActive = activeServiceIndex === index
          return (
            <article
              key={service.title}
              role="listitem"
              className={`service-strip-card ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveServiceIndex(index)}
              onFocus={() => setActiveServiceIndex(index)}
              onClick={() => setActiveServiceIndex(index)}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
              />
              <div className="service-strip-overlay" />

              <div className="service-strip-top">
                <span className="service-strip-num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="service-strip-tag">{service.tag}</span>
              </div>

              <div className="service-strip-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href="#contato"
                  className="service-strip-link"
                  onClick={(e) => {
                    e.stopPropagation()
                    trackCtaClick(`Service: ${service.title}`, 'contact')
                  }}
                >
                  <span>SOLICITAR PROPOSTA</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function ProcessAndDifferentials() {
  return (
    <section className="page-section process-section" id="processo">
      <div className="editorial-container">
        <div className="process-header-grid reveal">
          <div>
            <span className="section-index">04 / MÉTODO & DIFERENCIAIS</span>
            <h2 className="editorial-heading">
              Processo atento,
              <br />
              resultado <em>sensível.</em>
            </h2>
          </div>
          <p className="process-lead">
            A experiência da Dume se apoia em escolhas técnicas bem
            fundamentadas, cronograma claro e uma relação próxima com cada
            cliente do estudo inicial à entrega.
          </p>
        </div>

        <div className="process-steps-grid">
          {processSteps.map((step) => (
            <article className="process-step-card reveal" key={step.number}>
              <span className="process-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="differentials-band reveal" aria-label="Nossos diferenciais">
          {differentials.map((item, idx) => (
            <div className="differential-pill" key={item}>
              <span className="differential-pill-num">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
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
        <a
          className="pill-cta pill-cta-light"
          href="#contato"
          onClick={() => trackCtaClick('Emotional callout', 'contact')}
        >
          <span>Começar um projeto</span>
          <span className="pill-cta-circle" aria-hidden="true">
            <ArrowUpRightIcon />
          </span>
        </a>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="page-section faq-section" id="faq">
      <div className="editorial-container faq-layout">
        <div className="faq-intro-col reveal">
          <span className="section-index">05 / DÚVIDAS FREQUENTES</span>
          <h2 className="editorial-heading">
            Perguntas comuns sobre nossos projetos.
          </h2>
          <p>
            Tire suas dúvidas sobre o funcionamento do escritório, etapas de
            desenvolvimento, prazos e regiões atendidas.
          </p>
          <a
            href="#contato"
            className="inline-arrow-link"
            onClick={() => trackCtaClick('FAQ', 'contact')}
          >
            <span>Tem outra dúvida? Fale conosco</span>
            <ArrowUpRightIcon />
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item reveal" key={faq.question}>
              <summary className="faq-summary">
                <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="faq-question">{faq.question}</h3>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const whatsappMessage =
    'Ol%C3%A1%2C%20Dume%20Arquitetura.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.'
  const whatsappHref = `https://wa.me/5598987151513?text=${whatsappMessage}`
  const secondaryWhatsappHref = `https://wa.me/5598981404014?text=${whatsappMessage}`

  return (
    <section className="page-section contact-section" id="contato">
      <div className="editorial-container contact-grid">
        <div className="contact-copy reveal">
          <span className="section-index">06 / CONTATO & ORÇAMENTO</span>
          <h2 className="editorial-heading">
            Vamos conversar sobre o seu <em>próximo espaço?</em>
          </h2>
          <p className="contact-lead">
            Uma conversa direta com as arquitetas para entender seu espaço, sua
            rotina e o tipo de projeto que você deseja iniciar.
          </p>

          <div className="contact-details" aria-label="Informações de contato">
            <div className="contact-detail-row">
              <span>WhatsApp Direto</span>
              <div className="contact-phones">
                <a
                  className="contact-phone-link"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackContactClick('Contact details', 'whatsapp-primary')}
                >
                  (98) 98715-1513 <small>• Arq. Amanda / Thalia</small>
                </a>
                <a
                  className="contact-phone-link"
                  href={secondaryWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackContactClick('Contact details', 'whatsapp-secondary')}
                >
                  (98) 98140-4014 <small>• Atendimento Dume</small>
                </a>
              </div>
            </div>

            <div className="contact-detail-row">
              <span>E-mail</span>
              <a
                href="mailto:dumearquitetura03@gmail.com"
                onClick={() => trackContactClick('Contact details', 'email')}
              >
                dumearquitetura03@gmail.com
              </a>
            </div>

            <div className="contact-detail-row">
              <span>Localização</span>
              <p>São Luís – MA • Projetos presenciais e remotos em todo o Brasil</p>
            </div>

            <div className="contact-detail-row">
              <span>Escopo de Atuação</span>
              <p>Projetos residenciais, comerciais, interiores, consultoria e obras</p>
            </div>
          </div>
        </div>

        <aside
          className="contact-whatsapp-panel reveal"
          aria-label="Solicitar orçamento pelo WhatsApp"
        >
          <div>
            <span className="panel-eyebrow">ATENDIMENTO PERSONALIZADO</span>
            <h3>Conte sua ideia e receba a proposta da Dume.</h3>
            <p className="whatsapp-panel-text">
              O atendimento começa em uma conversa objetiva, com espaço para
              compartilhar referências, metragem aproximada, localização e o
              momento atual do seu imóvel ou negócio.
            </p>
          </div>

          <ul className="contact-benefits" aria-label="Etapas iniciais do atendimento">
            <li>
              <span>01</span>
              Contato inicial direto pelo WhatsApp
            </li>
            <li>
              <span>02</span>
              Análise do perfil e direcionamento ideal
            </li>
            <li>
              <span>03</span>
              Apresentação de escopo e proposta detalhada
            </li>
          </ul>

          <div className="contact-panel-actions">
            <a
              className="whatsapp-cta-btn"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContactClick('Contact panel', 'whatsapp-primary')}
            >
              <span>Solicitar orçamento no WhatsApp</span>
              <span className="whatsapp-cta-circle" aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </a>

            <p className="whatsapp-note">
              Atendimento pelos números (98) 98715-1513 e (98) 98140-4014
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="editorial-container site-footer-grid">
        <div className="footer-brand-col">
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
          <p>
            Arquitetura residencial, comercial e interiores com identidade,
            funcionalidade e significado. São Luís – MA para todo o Brasil.
          </p>
        </div>

        <div className="footer-links-col">
          <span className="footer-col-title">Navegação</span>
          <nav aria-label="Links rápidos do rodapé">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-links-col">
          <span className="footer-col-title">Conecte-se</span>
          <div className="social-links" aria-label="Redes sociais">
            <a
              href="https://www.instagram.com/dume.arquitetura/"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContactClick('Footer', 'instagram')}
            >
              <span>Instagram @dume.arquitetura</span>
              <ArrowUpRightIcon />
            </a>
            <a
              href="mailto:dumearquitetura03@gmail.com"
              onClick={() => trackContactClick('Footer', 'email')}
            >
              <span>dumearquitetura03@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="credits">
          <p>© 2026 Dume Arquitetura • Amanda Duarte & Thalia Melônio.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
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
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )

    animatedElements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`)
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
        <Portfolio />
        <Services />
        <ProcessAndDifferentials />
        <EmotionalCallout />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
