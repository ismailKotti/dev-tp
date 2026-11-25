import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FilmList from './pages/FilmList'

const initialFilms = [
  {
    id: 1,
    title: 'Avatar',
    year: 2009,
    genre: 'Science-fiction',
    director: 'James Cameron',
    duration: '2h 42min',
    description: 'Un humain découvre la planète Pandora.',
    favorite: false,
  },
  {
    id: 2,
    title: 'Joker',
    year: 2019,
    genre: 'Drame / Thriller',
    director: 'Todd Phillips',
    duration: '2h 02min',
    description: "L'histoire d'Arthur Fleck.",
    favorite: false,
  },
  {
    id: 3,
    title: 'Titanic',
    year: 1997,
    genre: 'Romance / Drame',
    director: 'James Cameron',
    duration: '3h 14min',
    description: "Une histoire d'amour à bord du Titanic.",
    favorite: false,
  },
]

function App() {
  const [activePage, setActivePage] = useState('accueil')
  const [films, setFilms] = useState(initialFilms)

  function supprimerFilm(id) {
    setFilms(films.filter((film) => film.id !== id))
  }

  function favorisFilm(id) {
    setFilms(
      films.map((film) => {
        if (film.id === id) {
          return { ...film, favorite: !film.favorite }
        }
        return film
      })
    )
  }

  const favoriteFilms = films.filter((film) => film.favorite)

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main style={{ padding: '20px' }}>
        {activePage === 'accueil' && <Home setActivePage={setActivePage} />}

        {activePage === 'films' && (
          <FilmList
            films={films}
            onDelete={supprimerFilm}
            onFavorite={favorisFilm}
          />
        )}

        {activePage === 'ajouter' && <h1>Ajouter un film</h1>}

        {activePage === 'favoris' && (
          <FilmList
            title="Mes Favoris"
            films={favoriteFilms}
            onDelete={supprimerFilm}
            onFavorite={favorisFilm}
            emptyMessage="Aucun film dans vos favoris."
          />
        )}
      </main>
    </div>
  )
}

export default App
