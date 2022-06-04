import './App.css';
import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Dashboard'
import Homepage from './Pages/Homepage'
import Header from './components/Header'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route
              path="/login"
              element={<Dashboard />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            {/* <Route
              path="*"
              element={<NoMatch />}
            /> */}
          </Routes>
        </div>

      </Router>
    </ApolloProvider>)
}

export default App;
