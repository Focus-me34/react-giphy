import React, { Component } from "react"
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif";


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="ZIG63RdogLgqI" />
          </div>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    )
  }
}

export default App
