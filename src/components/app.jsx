import React, { Component } from "react";
import giphy from "giphy-api";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "ZIG63RdogLgqI"
    };

    this.search("DBZ");
    // this.changeId("jlzggZ8GntqZ6v3ONs")
    this.changeId = this.changeId.bind(this);
  }

  search = (query) => {
    giphy("2bGP1MrqRQrMuFpRleXi5AN1fIb9KYz8").search({
      q: query,
      rating: 'g',
      limit: 21
    }, (error, result) => {
      this.setState({ gifs: result.data });
      // result contains gif data!
    });
  }

  changeId = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeId={this.changeId} />
        </div>
      </div>
    )
  }
}

export default App
