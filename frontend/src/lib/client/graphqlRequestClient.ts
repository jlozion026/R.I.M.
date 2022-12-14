import {GraphQLClient} from 'graphql-request';

const requestHeaders = {
  authorization: "Bearer MY_TOKEN"
};

const graphqlRequestClient = new GraphQLClient(<string>import.meta.env.VITE_REACT_APP_GRAPHQL_ENDPOINT, {
  credentials: "include",
  headers: requestHeaders
});


export default graphqlRequestClient;
