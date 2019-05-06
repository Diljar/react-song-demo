import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="alert alert-warning" role="alert">
        Select a song!
      </div>
    );
  }

  const renderSongDetail = (
    <div className="card" style={{ width: "18rem" }}>
      <img src={"/img/" + song.url} alt={song.title} />
      <div className="card-body">
        <h5 className="card-title">Title :{song.title}</h5>
        <p className="card-text">Duration : {song.duration}</p>
      </div>
    </div>
  );

  return renderSongDetail;
};

const mapstateToProps = state => {
  return {
    song: state.selectedSong
  };
};
export default connect(mapstateToProps)(SongDetail);
