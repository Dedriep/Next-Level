const express = require('express');
<<<<<<< HEAD
=======
<<<<<<< HEAD
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schema');
=======
>>>>>>> dedrie
const {ApolloServer} = require('apollo-server-express');
const path = require('path');

const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');
<<<<<<< HEAD
=======
>>>>>>> Ger01
>>>>>>> dedrie

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
<<<<<<< HEAD
  context: authMiddleware,
=======
<<<<<<< HEAD

=======
  context: authMiddleware,
>>>>>>> Ger01
>>>>>>> dedrie
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
<<<<<<< HEAD
=======
<<<<<<< HEAD
 
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
=======
>>>>>>> dedrie

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

<<<<<<< HEAD
=======
>>>>>>> Ger01
>>>>>>> dedrie
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
<<<<<<< HEAD
  // Call the async function to start the server
=======
<<<<<<< HEAD
=======
  // Call the async function to start the server
>>>>>>> Ger01
>>>>>>> dedrie
  startApolloServer(typeDefs, resolvers);
