import { Component } from "react";
import CartOverlay from "../../Components/CartOverlay/CartOverlay";
import "./Main.scss";

class Main extends Component {
    render(){
        return (
            <main>
                <CartOverlay/>
            </main>
        )
    }
}   

export default Main;