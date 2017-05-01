import calc from '../calc.js';
import chai from 'chai';

let add = calc.add;
let subtract = calc.subtract;
let multiply = calc.multiply;
let divide = calc.divide;
let expect = chai.expect;

describe.only('加法函数的测试', function() {
  before(function() {
    console.log('before');
  });

  after(function() {
    console.log('after');
  });

  beforeEach(function() {
    console.log('beforeEach');
  });

  afterEach(function() {
    console.log('afterEach');
  });

  it.skip('0 + 0 = 0', function() {
    expect(add(0, 0)).to.be.equal(0);
  });

  it('0 + 1 = 1', function() {
    expect(add(0, 1)).to.be.equal(1);
  });

  it('abc + 1 = NaN', function() {
    expect(isNaN(add('abc', 1))).to.be.ok;
  });

  it('"123" + 1 = NaN', function() {
    expect(isNaN(add('123', 1))).to.be.ok;
  });

  it('Number.MAX_VALUE + Number.MAX_VALUE = Infinity', function() {
    expect(add(Number.MAX_VALUE, Number.MAX_VALUE)).to.be.equal(Infinity);
  });
});

describe('减法函数的测试', function() {
  it.skip('0 - 0 = 0', function() {
    expect(subtract(0, 0)).to.be.equal(0);
  });

  it('0 - 1 = -1', function() {
    expect(subtract(0, 1)).to.be.equal(-1);
  });

  it('abc - 1 = NaN', function() {
    expect(isNaN(subtract('abc', 1))).to.be.ok;
  });

  it('"123" - 1 = NaN', function() {
    expect(isNaN(subtract('123', 1))).to.be.ok;
  });

  it('Number.MAX_VALUE - Number.MAX_VALUE = 0', function() {
    expect(subtract(Number.MAX_VALUE, Number.MAX_VALUE)).to.be.equal(0);
  });
});

describe.only('乘法函数的测试', function() {
  it.skip('0 × 0 = 0', function() {
    expect(multiply(0, 0)).to.be.equal(0);
  });

  it('0 × 1 = 0', function() {
    expect(multiply(0, 1)).to.be.equal(0);
  });

  it('abc × 1 = NaN', function() {
    expect(isNaN(multiply('abc', 1))).to.be.ok;
  });

  it('"123" × 1 = NaN', function() {
    expect(isNaN(multiply('123', 1))).to.be.ok;
  });

  it('Number.MAX_VALUE × Number.MAX_VALUE = Infinity', function() {
    expect(add(Number.MAX_VALUE, Number.MAX_VALUE)).to.be.equal(Infinity);
  });
});

describe.only('除法函数的测试', function() {
  it.skip('0 / 0 = NaN', function() {
    expect(isNaN(divide(0, 0))).to.be.ok;
  });

  it('0 / 1 = 0', function() {
    expect(divide(0, 1)).to.be.equal(0);
  });

  it('abc / 1 = NaN', function() {
    expect(isNaN(divide('abc', 1))).to.be.ok;
  });

  it('"123" / 1 = NaN', function() {
    expect(isNaN(divide('123', 1))).to.be.ok;
  });

  it('Number.MAX_VALUE / Number.MAX_VALUE = 1', function() {
    expect(divide(Number.MAX_VALUE, Number.MAX_VALUE)).to.be.equal(1);
  });
});

