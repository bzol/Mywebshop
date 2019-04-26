//need fetch 16 products
const Product= require('./product_mongoschema')

const ProductGqlResolver = {
    Query: {
        allProducts: async (obj, args, context) => {
            return await Product.find();
        },
        product: async (obj, args, context) => {
            return await Product.findOne();
        }
    }
}
module.exports = ProductGqlResolver;