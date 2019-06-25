import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import LoadingSpinner from "../components/LoadingSpinner";
import SortSelect from "../components/SortSelect";
import GenresSelect from "../components/GenresSelect";
import Poster from "../components/Poster";
import { setPaginationPage } from "../actions";

class Home extends React.Component {
  constructor() {
    super();
    this.onPaginationChange = this.onPaginationChange.bind(this);
  }

  onPaginationChange({ selected }) {
    this.props.setPaginationPage(selected + 1);
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
            <GenresSelect />
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
        <ReactPaginate
          pageRangeDisplayed={2}
          //max 1000 pages https://www.themoviedb.org/talk/5bf9cec092514104da01b02e
          pageCount={Math.min(discovered.total_pages, 1000)}
          initialPage={discovered.page - 1}
          forcePage={discovered.page - 1}
          onPageChange={this.onPaginationChange}
          marginPagesDisplayed={2}
          containerClassName={`mb-10 pagination ${
            this.props.isLoading ? "hidden" : ""
          }`}
          pageClassName="page"
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  discovered: state.series.discovered,
  isLoading: state.ui.isLoading
});

const mapDispatchToProps = { setPaginationPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
