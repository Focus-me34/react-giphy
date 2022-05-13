import React, { Component } from "react"
import Gif from "./gif";

class GifList extends Component {
  constructor(props) {
    super(props)
  }

  renderList = () => this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} changeId={this.props.changeId} />);

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default GifList
