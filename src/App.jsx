import { useState } from 'react'

const img = (name) => `/img/${name}`

const launches = [
  { title: 'Hogwarts Legacy', genre: 'RPG', rating: '4.8', image: 'hwleg.jpg', platforms: ['win-plat-logo.png', 'ps-plat-logo.png'] },
  { title: 'Cyberpunk 2077', genre: 'Ação', rating: '4.6', image: 'cybp2077.jpg', platforms: ['win-plat-logo.png', 'ps-plat-logo.png', 'xbox-plat-logo.png'] },
  { title: 'Battlefield 6', genre: 'FPS', rating: '4.5', image: 'bf6.jpg', platforms: ['win-plat-logo.png', 'ps-plat-logo.png', 'xbox-plat-logo.png'] },
  { title: 'Forza 6', genre: 'Corrida', rating: '4.9', image: 'for6.png', platforms: ['win-plat-logo.png', 'xbox-plat-logo.png'] },
  { title: 'Red Dead Redemption', genre: 'Aventura', rating: '4.8', image: 'reddead.png', platforms: ['ps-plat-logo.png', 'xbox-plat-logo.png'] },
  { title: 'The Wolf', genre: 'Ação', rating: '4.7', image: 'wolvebnft.jpg', platforms: ['win-plat-logo.png', 'ps-plat-logo.png'] },
]

const genres = [
  ['RPG', 'sword.png'], ['FPS', 'target.png'], ['Ação', 'action.png'], ['Aventura', 'compass.png'],
  ['Estratégia', 'rook.png'], ['Corrida', 'speedometer.png'], ['Terror', 'ghost.png'], ['Esportes', 'esports.png'],
]

const stats = [
  ['10K+', 'Jogadores ativos', 'people.png'],
  ['500+', 'Jogos disponíveis', 'console.png'],
  ['1K+', 'Notícias publicadas', 'newspaper.png'],
  ['50+', 'Torneios realizados', 'trophy.png'],
]

