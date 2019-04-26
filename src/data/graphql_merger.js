const { ApolloServer, gql } = require('apollo-server-express');

const mergeModule = require('merge-graphql-schemas');
const { makeExecutableSchema } = require('graphql-tools');

const ProductGqlSchema = require('./product/product_gqlschema')
const ProductGqlResolver = require('./product/product_gqlresolver')

const graphqlSchemas = [
    ProductGqlSchema
]

const graphqlResolvers = [
    ProductGqlResolver
]

const typeDefs = mergeModule.mergeTypes(graphqlSchemas);
const resolvers = mergeModule.mergeResolvers(graphqlResolvers);

const GraphqlSchema = makeExecutableSchema({ typeDefs, resolvers });
//module.exports = GraphqlSchema;
exports.typeDefs = typeDefs;
exports.resolvers = resolvers;