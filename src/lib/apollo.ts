import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o55x5c0knx01xr4473fax3/master',
    cache: new InMemoryCache()
})