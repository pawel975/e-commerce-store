import { Component } from "react";
import capitalizeWord from "../../helpers/capitalizeWord";
import "./CategoryProducts.scss";

class CategoryProducts extends Component {
    render(){
        return (
            <section className="category-products">
                <h2 className="category-products__category-name">{capitalizeWord(this.props.currentCategory)}</h2>
            </section>
        )
    }
}

export default CategoryProducts;