const ProductGraphqlSchema = `
type Product {
  productId: Int,
  category: String,
  price: Int,
  name: String,
  image: String
}

type Query{
  allProducts: [Product]!,
  product: Product!
}
`;

module.exports=ProductGraphqlSchema;