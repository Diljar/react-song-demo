import React, { Component } from "react";

import SongList from "./SongList";
import SongDetail from "./songDetail";

class App extends Component {
  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-4">
            <SongList />
          </div>
          <div className="col-4 offset-md-4">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
