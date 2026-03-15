/* ══════════════════════════════════════════════════════════════
   TORU BOTS — script.js
   Partículas · Cursor · Modal comandos · Animaciones · Navbar
══════════════════════════════════════════════════════════════ */

/* ── Datos de comandos por bot ─────────────────────────────── */
const BOT_DATA = {
  toru: {
    icon: '⚡',
    name: 'Toru',
    subtitle: 'Todos los comandos disponibles',
    prefix: '#',
    categories: [
      {
        name: 'Descargas',
        commands: [
          { cmd: 'tiktok', args: '<link> [-hd|-mp3|-img]', desc: 'Descarga videos, audio e imágenes de TikTok sin marca de agua.' },
          { cmd: 'github',  args: '<user/repo> [-stalk|-repos|-sr]', desc: 'Descarga repos, info de usuarios y búsqueda en GitHub.' },
          { cmd: 'ytmp3',   args: '<link | nombre>', desc: 'Descarga audio de YouTube en formato MP3.' },
          { cmd: 'ytmp4',   args: '<link | nombre>', desc: 'Descarga video de YouTube en MP4.' },
          { cmd: 'igdl',    args: '<link>', desc: 'Descarga fotos y reels de Instagram.' },
          { cmd: 'fbdl',    args: '<link>', desc: 'Descarga videos de Facebook.' },
        ]
      },
      {
        name: 'Herramientas',
        commands: [
          { cmd: 'dix',     args: '(responder archivo)', desc: 'Sube cualquier archivo a dix.lat y obtén enlace directo.' },
          { cmd: 'sticker', args: '(responder imagen/gif)', desc: 'Convierte imágenes o GIFs en stickers de WhatsApp.' },
          { cmd: 'toimg',   args: '(responder sticker)', desc: 'Convierte un sticker en imagen PNG.' },
          { cmd: 'qr',      args: '<texto|link>', desc: 'Genera un código QR de cualquier texto o enlace.' },
          { cmd: 'clima',   args: '<ciudad>', desc: 'Muestra el clima actual de cualquier ciudad.' },
        ]
      },
      {
        name: 'Grupos',
        commands: [
          { cmd: 'kick',    args: '@usuario', desc: 'Expulsa a un miembro del grupo (solo admins).' },
          { cmd: 'add',     args: '<número>', desc: 'Agrega un número al grupo.' },
          { cmd: 'mute',    args: '(tiempo)', desc: 'Silencia el grupo por un tiempo determinado.' },
          { cmd: 'tagall',  args: '[mensaje]', desc: 'Menciona a todos los miembros del grupo.' },
          { cmd: 'warn',    args: '@usuario <razón>', desc: 'Advierte a un usuario. A los 3 warns es expulsado.' },
        ]
      },
      {
        name: 'Entretenimiento',
        commands: [
          { cmd: 'ia',      args: '<pregunta>', desc: 'Consulta a la IA integrada.' },
          { cmd: 'imagen',  args: '<prompt>', desc: 'Genera imágenes con IA.' },
          { cmd: 'meme',    args: '', desc: 'Envía un meme aleatorio.' },
          { cmd: 'dado',    args: '', desc: 'Lanza un dado virtual.' },
        ]
      }
    ]
  },
  nami: {
    icon: '🎵',
    name: 'Nami',
    subtitle: 'Especializada en multimedia e IA',
    prefix: '!',
    categories: [
      {
        name: 'Multimedia',
        commands: [
          { cmd: 'play',    args: '<nombre>', desc: 'Busca y envía música directamente por WhatsApp.' },
          { cmd: 'video',   args: '<nombre>', desc: 'Busca y descarga videos de YouTube.' },
          { cmd: 'playlist',args: '<link>',   desc: 'Descarga una playlist completa de YouTube.' },
          { cmd: 'lyrics',  args: '<canción>', desc: 'Muestra la letra de una canción.' },
          { cmd: 'spotify', args: '<link>',   desc: 'Descarga canciones desde Spotify.' },
        ]
      },
      {
        name: 'Inteligencia Artificial',
        commands: [
          { cmd: 'chat',    args: '<texto>', desc: 'Conversa con la IA en modo libre.' },
          { cmd: 'traductor', args: '<idioma> <texto>', desc: 'Traduce texto a cualquier idioma.' },
          { cmd: 'resumir', args: '(responder texto)', desc: 'Resume cualquier texto o artículo.' },
          { cmd: 'imgai',   args: '<prompt>', desc: 'Genera imágenes artísticas con IA.' },
        ]
      },
      {
        name: 'Conversión',
        commands: [
          { cmd: 'conv',    args: '<valor> <de> <a>', desc: 'Convierte unidades (km, lb, USD, etc).' },
          { cmd: 'mp4tomp3',args: '(responder video)', desc: 'Extrae el audio de un video enviado.' },
          { cmd: 'compress',args: '(responder video)', desc: 'Comprime un video para reducir su tamaño.' },
          { cmd: 'hd',      args: '(responder imagen)', desc: 'Mejora la resolución de una imagen con IA.' },
        ]
      }
    ]
  },
  nae: {
    icon: '🌿',
    name: 'Nae',
    subtitle: 'Lite · Rápida y eficiente',
    prefix: '.',
    categories: [
      {
        name: 'Básicos',
        commands: [
          { cmd: 'info',    args: '', desc: 'Muestra información del bot y comandos disponibles.' },
          { cmd: 'ping',    args: '', desc: 'Verifica que el bot está activo y mide la latencia.' },
          { cmd: 'sticker', args: '(responder imagen)', desc: 'Convierte imágenes en stickers rápidamente.' },
          { cmd: 'toimg',   args: '(responder sticker)', desc: 'Convierte sticker a imagen.' },
          { cmd: 'qr',      args: '<texto>', desc: 'Genera un código QR de forma rápida.' },
        ]
      },
      {
        name: 'Descargas',
        commands: [
          { cmd: 'tt',      args: '<link>', desc: 'Descarga videos de TikTok sin marca de agua.' },
          { cmd: 'yt',      args: '<link|nombre>', desc: 'Descarga audio de YouTube.' },
          { cmd: 'ig',      args: '<link>', desc: 'Descarga publicaciones de Instagram.' },
        ]
      },
      {
        name: 'Privacidad',
        commands: [
          { cmd: 'anon',    args: '<mensaje>', desc: 'Envía un mensaje anónimo al grupo.' },
          { cmd: 'encrypt', args: '<texto>', desc: 'Encripta un texto de forma segura.' },
          { cmd: 'decrypt', args: '<código>', desc: 'Desencripta un texto previamente encriptado.' },
        ]
      }
    ]
  }
}

