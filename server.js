const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server-express');
const schema = require('./src/data/graphql_merger');
const typeDefs = schema.typeDefs;
const resolvers = schema.resolvers;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
  return res.send('pong');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/webshop_db', {useNewUrlParser: true});
const apolloServer = new ApolloServer({typeDefs, resolvers});
apolloServer.applyMiddleware({app});

app.listen(8080, '192.168.1.79');
