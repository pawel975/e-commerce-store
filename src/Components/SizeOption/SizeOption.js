import { Component } from "react";
import "./SizeOption.scss";

class SizeOption extends Component {
    render(){

        const {displayValue} = this.props.sizeParams;

        return(
            <button 
                className="size-option"
                onClick={this.props.handleSizeChange}
            >
                <span className="size-option__name">{displayValue}</span>
            </button>
        )
    }
}

export default SizeOption;