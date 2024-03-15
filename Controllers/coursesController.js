import fs from 'fs';
import path from 'path';

const COURSES_FILE = path.join(__dirname, '../models/courses.json');

const readCourseFile = ()=>{
    return JSON.parse(fs.readFileSync(COURSES_FILE));
};

const writeCourseFile = (data)=>{
    fs.writeFileSync(COURSES_FILE, JSON.stringify(data, null, 2));
};

export const getCourses = (req, res) =>{
    const courses = readCourseFile();
    res.json(courses);
}

export const getCourseById = (req, res) => {
    const courses = readCourseFile();
    const course = courses.find(c => c.id === req.params.courseId);
};