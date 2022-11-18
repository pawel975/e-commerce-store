import { Component } from "react";
import "./SizeOption.scss";

class SizeOption extends Component {
    render(){

        const {displayValue} = this.props.sizeParams;

        return(
            <button className="size-option">
                <span className="size-option__name">{displayValue}</span>
            </button>
        )
    }
}

export default SizeOption;