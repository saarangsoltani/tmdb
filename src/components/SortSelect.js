import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { sortSeries } from "../actions";

const tmdbSortOptions = [
  "popularity.asc",
  "popularity.desc",
  "release_date.asc",
  "release_date.desc",
  "revenue.asc",
  "revenue.desc",
  "primary_release_date.asc",
  "primary_release_date.desc",
  "original_title.asc",
  "original_title.desc",
  "vote_average.asc",
  "vote_average.desc",
  "vote_count.asc",
  "vote_count.desc"
];

class SortSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(option) {
    this.props.sortSeries(option.value);
  };

  render() {
    let options = tmdbSortOptions.map(o => {
      let label = o
        .replace(/[.,_]/g, " ")
        .replace(/(desc|asc)/g, " ($&ending)");
      return { label, value: o };
    });

    let value = options.find(o => o.value === this.props.value);
    return (
      <Select
        value={value}
        onChange={this.handleChange}
        options={options}
        placeholder="Sort by"
      />
    );
  }
}

let mapStateToProps = state => ({ value: state.ui.selectedSortOrder });
export default connect(
  mapStateToProps,
  { sortSeries }
)(SortSelect);
