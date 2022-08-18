// tests/utils/sum.test.js
const sum = require("../../src/utils/sum");

describe("sum", () => {
  it("可以做加法", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

describe("sum", () => {
  it("加法失败", () => {
    expect(sum(2, 2)).toEqual(3);
  });
});
