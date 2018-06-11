import { Compoment } from "react";

//Create the layout for what shows up when a user submits their details
const submitBox = {
    margin: 15px;
    border: 5px light blue;
}


class SubmitThankYou extends Component {
    render(){
        return(
            <div className="submitBox">
                <h3>Thank you for sharing your talent!</h3>
            </div>
        )
    }
}

export default SubmitThankYou;