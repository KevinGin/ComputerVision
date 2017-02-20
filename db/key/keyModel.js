const db = require('./../index.js').db;
const Sequelize = require('sequelize');

//MVP: 1 key. No associations with courses and teacher
//MVP+: Multiple teachers. Need foreign key with teacher_id
//MVP++: Foreign key for course 
//MVP+++: Add names english names to the keys and english names to the templates (instead of just using key ID to display on front-end)
const Keys = db.define('Keys', {
  answers: Sequelize.TEXT,
  URL: Sequelize.TEXT
}, {timestamps: false});

Keys.sync();

exports.Keys = Keys;