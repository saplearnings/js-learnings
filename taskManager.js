const fs = require("fs");
const path = require("path");

// Task 1: Global Objects + Standard Module (fs) + Custom Module

// Using global object __dirname to build full file path
const filePath = path.join(__dirname, "data.json");
console.log("File directory:", __dirname);
console.log("Full file path:", filePath);

// Read file using fs standard module
const rawData = fs.readFileSync(filePath, "utf-8");
const tasks = JSON.parse(rawData);
console.log("Tasks read from file:", tasks);

// Custom Module: function to get tasks
function getTasks() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Task 2: Promise-based data retrieval
function getTasksAsPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

module.exports = { getTasks, getTasksAsPromise };
