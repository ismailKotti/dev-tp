function FilmCard({ film, onDelete, onFavorite }) {
  return (
    <article className="film-card">
      {film.image && (
        <img
          className="film-poster"
          src={film.image}
          alt={`Affiche du film ${film.title}`}
        />
      )}

      <div className="film-card-content">
        <h2>{film.title}</h2>
        <p><strong>Année :</strong> {film.year}</p>
        <p><strong>Genre :</strong> {film.genre}</p>
        <p><strong>Réalisateur :</strong> {film.director}</p>
        <p><strong>Durée :</strong> {film.duration}</p>
        <p className="film-description">{film.description}</p>

        <div className="film-card-actions">
          <button
            className="favorite-button"
            type="button"
            onClick={() => onFavorite && onFavorite(film.id)}
          >
            {film.favorite ? '❤️ Favori' : '🤍 Favoris'}
          </button>

          <button
            className="delete-button"
            type="button"
            onClick={() => onDelete && onDelete(film.id)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </article>
  )
}

export default FilmCard
