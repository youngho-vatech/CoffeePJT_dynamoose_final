import React, {useEffect, useState} from 'react';
import App from './App';
import {ApolloClient, ApolloLink} from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';
import {ThemeProvider} from 'react-jss';
import Theme from 'resources/theme';
import {CookiesProvider, useCookies} from 'react-cookie';
import {setContext} from '@apollo/client/link/context';
import './index.css';


const httpLink = createHttpLink({
    uri: 'http://localhost:4000/dev/graphql'
});

const authMiddleware = (AuthToken) =>
    new ApolloLink((operation, forward) => {
        // add the authorization to the headers
        if (AuthToken) {
            operation.setContext({
                headers: {
                    Authorization: `${AuthToken}`,
                },
            });
        }

        return forward(operation);
    });


const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('myData');

    return {
        headers: {
            ...headers,
            Authorization: token ? `${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    fetchPolicy: "no-cache",
    cache: new InMemoryCache()
});

export default (
    <ThemeProvider theme={Theme}>
        <ApolloProvider client={client}>
            <CookiesProvider>
                <App/>
            </CookiesProvider>
        </ApolloProvider>
    </ThemeProvider>
);