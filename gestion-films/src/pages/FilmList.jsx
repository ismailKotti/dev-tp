import React from "react";
import FilmCard from "./FilmCard";
function FilmListe({ onDelete, onFavorite }) {

  const films = [

    {
      id: 1,
      title: "Avatar",
      year: 2009,
      genre: "Science-fiction",
      director: "James Cameron",
      duration: "2h 42min",
      description: "Un humain découvre la planète Pandora.",
      favorite: false
    },

    {
      id: 2,
      title: "Joker",
      year: 2019,
      genre: "Drame / Thriller",
      director: "Todd Phillips",
      duration: "2h 02min",
      description: "L'histoire d'Arthur Fleck.",
      favorite: false
    },

    {
      id: 3,
      title: "Titanic",
      year: 1997,
      genre: "Romance / Drame",
      director: "James Cameron",
      duration: "3h 14min",
      description: "Une histoire d'amour à bord du Titanic.",
      favorite: false
    }

  ];

  return (
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
  );
}

export default FilmListe;