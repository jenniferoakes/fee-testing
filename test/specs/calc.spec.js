(function() {
  'use strict';

  let expect = chai.expect;

  describe('calc module', function() {
    describe('sum function', function() {

      it('should expect that 1 equals 1', function () {
        expect(1).to.equal(1);
      });

      it('should be a function', function() {
        let result = window.calc.sum;
        expect( result ).to.be.a('function');
      });

      it('should run with no arguments and equal 0', function() {
        let numbersArg = window.calc.sum();
        expect(numbersArg).to.equal(0);
      });

      it('should add the numbers provided in an array and give the total', function() {
        let result = window.calc.sum([1, 2, 3]);
        expect( result ).to.be.a('number').and.to.equal(6);
      });

      it('should equal 0 if no numbers are specified in an empty array', function() {
        let result = window.calc.sum([]);
        expect( result ).to.be.a('number').and.to.equal(0);
      });

      it('should return NaN if a string is entered', function() {
        let string = window.calc.sum('string');
        expect( string ).to.be.NaN;
      });

      it('should return NaN if an object is entered', function() {
        let object = window.calc.sum({});
        expect( object ).to.be.NaN;
      });

      it('should return undefined if an array includes a string', function() {
        let result = window.calc.sum([1, 'foo', 3]);
        expect( result ).to.be.NaN;
      });

      it('should return undefined if an array includes a string number', function() {
        let result = window.calc.sum([1, '2', 3]);
        expect( result ).to.equal(6);
      });

    });

    describe('factorial function', function() {

      it('should 5 to factorial to 120', function () {
        let resultFactorial = window.calc.factorial(5);
        expect( resultFactorial ).to.equal(120);
      });


    });
  });




})();
