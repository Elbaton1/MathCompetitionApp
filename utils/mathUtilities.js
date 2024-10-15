function getQuestion() {
  const operations = ["+", "-", "*", "/"];
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operation = operations[getRandomInt(0, operations.length - 1)];
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
    const product = num1 * num2;
    question = `${product} / ${num2} = ?`;
    answer = num1;
  }

  return { question, answer };
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    correctAnswer = num1;
  }

  return answer === correctAnswer;
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
};
