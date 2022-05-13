// My first intereaction with React JS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       <p>Hello, {name}</p>
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      counter: 0
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter += 1
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? "clicked" : null}
        onClick={this.handleClick}>
        <p>Hello {this.props.name}</p>
        <p>Click counter: {this.state.counter}</p>
      </ div>
    )
  }
}

if (root) {
  ReactDOM.render(<Hello name="Amin" />, root);
}
