const express = require("express");
const app = express();
const port = 3000;

const { getQuestion } = require("./utils/mathUtilities");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let leaderboards = [];
let streak = 0;
let currentQuestion = {};

// Home Page
app.get("/", (req, res) => {
  console.log("Streak at home page: ", streak); // Log streak value for debugging
  res.render("index", { streak, leaderboards });
});

// Leaderboards Page
app.get("/leaderboards", (req, res) => {
  const topLeaderboards = leaderboards
    .sort((a, b) => b.streak - a.streak)
    .slice(0, 10);
  res.render("leaderboards", { leaderboards: topLeaderboards });
});

// Quiz Page
app.get("/quiz", (req, res) => {
  currentQuestion = getQuestion();
  res.render("quiz", {
    question: currentQuestion.question,
    correctAnswer: currentQuestion.answer,
    streak,
  });
});

// Handle Quiz Submission
app.post("/quiz", (req, res) => {
  const userAnswer = parseInt(req.body.answer, 10);
  const correctAnswer = parseInt(req.body.correctAnswer, 10);

  if (userAnswer === correctAnswer) {
    streak += 1; // Increase streak on correct answer
    console.log("Correct answer, current streak: ", streak); // Log for debugging
    res.redirect("/quiz"); // Redirect back to quiz for a new question
  } else {
    if (streak > 0) {
      leaderboards.push({ streak, date: new Date().toLocaleString() });
    }
    const finalStreak = streak;
    streak = 0; // Reset streak
    console.log("Incorrect answer, final streak recorded: ", finalStreak); // Log for debugging
    res.render("completion", { finalStreak });
  }
});

// Quiz Completion Page
app.get("/completion", (req, res) => {
  res.render("completion", { finalStreak: streak });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
