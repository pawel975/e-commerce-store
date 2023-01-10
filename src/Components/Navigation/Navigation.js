import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, NavLink } from "react-router-dom";
import allActions from "../../actions";
import getCurrentRoute from "../../helpers/getCurrentRoute";
import queryCategories from "../../queries/queryCategories";
import './Navigation.scss';

class Navigation extends Component {

    render() {
        return (
            <Query query={queryCategories()}>
                {({loading, data}) => {
        
                    if (loading) return "Loading...";
        
                    const {categories} = data;
        
                    const categoriesNavList = categories.map(category => {
                        
                        const {name} = category;

                        let isSelected = false;

                        if (name === getCurrentRoute()) isSelected = true;
        
                        return (
                            <NavLink
                                key={name} 
                                to={name}
                                className="categories-list__category"
                                role="tab"
                                aria-selected={isSelected}
                                onClick={this.props.setCategory(name)}
                                >
                                {name}
                            </NavLink>
                        )
                    })
        
                    return (
                        <nav role="tablist" className="categories-list">
                            <BrowserRouter>
                                {categoriesNavList}
                            </BrowserRouter>
                        </nav>
                    )
                }}
            </Query>
        )
    }
}

const mapDispatchToProps = {
    setCategory: allActions.selectedCategoryActions.setCategory,
  }
  
  const mapStateToProps = (state) => {
    
    const selectedCategory = state.rootReducer.selectedCategory;
    
    return {
        selectedCategory
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);