const achievements = [
  ['Explorador de Mundos', 'Explore diferentes mundos e descubra novas aventuras.'],
  ['Primeiro Jogo Concluído', 'Conclua seu primeiro jogo.'],
  ['10 Horas de Jogo', 'Alcance 10 horas de gameplay.'],
  ['Mestre do RPG', 'Conclua grandes desafios em jogos de RPG.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="gamezone-app">
      <header className="site-header">
        <nav className="navbar navbar-expand-lg gamezone-navbar" aria-label="Navegação principal">
          <div className="container-xl navbar-inner">
            <a className="navbar-brand" href="#inicio" onClick={closeMenu} aria-label="GameZone - início">
              <img src={img('logo.jpg')} alt="Logo GameZone" id="logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              aria-controls="mainMenu"
              aria-expanded={menuOpen}
              aria-label="Abrir menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div id="mainMenu" className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
              <div className="navbar-nav menu ms-auto align-items-lg-center">
                <a className="nav-link active" href="#inicio" onClick={closeMenu}>Início</a>
                <a className="nav-link" href="#lancamentos" onClick={closeMenu}>Lançamentos</a>
                <a className="nav-link" href="#generos" onClick={closeMenu}>Gêneros</a>
                <a className="nav-link" href="#perfil" onClick={closeMenu}>Perfil</a>
                <a className="nav-link" href="#estatisticas" onClick={closeMenu}>Estatísticas</a>
                <a className="nav-link user-link" href="#perfil" onClick={closeMenu}>
                  <img src={img('user.png')} alt="" /> Usuário
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero-section section-anchor">
          <div className="hero-overlay" />
          <div className="container-xl hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Bem-vindo à</p>
              <h1>Game<span>Zone.</span></h1>
              <h2><span>Explore.</span> Jogue. Conecte-se.</h2>
              <p className="hero-description">O seu destino para descobrir jogos, acompanhar novidades e encontrar uma comunidade apaixonada por games.</p>
              <div className="hero-actions">
                <a className="btn btn-purp" href="#lancamentos">Explorar jogos <strong>›</strong></a>
                <a className="btn btn-outglow" href="#perfil">Conhecer perfil</a>
              </div>
            </div>
            <img className="hero-character" src={img('personagem_banner.png')} alt="Personagem gamer em destaque" />
          </div>
        </section>

        <section id="lancamentos" className="content-section section-anchor">
          <div className="container-xl">
            <div className="section-heading">
              <div className="sml-title"><img src={img('fire.png')} alt="" /><h2>Lançamentos</h2></div>
              <p>Confira alguns dos jogos em destaque na GameZone.</p>
            </div>
            <div className="launch-grid">
              {launches.map((game) => (
                <article className="game-card" key={game.title}>
                  <div className="game-image-wrap"><img src={img(game.image)} alt={`Capa do jogo ${game.title}`} /></div>
                  <div className="game-card-body">
                    <span className="genre-tag">{game.genre}</span>
                    <h3>{game.title}</h3>
                    <div className="rating-platforms">
                      <span className="rating"><img src={img('star.png')} alt="" /> {game.rating}</span>
                      <span className="platforms" aria-label="Plataformas disponíveis">
                        {game.platforms.map((platform) => <img key={platform} src={img(platform)} alt="" />)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="generos" className="dark-panel-section section-anchor">
          <div className="container-xl genre-panel">
            <h2>Encontre seu próximo jogo</h2>
            <p>Encontre experiências baseadas no seu estilo.</p>
            <div className="genre-grid">
              {genres.map(([name, icon]) => (
                <a className="genre-card" href="#lancamentos" key={name} aria-label={`Explorar jogos do gênero ${name}`}>
                  <img src={img(icon)} alt="" />
                  <h3>{name}</h3>
                </a>
              ))}
            </div>
            <a className="btn btn-outglow" href="#lancamentos">Veja os jogos em destaque <strong>›</strong></a>
          </div>
        </section>

        <section id="perfil" className="profile-section section-anchor">
          <div className="container-xl">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Seu espaço dentro da GameZone</p>
              <h2>Perfil do Usuário</h2>
              <p>Conheça o perfil, os jogos favoritos e a evolução do jogador.</p>
            </div>

            <div className="profile-info-card">
              <div className="profile-main">
                <img className="profile-avatar" src={img('user.png')} alt="Ícone do usuário Alex Pinheiro" />
                <div className="profile-data">
                  <div><strong>Nome</strong><span>Alex Pinheiro</span></div>
                  <div><strong>Usuário</strong><span>@alexgamer</span></div>
                  <div><strong>Nível</strong><span>Nível 16</span></div>
                </div>
              </div>
              <div className="platform-area">
                <h3>Plataformas</h3>
                <div className="platform-list"><span>PC</span><span>PlayStation</span><span>Xbox</span><span>Nintendo Switch</span></div>
              </div>
            </div>

            <div className="profile-subsection">
              <div className="subheading"><h2>Jogos favoritos</h2></div>
              <div className="favorite-grid">
                <article className="favorite-card"><img src={img('hwleg.jpg')} alt="Hogwarts Legacy" /><div><h3>Hogwarts Legacy</h3><p>Uma aventura em um mundo mágico.</p></div></article>
                <article className="favorite-card"><img src={img('bf6.jpg')} alt="Battlefield 6" /><div><h3>Battlefield 6</h3><p>Ação e estratégia em batalhas intensas.</p></div></article>
              </div>
            </div>

            <div className="profile-subsection">
              <div className="subheading"><h2>Estatísticas do jogador</h2></div>
              <div className="player-stat-grid">
                {[['24', 'Jogos concluídos'], ['156', 'Horas jogadas'], ['18', 'Conquistas'], ['86%', 'Taxa de conclusão']].map(([number, label]) => (
                  <article className="player-stat-card" key={label}><strong>{number}</strong><span>{label}</span></article>
                ))}
              </div>
            </div>

            <div className="profile-subsection">
              <div className="subheading"><h2>Conquistas</h2></div>
              <div className="achievement-grid">
                {achievements.map(([title, text]) => (
                  <article className="achievement-card" key={title}>
                    <div className="achievement-icon">★</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="estatisticas" className="stats-section section-anchor">
          <div className="container-xl">
            <div className="section-heading centered-heading">
              <h2>A comunidade GameZone</h2>
              <p>Um universo construído por jogadores.</p>
            </div>
            <div className="stats-grid">
              {stats.map(([number, label, icon]) => (
                <article className="community-stat" key={label}>
                  <img src={img(icon)} alt="" />
                  <div><strong>{number}</strong><span>{label}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container-xl final-cta-inner">
            <div><p className="eyebrow">Seu próximo jogo está esperando</p><h2>Pronto para explorar?</h2><p>Descubra novos mundos, encontre seu estilo e continue sua jornada gamer.</p></div>
            <a className="btn btn-purp" href="#lancamentos">Explorar jogos <strong>›</strong></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container-xl footer-grid">
          <div className="footer-brand"><img src={img('logo.jpg')} alt="Logo GameZone" /><p>Conectando jogadores. Criando histórias. Construindo o futuro dos games.</p><div className="social-links"><a href="#" aria-label="Discord"><img src={img('discord.png')} alt="" /></a><a href="#" aria-label="Instagram"><img src={img('instagram.png')} alt="" /></a><a href="#" aria-label="Twitter"><img src={img('twitter.png')} alt="" /></a><a href="#" aria-label="YouTube"><img src={img('youtube.png')} alt="" /></a></div></div>
          <div className="footer-column"><h3>Navegação</h3><a href="#inicio">Início</a><a href="#lancamentos">Lançamentos</a><a href="#generos">Gêneros</a><a href="#perfil">Perfil</a></div>
          <div className="footer-column newsletter"><h3>Fique por dentro</h3><p>Receba novidades sobre jogos e conteúdos da GameZone.</p><div className="newsletter-form"><input id="email" type="email" placeholder="Seu melhor e-mail" aria-label="Seu melhor e-mail" /><button id="send" type="button" aria-label="Enviar e-mail"><img src={img('send.png')} alt="" /></button></div></div>
        </div>
      </footer>
    </div>
  )
}

export default App
