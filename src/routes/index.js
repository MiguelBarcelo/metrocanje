const authRoutes = require('./auth.routes');
const classroomsRoutes = require('./classrooms.routes');
const professorsRoutes = require('./professors.routes');
const studentsRoutes = require('./students.routes');
const transactionsRoutes = require('./transactions.routes');
const usersRoutes = require('./users.routes');

module.exports = {
  auth: authRoutes,
  classrooms: classroomsRoutes,
  professors: professorsRoutes,
  students: studentsRoutes,
  transactions: transactionsRoutes,
  users: usersRoutes
}