import { gql } from "apollo-server-express";

export const ServiceTypeDefs = gql`
  type Student @key(fields: "id") {
    id: Int!
    firstName: String
    lastName: String
    courses: [Course]
  }
  
  extend type Course @key(fields: "id") {
    id: Int! @external
  }
  
  extend type Query {
    getAllStudents: [Student]
  }
`;
