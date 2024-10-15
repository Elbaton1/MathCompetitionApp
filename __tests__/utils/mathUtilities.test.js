const { getQuestion, isCorrectAnswer } = require("../../utils/mathUtilities");

describe("Math Utilities Tests", () => {
  it("should generate a valid question and answer", () => {
    const questionObj = getQuestion();
    expect(questionObj).toHaveProperty("question");
    expect(questionObj).toHaveProperty("answer");
    expect(typeof questionObj.question).toBe("string");
    expect(typeof questionObj.answer).toBe("number");
  });
});

describe("isCorrectAnswer Tests", () => {
  it("should return true for a correct answer", () => {
    const question = "6 + 4 = ?";
    const answer = 10;
    expect(isCorrectAnswer(question, answer)).toBe(true);
  });

  it("should return false for an incorrect answer", () => {
    const question = "6 + 4 = ?";
    const answer = 8;
    expect(isCorrectAnswer(question, answer)).toBe(false);
  });
});
