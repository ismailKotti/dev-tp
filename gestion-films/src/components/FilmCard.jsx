function FilmCard({ film, onDelete, onFavorite }) {
  return (
    <div className="film-card">
      <h3>{film.title}</h3>

      <p>Année : {film.year}</p>
      <p>Genre : {film.genre}</p>
      <p>Réalisateur : {film.director}</p>
      <p>Durée : {film.duration}</p>
      <p>{film.description}</p>

      <button type="button" onClick={() => onFavorite && onFavorite(film.id)}>
        {film.favorite ? '❤️ Favori' : '🤍 Favoris'}
      </button>

      <button type="button" onClick={() => onDelete && onDelete(film.id)}>
        Supprimer
      </button>
    </div>
  )
}

export default FilmCard
