import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Component } from "react";

const categoriesQuery = gql`
  {
    categories {
      name
    }
  }
`

class Navigation extends Component {
    render() {
        return (
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
        )
    }
}

export default Navigation;