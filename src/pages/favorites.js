import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Poster from "../components/Poster";

class Favorites extends React.Component {
  render() {
    return (
      <div className="mt-20">
        <h1>Favorites</h1>
        {this.props.favorites.length ? (
          <div className="media-grid mt-20">
            {this.props.favorites.map((f, i) => (
              <div className="movie-card" key={i}>
                <Poster path={f.poster_path} />
                <div className="card-info">
                  {f.type === "season" ? (
                    <Link
                      to={`/series/${f.series_id}/episodes/${f.season_number}`}
                    >
                      {f.name}
                    </Link>
                  ) : (
                    <Link to={"/series/" + f.id}>{f.name}</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-top">
            You have not added anything to your favorites yet
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ favorites: state.favorites });

export default connect(mapStateToProps)(Favorites);
