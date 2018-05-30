import React from "react";
import SubmitThatYou from "./SubmitThankYou";

class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.state.name,
            instrument: this.state.instrument,
            yearsPlayed: this.state.yearsPlayed,
            genres: this.state.genres,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        render() {
            return (
                <div>
                    <SubmitThatYou />
                </div>
            )
        }
        event.preventDefault();
        }

    render() {
      return (
        <div className="square" onClick={() => this.props.onClick()}>
            <form>
                <label>
                Name:
                <input
                    name="name"
                    type="text"
                    checked={this.state.name}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                Instrument:
                <input
                    name="instrument"
                    type="text"
                    value={this.state.instrument}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                Years Played:
                <input
                    name="yearsPlayed"
                    type="number"
                    value={this.state.yearsPlayed}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                Genres Played:
                <input
                    name="genres"
                    type="text"
                    value={this.state.genres}
                    onChange={this.handleInputChange} />
                </label>
            </form>
        </div>
      );
    }
  }

export default NewUser;