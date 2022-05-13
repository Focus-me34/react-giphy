import React, { Component } from "react"

class Gif extends Component {

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200w.gif?cid=ecf05e47g7fxppi7ngkgi2e1o0t8sqke9nazp8lltdcq517r&rid=200w.gif&ct=g`;
    return (
      <img src={src} alt="Giphy image" className="gif" />
    )
  }
}

export default Gif
