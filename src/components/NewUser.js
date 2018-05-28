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
            <form onSubmit>
                <label>
                Tell Us About Yourself:
                <input type="text" name="Name" value={this.state.name} onChange={this.handleChange} />
                <input type="text" name="Instrument" value={this.state.instrument} onChange={this.handleChange} />
                <input type="text" name="Years Played" value={this.state.yearsPlayed} onChange={this.handleChange} />
                <input type="text" name="Genres" value={this.state.genres} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

export default NewUser;