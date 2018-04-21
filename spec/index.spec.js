let path = require("path");
let expect = require("chai").expect;
let { sentenceToCamelCase } = require("../index.js");

describe("omnitool", () => {
  it("it should return an array without any under the value of 2", () => {
    let inputarray = [11, 1, 5, 45, 99, 1, 6, 88];
    const call = function(val) {
      return val > 2;
    };
    let expected = [11, 5, 45, 99, 6, 88];

    expect(inputarray).to.eql(expected);
  });
});
