import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { createContext, useState } from "react";



const apolloClient = new ApolloClient({
    uri:'http://localhost:3000/api/graphql', 
    cache:new InMemoryCache()
});
export default apolloClient;
