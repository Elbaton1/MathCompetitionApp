/**
 * Generates a random multiplication, division, subtraction, or addition question
 *
 * @returns {Object} An object with the generated question and its correct answer
 */
function getQuestion() {
  // Updated function name
  const operations = ["+", "-", "*", "/"];
  const num1 = getRandomInt(1, 10); // First random number
  const num2 = getRandomInt(1, 10); // Second random number
  const operation = operations[getRandomInt(0, operations.length - 1)]; // Randomly pick an operation
  let question = "";
  let answer = 0;

  if (operation === "+") {
    question = `${num1} + ${num2} = ?`;
    answer = num1 + num2;
  } else if (operation === "-") {
    question = `${num1} - ${num2} = ?`;
    answer = num1 - num2;
  } else if (operation === "*") {
    question = `${num1} * ${num2} = ?`;
    answer = num1 * num2;
  } else if (operation === "/") {
    const product = num1 * num2; // Ensure division results in an integer
    question = `${product} / ${num2} = ?`;
    answer = num1;
  }

  return { question, answer };
}

// Helper function to generate a random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Checks if the provided answer is correct for the given question
 *
 * @param {string} question The question being answered
 * @param {number} answer The user's provided answer
 * @returns {boolean} True if the user's answer is correct, false otherwise
 */
function isCorrectAnswer(question, answer) {
  const parts = question.split(" ");
  const num1 = parseInt(parts[0], 10);
  const operation = parts[1];
  const num2 = parseInt(parts[2], 10);
  let correctAnswer = 0;

  if (operation === "+") {
    correctAnswer = num1 + num2;
  } else if (operation === "-") {
    correctAnswer = num1 - num2;
  } else if (operation === "*") {
    correctAnswer = num1 * num2;
  } else if (operation === "/") {
    correctAnswer = num1; // The correct answer is num1 because we ensured division always results in an integer
  }

  return answer === correctAnswer;
}

module.exports = {
  getQuestion, // Exported as getQuestion
  isCorrectAnswer,
};
