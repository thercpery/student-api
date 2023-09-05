const express = require('express');
const Student = require('../controllers/Student');

const router = express.Router();
const student = new Student();

router.post('/', async (req, res) => {
  try {
    const result = await student.addStudent(req.body);
    res.send(result);
  } catch (error) {
    res.error(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await student.getAllStudents();
    res.send(result);
  } catch (error) {
    res.error(error);
  }
});
router.get('/:studentId', async (req, res) => {
  try {
    const result = await student.getStudentByStudentNo(req.params.studentId);
    res.send(result);
  } catch (error) {
    res.error(error);
  }
});

router.put('/:studentId', async (req, res) => {
  try {
    const result = await student.updateStudent(req.params.studentId, req.body);
    res.send(result);
  } catch (error) {
    res.error(error);
  }
});

router.delete('/:studentId', async (req, res) => {
  try {
    const result = await student.deleteStudent(req.params.studentId);
    res.send(result);
  } catch (error) {
    res.error(error);
  }
});

module.exports = router;
