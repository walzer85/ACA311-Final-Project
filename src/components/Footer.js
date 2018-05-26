import React from "react";

class Footer extends Component {
    render() {
      return (
        <div className="square" onClick={() => this.props.onClick()}>
          <h4>Created by Eric Walz as part of the Austin Coding Academy Program</h4>
        </div>
      );
    }
  }

export default Footer;