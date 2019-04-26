import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const CART_GQL_QUERY = gql`
query {
    shoppingCart @client{
        cartItems
    }
}
`;

export const CartGqlQuery = graphql(CART_GQL_QUERY, {
    props: ({ data: cartQuery }) => ({ cartQuery })
});