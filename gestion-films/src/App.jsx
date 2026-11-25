import { useState } from 'react'
<<<<<<< HEAD
import React, { useState } from "react";
import FilmListe from "./FilmListe";
function App() {
  const [films, setFilms] = useState([]);

  function supprimerFilm(id) {
    setFilms(films.filter((film) => film.id !== id));
  }

  function favorisFilm(id) {
    setFilms(
      films.map((film) => {
        if (film.id === id) {
          return { ...film, favorite: !film.favorite };
        }
        return film;
      })
    );
  }

  return (
    <div>

      <h1>Ma Bibliothèque de Films</h1>

      <FilmListe
        films={films}
        setFilms={setFilms}
        onDelete={supprimerFilm}
        onFavorite={favorisFilm}
      />

    </div>
  );
=======
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FilmList from './pages/FilmList'

function App() {
  const [activePage, setActivePage] = useState('accueil')

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main style={{ padding: '20px' }}>
        {activePage === 'accueil' && <Home setActivePage={setActivePage} />}
        {activePage === 'films' && <FilmList />}
        {activePage === 'ajouter' && <h1>Ajouter un film</h1>}
        {activePage === 'favoris' && <h1>Favoris</h1>}
      </main>
    </div>
  )
>>>>>>> f128697da6602da827e0a81cbdc5477b67a0fca6
}

export default App;
