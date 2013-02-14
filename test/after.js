var after  = require('..');


describe('after', function () {
  var i = 0;
  function increment () { i++; }

  it('should call immediately on zero', function () {
    after(0, increment);
    i.should.equal(1);
  });

  it('should call immediately on less than zero', function () {
    after(-1, increment);
    i.should.equal(2);
  });

  it('should call after n times on more than zero', function () {
    var aftered = after(2, increment);
    i.should.equal(2);
    aftered();
    i.should.equal(2);
    aftered();
    i.should.equal(3);
  });

});