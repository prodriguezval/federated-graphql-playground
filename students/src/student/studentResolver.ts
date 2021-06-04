import {ApolloError} from "apollo-server-express";
import {getAllStudents, getStudentById} from "student/studentRepository";
import {Student} from "student/Student";

const ServiceResolvers = {
    Query: {
        getAllStudents: async (root: any, args: any) => {
            try {
                return getAllStudents();
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
    Student: {
        courses(student: Student) {
            return student.courses.map((id) => ({__typename: "Course", id}))
        },
        __resolveReference(ref: any) {
            return getStudentById(ref.id);
        }
    }
};

export default ServiceResolvers;
