import { gql } from "apollo-server-express";

export const ServiceTypeDefs = gql`
  type Course @key(fields: "id") {
    id: Int!
    name: String
    students: [Student]
  }
  extend type Student @key(fields: "id") {
    id: Int! @external
  }
    
  extend type Query {
    getAllCourses: [Course]
  }
`;
