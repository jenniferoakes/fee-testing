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

      it('should add the numbers provided and give the total', function() {
        let result = window.calc.sum([1, 2, 3]);
        expect( result ).to.be.a('number').and.to.equal(6);
      });

      it('should handle no arguements', function() {
        let result = window.calc.sum();
        expect( result ).to.be.a('number');
      });

    });

    describe('factorial function', function() {

    });



  });




})();
