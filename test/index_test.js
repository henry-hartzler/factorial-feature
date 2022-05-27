var assert = require("assert");
var Calculate =  require('../index')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('will test if 5! is equal to 120', () => {
      //setup
      const expectedResult = 120;
      const input = 5;
      //exercise
      const result = Calculate.factorial(input);
      //verify
      assert.equal(result, expectedResult);
    });
    
    it('will test if 3! is equal to 6', () => {
      //setup
      const expectedResult = 6;
      const input = 3;
      //exerise
      const result = Calculate.factorial(input);
      //verify
      assert.equal(result, expectedResult);
    });
    it('will block an error message that covers the 0! edge case', () => {
      //setup
      const input = 0;
      const expectedResult = 1;
      //exercise
      const result = Calculate.factorial(input);
      //verify
      assert.equal(result, expectedResult);
    });
  });
});