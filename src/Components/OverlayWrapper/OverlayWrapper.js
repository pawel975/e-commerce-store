import { Component } from "react";

class OverlayWrapper extends Component {

    constructor(props){
        super()
        this.component = props.children;
    }

    render(){
        return(
            <div className="overlay-wrapper">
                {this.component}
            </div>
        )
    }
}

export default OverlayWrapper