import { Component } from "react";

class Header extends Component {
    render() {
      return (
        <div className="square" onClick={() => this.props.onClick()}>
          <h1>Are You In Tune</h1>
          <h1> For Your Gig?</h1>
          <h3>Tune Yourself Here</h3>
          <h3>And Find Your Next Gig</h3>
        </div>
      );
    }
  }

export default Header;