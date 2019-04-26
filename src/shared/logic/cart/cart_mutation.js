import gql from 'graphql-tag';

export const CART_ADD_ITEM = gql`
mutation AddItemToCart($product: Product!){
    addItemToCart(product: $product) @client
}`;

export const CART_REMOVE_ITEM = gql`
mutation RemoveItemFromCart($product: Product!){
    removeItemFromCart(product: $product) @client
}`;

export const CART_SUBTRACT_ITEM = gql`
mutation SubtractItemFromCart($product: Product!){
    subtractItemFromCart(product: $product) @client
}`;

