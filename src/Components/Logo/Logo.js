import { Component } from "react";

class Logo extends Component {
    render() {
        return (
            <button className="logo-container">
                <img src="/assets/img/brand-icon.svg" alt="brand logo"/>
            </button>
        )
    }
}

export default Logo;