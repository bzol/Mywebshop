import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { resolvers } from './logic/graphql_resolvers';
import { defaults } from './logic/graphql_defaults';
import { typeDefs } from './logic/graphql_typedefs';

export const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        new HttpLink({
            uri: 'http://192.168.1.79:8080/graphql',
            credentials: 'same-origin'
        })
    ]),
    clientState: {
        defaults,
        resolvers,
        typeDefs
    },
    cache: new InMemoryCache()
});