/* ── Partículas doradas ────────────────────────────────────── */
const canvas = document.getElementById('particles-canvas')
const ctx    = canvas.getContext('2d')

let particles = []
let W, H

function resizeCanvas() {
  W = canvas.width  = window.innerWidth
  H = canvas.height = window.innerHeight
}

resizeCanvas()
window.addEventListener('resize', resizeCanvas)

function randomBetween(a, b) { return a + Math.random() * (b - a) }

function createParticle() {
  const r = randomBetween(1, 2.5)
  return {
    x: randomBetween(0, W),
    y: randomBetween(0, H),
    r,
    dx: randomBetween(-0.25, 0.25),
    dy: randomBetween(-0.5, -0.1),
    alpha: randomBetween(0.2, 0.7),
    dalpha: randomBetween(-0.003, -0.001),
    color: Math.random() > 0.6 ? '#c9a227' : (Math.random() > 0.5 ? '#4a90ff' : '#f0c94a')
  }
}

function initParticles(n = 90) {
  particles = Array.from({ length: n }, createParticle)
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H)
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]
    ctx.save()
    ctx.globalAlpha = Math.max(0, p.alpha)
    ctx.fillStyle   = p.color
    ctx.shadowBlur  = 8
    ctx.shadowColor = p.color
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    p.x     += p.dx
    p.y     += p.dy
    p.alpha += p.dalpha

    if (p.alpha <= 0 || p.y < -10) {
      particles[i] = createParticle()
      particles[i].y = H + 5
    }
  }
  requestAnimationFrame(drawParticles)
}

initParticles()
drawParticles()

/* ── Fondo imagen/gif personalizable ───────────────────────── */
const bgImg = document.getElementById('bg-image')
if (bgImg && bgImg.src && bgImg.src !== window.location.href) {
  bgImg.style.display = 'block'
  document.querySelector('.bg-overlay').style.background =
    'rgba(5,13,26,0.75)'
}

/* ── Cursor personalizado ──────────────────────────────────── */
const dot  = document.querySelector('.cursor-dot')
const ring = document.querySelector('.cursor-ring')

let mx = 0, my = 0, rx = 0, ry = 0

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY
  dot.style.left = mx + 'px'
  dot.style.top  = my + 'px'
})

function animateCursor() {
  rx += (mx - rx) * 0.12
  ry += (my - ry) * 0.12
  ring.style.left = rx + 'px'
  ring.style.top  = ry + 'px'
  requestAnimationFrame(animateCursor)
}
animateCursor()

/* ── Navbar: scroll & hamburguesa ──────────────────────────── */
const navbar      = document.getElementById('navbar')
const hamburger   = document.getElementById('hamburger')
const mobileMenu  = document.getElementById('mobileMenu')

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40)
})

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  mobileMenu.classList.toggle('open')
})

// Cerrar menú mobile al hacer click en enlace
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open')
    mobileMenu.classList.remove('open')
  })
})

