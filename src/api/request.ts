import { GraphQLClient } from 'graphql-request';

const graphqlApiBaseUrl = process.env.REACT_APP_ANIMELOOP_API_URL || 'http://127.0.0.1:9876'

const graphQLClient = new GraphQLClient(`${graphqlApiBaseUrl}/graphql`, {
  headers: {
    Accept: 'application/json',
  },
});

export { graphQLClient }