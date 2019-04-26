import { gql } from 'apollo-boost';
export const ProductFragment = {
    product: gql`
    fragment ProductFragment on Product{
        productId
        category
        price
        name
        image
}
`
}