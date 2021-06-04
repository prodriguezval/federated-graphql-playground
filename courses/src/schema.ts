import ServiceResolvers from 'courses/courseResolver';
import {ServiceTypeDefs} from 'courses/courseSchema';
import {buildFederatedSchema} from "@apollo/federation";



export const schema = buildFederatedSchema({
    typeDefs: ServiceTypeDefs,
    resolvers: ServiceResolvers,
});
