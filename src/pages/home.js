import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {discoverSeries} from "../actions";

class Home extends React.Component {

  componentDidMount() {
    this.props.discoverSeries();
  }

  seriesElements(series) {
    return series.map((s, i) => {
      let baseUrl = `http://image.tmdb.org/t/p/w185/`;
      let posterUrl = baseUrl + s.poster_path;
      return (
        <div className="movie-card" key={i}>
          <img src={posterUrl} className="shadowed poster" alt="poster"/>;
          <div className="card-info">
            <Link to={"/series/" + s.id}>{s.name}</Link>
          </div>
        </div>
      );
    });
  }

  render() {
    let discovered = this.props.discovered;
    let discoveredSeriesElements = this.seriesElements(discovered.results);
    return (
      <section>
            <div className="media-grid mt-20">{discoveredSeriesElements}</div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  discovered: state.series.discovered,
});
const mapDispatchToProps = { discoverSeries };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
