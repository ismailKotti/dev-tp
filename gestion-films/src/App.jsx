import { useState } from 'react'
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
}

export default App;
