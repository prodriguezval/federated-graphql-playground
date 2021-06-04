import {ApolloError} from "apollo-server-express";
import {getAllCourses, getCourseById} from "courses/coursesRepository";
import {Course} from "courses/Course";

const ServiceResolvers = {
    Query: {
        getAllCourses: async (root: any, args: any) => {
            try {
                return getAllCourses();
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
    Course: {
        students(course: Course) {
            return course.students.map((id) => ({__typename: "Student", id}))
        },
        __resolveReference(ref: any) {
            return getCourseById(ref.id);
        }
    }
};

export default ServiceResolvers;
