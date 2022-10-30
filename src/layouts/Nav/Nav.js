import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import './Nav.scss';

const categoriesQuery = gql`
  {
    categories {
      name
    }
  }
`
const categoriesNav = 
    <Query query={categoriesQuery}>
        {({loading, data}) => {

            if (loading) return "Loading...";

            const {categories} = data;

            const categoriesNavList = categories.map(category => {
                const {name} = category;

                return <button className="categories-list__category" role="tab" aria-selected="false" key={name}>{name}</button>
            })

            return <div role="tablist" className="categories-list">{categoriesNavList}</div>
        }}
    </Query>

class Nav extends Component {
    render(){
        return (
            <nav>         
               {categoriesNav} 
            </nav>
        )
    }
}   

export default Nav;