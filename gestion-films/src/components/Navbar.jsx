import './Navbar.css'

const links = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'films', label: 'Films' },
  { id: 'ajouter', label: 'Ajouter' },
  { id: 'favoris', label: 'Favoris' },
]

function Navbar({ activePage = 'accueil', setActivePage }) {
  function handleClick(e, page) {
    e.preventDefault()
    if (setActivePage) {
      setActivePage(page)
    }
  }

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activePage === link.id ? 'active' : ''}
              onClick={(e) => handleClick(e, link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#accueil"
        className="navbar-logo"
        onClick={(e) => handleClick(e, 'accueil')}
      >
        <span>🎬</span>
        <span>Gestion Films</span>
      </a>
    </nav>
  )
}

export default Navbar
