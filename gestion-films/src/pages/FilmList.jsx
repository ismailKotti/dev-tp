import FilmCard from '../components/FilmCard'

function FilmList({
  films = [],
  onDelete,
  onFavorite,
  title = 'Ma Bibliothèque de Films',
  emptyMessage = 'Aucun film à afficher.',
}) {
  return (
    <section>
      <h1>{title}</h1>

      {films.length === 0 ? (
        <p>{emptyMessage}</p>
      ) : (
        <div className="films-list">
          {films.map((film) => (
            <FilmCard
              key={film.id}
              film={film}
              onDelete={onDelete}
              onFavorite={onFavorite}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default FilmList
