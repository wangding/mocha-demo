var expect = require('chai').expect;

describe('异步测试', function() {
  it('测试应该在 4000ms 后结束', function(done) {
    var x = true;

    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      done();
    };

    setTimeout(f, 4000);
    console.log('测试正在进行......');
  });
});

