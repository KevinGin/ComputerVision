const db = require('./../index.js').db;
const Sequelize = require('sequelize');
const Students = require('./../student/studentModel').Students;
const Classes = require('./../classes/classModel').Classes;
const answerKeys = require('./../key/keyModel').answerKeys;

//MVP: 1 teacher
//MVP+: Multiple teachers. Need foreign key with teacher_id
//MVP++: Foreign key for course (group)
//MVP+++: Foreign key for sub-course (sub-group)
const Tests = db.define('Tests', {
  studentAnswers: Sequelize.TEXT,
  URL: Sequelize.TEXT,
  result: Sequelize.DECIMAL(10,2)
},{timestamps: false});

//foreign key answerKey
Tests.belongsTo(answerKeys);
answerKeys.hasMany(Tests); //TODO: check to see if foreign key auto added

//foreign key Student who took the test
Tests.belongsTo(Students);
Students.hasMany(Tests);

//foreign key class
Tests.belongsTo(Classes);
Classes.hasMany(Tests);

Tests.sync();

exports.Tests = Tests;