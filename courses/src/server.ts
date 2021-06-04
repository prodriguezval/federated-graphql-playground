import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import cors from "cors";
import helmet from "helmet";
import {schema} from "schema";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({ origin: ['*']} as cors.CorsOptions));
app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
const server = new ApolloServer({
    schema,
});
server.applyMiddleware({ app, path: "/graphql" });
const httpServer = createServer(app);
httpServer.listen({ port: PORT }, (): void =>
    console.log(`🚀GraphQL-Server is running on http://localhost:3001/graphql`)
);
