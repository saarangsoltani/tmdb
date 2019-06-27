import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as moment from "moment";
import Poster from "../components/Poster";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  fetchSelectedSeries,
  fetchSelectedSeason,
  addItemToFavorites,
  removeItemFromFavorites
} from "../actions";

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }
  componentDidMount() {
    let tvSeriesId = parseInt(this.props.match.params.id);
    let seasonNumber = parseInt(this.props.match.params.season_number);
    if (this.props.selectedSeries.id !== tvSeriesId)
      this.props.fetchSelectedSeries(tvSeriesId);
    this.props.fetchSelectedSeason(tvSeriesId, seasonNumber);
  }

  handleFavoriteClick() {
    const season = this.props.selectedSeason;
    if (this.isFavorite()) {
      this.props.removeItemFromFavorites(season.id);
    } else {
      const data = {
        season_number: season.season_number,
        series_id: this.props.selectedSeries.id,
        poster_path: season.poster_path,
        name: `${this.props.selectedSeries.name} - ${season.name}`,
        type: "season"
      };
      this.props.addItemToFavorites(data);
    }
  }

  seasonsElements() {
    return this.props.selectedSeason.episodes.map((s, i) => (
      <div className="movie-card" key={i}>
        <Poster path={s.still_path} />
        <div className="card-info">{s.name}</div>
      </div>
    ));
  }

  isFavorite() {
    return this.props.favorites.find(fav => {
      return (
        fav.series_id === this.props.selectedSeries.id &&
        fav.season_number === this.props.selectedSeason.season_number
      );
    });
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
    const season = this.props.selectedSeason;
    return (
      <section>
        <div className="row series-header">
          <div className="col-sm-12 col-md-last col-md-3 col-lg-4">
            <div className="align-center">
              <Poster path={season.poster_path} size="w342" />
              <p>
                <Link to={"/series/" + series.id}>View All Seasons </Link>
              </p>
              <p>
                <button
                  className={`button rounded ${
                    this.isFavorite() ? "secondary" : ""
                  }`}
                  onClick={this.handleFavoriteClick}
                >
                  <span className="icon-bookmark inverse" />
                  {this.isFavorite() ? "remove from" : "add To"} favorites
                </button>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-8">
            <div>
              <h1 className="heading">
                {series.name} - {season.name}
              </h1>
              <div className="extras">
                <span>
                  <strong>{season.episodes.length}</strong> episodes
                </span>
                <span>Aired on {moment(season.air_date).format()}</span>
              </div>
              <h2 className="mt-10 mb-10">Season Overview</h2>
              <p>{season.overview || <small>not available</small>}</p>
              <div className="mt-30">
                <h2>
                  {series.name} - {season.name} Episodes
                </h2>
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
  fetchSelectedSeason,
  addItemToFavorites,
  removeItemFromFavorites
};
const mapStateToProps = state => ({
  selectedSeries: state.series.selectedSeries,
  selectedSeason: state.seasons.selectedSeason,
  isLoading: state.ui.isLoading,
  favorites: state.favorites
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Series);
