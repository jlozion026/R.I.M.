import { GraphQLClient } from 'graphql-request';

const graphqlRequestClient = new GraphQLClient(<string>import.meta.env.VITE_REACT_APP_GRAPHQL_ENDPOINT, {
  credentials: "include",
});

export default graphqlRequestClient;
