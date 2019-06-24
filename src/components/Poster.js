import React from "react";
import posterPlaceholder from "../images/movie_placeholder.png";

const Poster = props => {
  let posterSize = props.size || "w185";
  let baseUrl = `http://image.tmdb.org/t/p/${posterSize}/`;
  let posterUrl = props.path ? baseUrl + props.path : posterPlaceholder;
  return <img src={posterUrl} className="shadowed poster" alt="poster"/>;
};

export default Poster;
