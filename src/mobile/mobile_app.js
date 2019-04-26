import React from 'react'
import { ApolloProvider } from 'react-apollo';
import { client } from '../shared/client';

export default MobileApp = () => {
    return (
        <ApolloProvider client={client}>
            <View >
                <Text>Hello</Text>
            </View>
        </ApolloProvider>
    )
}
