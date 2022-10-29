import {gql} from '@apollo/client';
import {Query} from '@apollo/client/react/components';
import React from 'react';

const categoriesQuery = gql`
  {
    categories {
      name,
      products {
        id
      }
    }
  }
`

class App extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Query query={categoriesQuery}>
          {
            ({loading, data}) => {
              if (loading) return "Loading...";
              
              const {name} = data.categories[0];

              return <h2>{name}</h2>

            }
          }
        </Query>
      </div>
    )
  };
}

export default App;
