import { Component } from "react";
import parse from "html-react-parser";

class ParsedHtml extends Component {

    constructor(props){
        super(props)
        this.html = this.props.html
    }
    render(){
        return parse(this.html);
    }
}

export default ParsedHtml;