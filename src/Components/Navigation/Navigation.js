import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss';

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
        
                        return (
                            <NavLink
                                key={name} 
                                to={`${name}`}
                                className="categories-list__category"
                                role="tab"
                                aria-selected="false"
                            >
                                {name}
                            </NavLink>
                        )
                    })
        
                    return <nav role="tablist" className="categories-list">{categoriesNavList}</nav>
                }}
            </Query>
        )
    }
}

export default Navigation;