import React from "react";
// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "../src/pages/Signup";

// const httpLink = createHttpLink({
//   uri: 'http://localhost:3001/graphql',
// });


// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div  className="container">
        <img src="">
        </img>
        <Home />
        {/* <Signup />
        <Login /> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
