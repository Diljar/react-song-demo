import React, { Component } from "react";
import { connect } from "react-redux";

import { selectedSong } from "../actions";

class SongList extends Component {
  rendersongsList = () => {
    return this.props.songs.map(song => {
      return (
        <ul className="list-group" key={song.id}>
          <li className="list-group-item ">
            <div className="d-flex flex-column">
              <div>
                <img src={"/img/" + song.url} alt={song.title} />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <i
                    className="fas fa-play fa-lg"
                    style={{ color: "#cc0000" }}
                  />
                </div>
                <div className="d-flex flex-column">
                  <div>{song.title}</div>
                  <div>
                    <small className="form-text text-muted">
                      {song.album} - {song.year}
                    </small>
                  </div>
                </div>
                <button
                  onClick={() => this.props.selectedSong(song)}
                  type="button"
                  className="btn btn-sm btn-secondary ml-5"
                >
                  Select
                </button>
              </div>
            </div>
          </li>
        </ul>
      );
    });
  };

  render() {
    return <div>{this.rendersongsList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  {
    selectedSong
  }
)(SongList);
