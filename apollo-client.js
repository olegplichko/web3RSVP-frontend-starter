import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/olegplichko/wbw3section5",
    cache: new InMemoryCache(),
});

export default client;