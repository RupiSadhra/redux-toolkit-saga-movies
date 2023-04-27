import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieList = () => {
  const movieListItems = useSelector((state) => {
    return state.movies.movieList?.Search?.map((item) => {
      return (
        <div>
          <img src={item.Poster}></img>
          <p>{item.Title}</p>
        </div>
      );
    });
  });

  return <div className="movieGrid">{movieListItems}</div>;
};

export default MovieList;
