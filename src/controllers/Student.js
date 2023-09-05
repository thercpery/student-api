const logger = require('../common/logger');
const StudentModel = require('../models/Student');

class Student {
  async addStudent(student) {
    logger.info(`Student.addStudent is running with parameters ${JSON.stringify(student)}`);
    try {
      const { studentNo, name, year } = student;
      const newStudent = new StudentModel({ studentNo, name, year });
      await newStudent.save();
      return newStudent;
    } catch (error) {
      logger.error(`Student.addStudent error: ${error}`);
      throw error;
    }
  }

  async getAllStudents() {
    logger.info(`Student.getStudentByStudentNo is running`);
    try {
      return StudentModel.find({});
    } catch (error) {
      logger.error(`Student.getStudentByStudentNo error: ${error}`);
      throw error;
    }
  }

  async getStudentByStudentNo(studentNo) {
    logger.info(`Student.getStudentByStudentNo is running with parameters ${studentNo}`);
    try {
      return (await StudentModel.find({ studentNo })).shift();
    } catch (error) {
      logger.error(`Student.getStudentByStudentNo error: ${error}`);
      throw error;
    }
  }

  async updateStudent(studentNo, studentData) {
    logger.info(`Student.updateStudent is running with parameters ${studentNo}, ${JSON.stringify(studentData)}`);
    try {
      await StudentModel.findOneAndUpdate({ studentNo }, studentData);
      return this.getStudentByStudentNo(studentNo);
    } catch (error) {
      logger.error(`Student.updateStudent error: ${error}`);
      throw error;
    }
  }

  async deleteStudent(studentNo) {
    logger.info(`Student.deleteStudent is running with parameters ${studentNo}`);
    try {
      await StudentModel.findOneAndDelete({ studentNo });
      return {
        message: `${studentNo} deleted`,
      };
    } catch (error) {
      logger.error(`Student.deleteStudent error: ${error}`);
      throw error;
    }
  }
}

module.exports = Student;
