import { Student } from 'student/Student';

const allStudents = [
    {firstName: "Kiba", lastName: "Zafira", id: 1, courses: [1, 2, 3]},
    {firstName: "Nova", lastName: "Tomasa", id: 2, courses: [1, 3]},
];

export const getAllStudents = (): Student[] => {
    return allStudents;
}

export const getStudentById = (id: number): Student => {
    const student = allStudents.find((student) => student.id === id);
    if(student === undefined) {
        throw new Error(`Student with id ${id} doesn't exists.`);
    }
    return student;
}
