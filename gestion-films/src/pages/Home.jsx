import './Home.css'
import heroImage from '../assets/hero.png'

function Home({ setActivePage }) {
  function handleDiscoverClick() {
    if (setActivePage) {
      setActivePage('films')
    }
  }

  return (
    <section className="home">
      <div className="home-content">
        <h1 className="home-title">Bienvenue sur Gestion Films</h1>
        <p className="home-text">
          Découvrez notre collection de films, ajoutez vos titres préférés et
          enregistrez vos favoris facilement en un seul endroit.
        </p>
        <button type="button" className="home-btn" onClick={handleDiscoverClick}>
          Découvrir les films
        </button>
      </div>
      <img className="home-illustration" src={heroImage} alt="" />
    </section>
  )
}

export default Home

