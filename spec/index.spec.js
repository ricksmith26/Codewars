let path = require("path");
let expect = require("chai").expect;
let { omnitool, flat } = require("../index.js");

describe("omnitool", () => {
  it("it should return an array without any under the value of 2", () => {
    let inputarray = [11, 1, 5, 45, 99, 1, 6, 88];
    const call = val => {
      return val > 2;
    };
    let expected = [11, 5, 45, 99, 6, 88];

    let actual = omnitool(inputarray, call);
    expect(actual).to.eql(expected);
  });
});

describe('flat', () =>{
  it('should return an array flattened to the required depth', () => {
    let input= [30, 45, [46], [78, 65,[74]], 88];
    let input2= 2;
    let actual= flat(input, input2);
    let expected= [30, 45, 46, 78, 65,[74], 88];
    expect(actual).to.eql(expected);
  });
  it('should return an array flattened to the required depth', () => {
    let input= [30, 45, 46, [78, 65,[74]], 88];
    let input2= 1;
    let actual= flat(input, input2);
    let expected= [30, 45, 46, 78, 65,[74], 88];
    expect(actual).to.eql(expected);
  });
  it('should work for a negative number', () => {
    let input= [30, 45, 46, [78, 65,[74]], 88];
    let input2= -1;
    let actual= flat(input, input2);
    let expected= [30, 45, 46, [78, 65,[74]], 88];
    expect(actual).to.eql(expected);
  });
});