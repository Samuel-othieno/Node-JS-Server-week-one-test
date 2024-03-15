import express from 'express';
import * as coursesController from '../controllers/coursesController.cjs';

const router = express.Router();
router.post('/courses', coursesController.createCourse);
router.get('/courses', coursesController.getCourse);
router.get('/courses/:courseId', coursesController.getCourseByCourseId);
router.patch('/courses:courseId', coursesController.updateCourse);
router.delete('/courses', coursesController.deleteCourse);

export default router;
