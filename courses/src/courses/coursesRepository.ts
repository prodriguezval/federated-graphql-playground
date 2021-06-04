import { Course } from 'courses/Course';

const allCourses = [
    {id: 1, name: "Dog walk course", students: [1, 2]},
    {id: 2, name: "How to not getting bald", students: [1]},
    {id: 3, name: "make friends without killing them", students: [1, 2]},
];

export const getAllCourses = (): Course[] => {
    return allCourses;
}

export const getCourseById = (id: number): Course => {
    const course = allCourses.find((course) => course.id === id);
    if (course === undefined) {
        throw new Error(`Course with id ${id} doesn't exists.`);
    }

    return course;
}
