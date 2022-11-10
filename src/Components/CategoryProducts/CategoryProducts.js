import { Component } from "react";
import "./CategoryProducts.scss";

class CategoryProducts extends Component {
    render(){
        return (
            <section className="category-products">
                <h2>{this.props.currentCategory}</h2>
            </section>
        )
    }
}

export default CategoryProducts;