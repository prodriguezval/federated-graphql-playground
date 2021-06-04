import {ApolloGateway} from "@apollo/gateway";
import {ServiceEndpointDefinition} from "@apollo/gateway/dist/config";
import { ApolloServer } from "apollo-server-express";
import express = require("express");
import {createServer} from "http";

const PORT = process.env.PORT || 3000;
const serviceList: ServiceEndpointDefinition[] = [
    {
        name: 'courses',
        url: 'http://localhost:3001/graphql'
    },
    {
        name: 'students',
        url: 'http://localhost:3002/graphql'
    }
];

const server = new ApolloGateway({
    serviceList
});

const apolloServer = new ApolloServer({
    gateway: server,
    subscriptions: false,
});

const app = express();
apolloServer.applyMiddleware({app})
const httpServer = createServer(app);

httpServer.listen({ port: PORT }, (): void =>
    console.log(`🚀GraphQL-Gateway is running on http://localhost:3000/graphql`)
);
