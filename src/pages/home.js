import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { discoverSeries } from "../actions";
import LoadingSpinner from "../components/LoadingSpinner";
import SortSelect from "../components/SortSelect";
import Poster from "../components/Poster";

class Home extends React.Component {
  componentDidMount() {
    this.props.discoverSeries();
  }

  seriesElements(series) {
    return series.map((s, i) => {
      return (
        <div className="movie-card" key={i}>
          <Poster path={s.poster_path} />
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
      <div className="row discover-header">
        <div className="col-sm-12 col-md-6 mb-20">

        </div>
        <div className="col-sm-12 col-md-6 mb-20">
          <SortSelect />
        </div>
      </div>
      <div className="row">
        {this.props.isLoading ? (
          <div className="spinner-wrapper">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="media-grid">{discoveredSeriesElements}</div>
        )}
      </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  discovered: state.series.discovered,
  isLoading: state.ui.isLoading

});
const mapDispatchToProps = { discoverSeries };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
