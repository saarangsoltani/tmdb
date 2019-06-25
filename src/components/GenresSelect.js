import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { filterByGenres } from "../actions";

class GenresSelect extends React.Component {
  handleChange = genres => {
    if (genres === null) genres = [];
    this.props.filterByGenres(genres.map(g => g.value));
  };

  render() {
    const options = this.props.genres.map(g => ({
      label: g.name,
      value: g.id
    }));
    const value = options.filter(o => this.props.value.includes(o.value));
    return (
      <Select
        value={value}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
        placeholder={"Genres"}
      />
    );
  }
}

const mapStateToProps = state => ({
  value: state.ui.selectedGenres,
  genres: state.genres
});

export default connect(
  mapStateToProps,
  { filterByGenres }
)(GenresSelect);
