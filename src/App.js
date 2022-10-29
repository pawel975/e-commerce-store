import { useQuery, gql } from '@apollo/client';

function App() {

  const GET_CATEGORIES = gql`
    query {
      categories {
        name,
        products {
          id
        }
      }
    }
  `
  const {loading, error, data} = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <h2>{data.categories[0].name}</h2>
    </div>
  );
}

export default App;
