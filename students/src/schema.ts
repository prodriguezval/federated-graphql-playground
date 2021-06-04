
import ServiceResolvers from 'student/studentResolver';
import {ServiceTypeDefs} from 'student/studentSchema';
import {buildFederatedSchema} from "@apollo/federation";



export const schema = buildFederatedSchema({
    typeDefs: ServiceTypeDefs,
    resolvers: ServiceResolvers,
});
