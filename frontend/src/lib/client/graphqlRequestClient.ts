import {GraphQLClient} from 'graphql-request';
import {getToken} from '../auth'

const token = getToken();


const requestHeaders = {
  authorization: `bearer ${token}`
};

//console.table(requestHeaders);

const graphqlRequestClient = new GraphQLClient(<string>import.meta.env.VITE_REACT_APP_GRAPHQL_ENDPOINT, {
  credentials: "include",
  headers: requestHeaders
});


export default graphqlRequestClient;
