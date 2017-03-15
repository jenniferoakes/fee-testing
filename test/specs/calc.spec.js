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

      


    });

    describe('factorial function', function() {

    });



  });




})();