/* ── Tres puntitos dropdown ────────────────────────────────── */
const dotsBtn      = document.getElementById('dotsBtn')
const dotsDropdown = document.getElementById('dotsDropdown')

dotsBtn.addEventListener('click', e => {
  e.stopPropagation()
  dotsDropdown.classList.toggle('open')
})

document.addEventListener('click', e => {
  if (!dotsDropdown.contains(e.target) && e.target !== dotsBtn) {
    dotsDropdown.classList.remove('open')
  }
})

/* ── Contadores animados en Hero ───────────────────────────── */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now()
  const update = now => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(ease * target)
    if (progress < 1) requestAnimationFrame(update)
    else el.textContent = target
  }
  requestAnimationFrame(update)
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-number').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target))
      })
      counterObserver.disconnect()
    }
  })
}, { threshold: 0.5 })

const heroStats = document.querySelector('.hero-stats')
if (heroStats) counterObserver.observe(heroStats)

/* ── Reveal on scroll ──────────────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.bot-card, .price-card, .contact-card, .info-card, .section-header, .suggestion-form, .suggestion-info'
)

revealEls.forEach(el => el.classList.add('reveal'))

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80)
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

revealEls.forEach(el => revealObserver.observe(el))

/* ── Modal de comandos ─────────────────────────────────────── */
const modal = document.getElementById('commandsModal')

function openCommands(botKey) {
  const bot = BOT_DATA[botKey]
  if (!bot) return

  document.getElementById('modalIcon').textContent    = bot.icon
  document.getElementById('modalTitle').textContent   = bot.name + ' — Comandos'
  document.getElementById('modalSubtitle').textContent = bot.subtitle

  const body = document.getElementById('modalBody')
  body.innerHTML = ''

  bot.categories.forEach(cat => {
    const section = document.createElement('div')
    section.className = 'cmd-category'
    section.innerHTML = `<div class="cmd-category-title">${cat.name}</div>`

    cat.commands.forEach(c => {
      const item = document.createElement('div')
      item.className = 'cmd-item'
      item.innerHTML = `
        <span class="cmd-prefix">${bot.prefix}${c.cmd}</span>
        <div class="cmd-info">
          <div class="cmd-name">${c.args || 'Sin argumentos'}</div>
          <div class="cmd-desc">${c.desc}</div>
        </div>
      `
      section.appendChild(item)
    })

    body.appendChild(section)
  })

  modal.classList.add('open')
  document.body.style.overflow = 'hidden'
}

function closeCommands() {
  modal.classList.remove('open')
  document.body.style.overflow = ''
}

// Cerrar al click fuera del modal
modal.addEventListener('click', e => {
  if (e.target === modal) closeCommands()
})

// Cerrar con ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCommands()
})

/* ── Sugerencias: enviar por WhatsApp ──────────────────────── */
function sendSuggestion() {
  const name = document.getElementById('sugName').value.trim()
  const bot  = document.getElementById('sugBot').value
  const text = document.getElementById('sugText').value.trim()

  if (!name || !bot || !text) {
    showToast('⚠️ Completa todos los campos antes de enviar.')
    return
  }

  const msg =
    `*🐙 Sugerencia para TorúBots*\n\n` +
    `👤 *Nombre:* ${name}\n` +
    `🤖 *Bot:* ${bot}\n\n` +
    `💡 *Sugerencia:*\n${text}`

  const waUrl = `https://wa.me/example?text=${encodeURIComponent(msg)}`
  window.open(waUrl, '_blank')

  document.getElementById('sugName').value = ''
  document.getElementById('sugBot').value  = ''
  document.getElementById('sugText').value = ''
  showToast('✅ Redirigiendo a WhatsApp...')
}

/* ── Toast ─────────────────────────────────────────────────── */
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast')
  toast.textContent = msg
  toast.classList.add('show')
  setTimeout(() => toast.classList.remove('show'), duration)
}

/* ── Smooth scroll para links del navbar ───────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

/* ── Efecto parallax suave en el hero ──────────────────────── */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-visual')
  if (hero && window.innerWidth > 768) {
    const scrolled = window.scrollY
    hero.style.transform = `translateY(${scrolled * 0.08}px)`
  }
})

/* ── Efecto de brillo en hover de cards (mouse tracking) ───── */
document.querySelectorAll('.bot-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect  = card.getBoundingClientRect()
    const x     = ((e.clientX - rect.left) / rect.width)  * 100
    const y     = ((e.clientY - rect.top)  / rect.height) * 100
    const glow  = card.querySelector('.card-glow')
    if (glow) glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(201,162,39,0.4), rgba(26,108,247,0.2), transparent 65%)`
  })

  card.addEventListener('mouseleave', () => {
    const glow = card.querySelector('.card-glow')
    if (glow) glow.style.background = 'var(--grad-gold)'
  })
})
