import React, { useEffect, useState } from "react";

function MovieCard(props) {
  const { movie } = props;
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=[yourkey]&i=${movie.imdbID}&plot=full`
    )
      .then((response) => response.json())
      .then((response) => setMovieDetails(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    /*   <div>
      Movie Details
      {movieDetails.Title}
      IMDB Rating : {movieDetails.imdbRating}
      Description : {movieDetails.Plot}
      <img src={movieDetails.Poster} style={{ height: 200, width: 200 }} />
    </div> */

    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={movieDetails.Poster}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{movieDetails.Title}</h5>
        <p className="card-text">{movieDetails.Plot}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
