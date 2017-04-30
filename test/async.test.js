var request = require('superagent');
var expect = require('chai').expect;

describe('异步测试', function(done) {
  it('异步请求应该返回一个对象', function() {
    request
      .get('https://api.github.com')
      .end(function(err, res) {
        expect(res).to.be.an('object');
        done();
    });
  });
});
