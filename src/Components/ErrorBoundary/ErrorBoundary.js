import { Component } from "react";
import "./ErrorBoundary.scss";

class ErrorBoundary extends Component {
    
    render(){
        return(
            <h1 className="error-boundary">404 - Not Found</h1>
        )
    }
}

export default ErrorBoundary;