const express = require("express");
const dayjs = require("dayjs");
const { getTasks, getTasksAsPromise } = require("./taskManager");

// ─── Task 1: Custom Module ────────────────────────────────────────────────────
console.log("=== Task 1: Custom Module ===");
const tasks = getTasks();
console.log("Tasks from Custom Module:", tasks);

// ─── Task 2: Promise ──────────────────────────────────────────────────────────
console.log("\n=== Task 2: Promise ===");
getTasksAsPromise()
  .then((data) => {
    console.log("Tasks via Promise:", data);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// ─── Task 2: Async/Await ──────────────────────────────────────────────────────
async function main() {
  console.log("\n=== Task 2: Async/Await ===");
  const data = await getTasksAsPromise();
  console.log("Tasks via Async/Await:", data);
}
main();

// ─── Task 3: Express + dayjs ──────────────────────────────────────────────────
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const currentDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
  res.send(`Current Date: ${currentDate}`);
});

app.get("/tasks", (req, res) => {
  const taskList = getTasks();
  res.json(taskList);
});

app.listen(PORT, () => {
  console.log(`\n=== Task 3: Express Server ===`);
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Visit http://localhost:${PORT}/ for current date`);
  console.log(`Visit http://localhost:${PORT}/tasks for task list`);
});
