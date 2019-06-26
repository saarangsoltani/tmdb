import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ActionsBar extends React.Component {
  render() {
    const favoritesCount = this.props.favorites.length;
    return (
      <div className="actions align-right">
        <Link className="action-link" to={"/favorites"}>
          <span className="icon-bookmark inverse" />
          Favorites {favoritesCount ? `( ${favoritesCount} )` : ''}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({favorites: state.favorites})

export default connect(mapStateToProps)(ActionsBar);
