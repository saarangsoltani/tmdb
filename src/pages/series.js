import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as moment from "moment";
import Poster from "../components/Poster";
import LoadingSpinner from "../components/LoadingSpinner";
import { languageName, countryName } from "../helpers";
import {
  fetchSelectedSeries,
  addItemToFavorites,
  removeItemFromFavorites
} from "../actions";

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }
  componentDidMount() {
    let tvSeriesId = this.props.match.params.id;
    this.props.fetchSelectedSeries(tvSeriesId);
  }

  handleFavoriteClick() {
    const tvSeriesId = parseInt(this.props.match.params.id);
    if (this.isFavorite()) {
      this.props.removeItemFromFavorites(tvSeriesId);
    } else {
      const series = this.props.selectedSeries;
      const data = {
        id: tvSeriesId,
        poster_path: series.poster_path,
        name: series.name,
        type: "series"
      };
      this.props.addItemToFavorites(data);
    }
  }

  seasonsElements() {
    const tvSeriesId = parseInt(this.props.match.params.id);
    return this.props.selectedSeries.seasons.map((s, i) => (
      <div className="movie-card" key={i}>
        <Poster path={s.poster_path} />
        <div className="card-info">
          <Link to={`/series/${tvSeriesId}/episodes/` + s.season_number}>{s.name}</Link>
        </div>
      </div>
    ));
  }

  isFavorite() {
    return this.props.favorites.find(
      fav => fav.id === this.props.selectedSeries.id
    );
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="spinner-wrapper">
          <LoadingSpinner />
        </div>
      );
    }
    const series = this.props.selectedSeries;
    const countries = Array.isArray(series.origin_country)
      ? series.origin_country.map(c => countryName(c)).join()
      : "";
    const genres = Array.isArray(series.genres)
      ? series.genres.map(g => g.name)
      : [];
    return (
      <section>
        <div className="row series-header">
          <div className="col-sm-12 col-md-last col-md-3 col-lg-4">
            <div className="align-center">
              <Poster path={series.poster_path} size="w342" />
              <p>
                <button
                  className={`button rounded ${
                    this.isFavorite() ? "secondary" : ""
                  }`}
                  onClick={this.handleFavoriteClick}
                >
                  <span className="icon-bookmark inverse" />
                  {this.isFavorite() ? "Remove from" : "Add to"} Favorites
                </button>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-8">
            <div>
              <h1 className="heading">{series.name}</h1>
              <div className="extras">
                <span>
                  <strong>{series.number_of_seasons}</strong> Seasons ({" "}
                  <strong> {series.number_of_episodes}</strong> episodes)
                </span>
                <span>Language: {languageName(series.original_language)}</span>
              </div>
              <div className="extras">
              {series.first_air_date ?
                <span>
                  First aired on {moment(series.first_air_date).format()}
                </span>
                : ''
              }
                <span>Produced in {countries}</span>
              </div>
              <div className="extras">
                <span>
                  {genres.map((g, i) => (
                    <mark className="mr-5" key={i}>
                      {g}
                    </mark>
                  ))}
                </span>
              </div>
              <h2 className="mt-10 mb-10">Synopsis</h2>
              <p>{series.overview || <small>not available</small>}</p>
              <div className="mt-30">
                <h2>{series.name} Seasons</h2>
                <div className="media-grid mt-10">{this.seasonsElements()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapActionToProps = {
  fetchSelectedSeries,
  addItemToFavorites,
  removeItemFromFavorites
};
const mapStateToProps = state => ({
  selectedSeries: state.series.selectedSeries,
  isLoading: state.ui.isLoading,
  favorites: state.favorites
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Series);
