import date from '../date.js';
import chai from 'chai';

let today = date.today;
let yesterday = date.yesterday;
let the_day_before_yesterday = date.the_day_before_yesterday;
let isToday = date.isToday;
let isYesterday = date.isYesterday;
let isThe_day_before_yesterday = date.isThe_day_before_yesterday;
let expect = chai.expect;

describe('today 函数的测试', function() {
  it('today is 2017-04-26', function() {
    expect(today()).to.be.equal('2017-04-26');
  });
});

describe('yesterday 函数的测试', function() {
  it('yesterday is 2017-04-25', function() {
    expect(yesterday()).to.be.equal('2017-04-25');
  });
});

describe('the_day_before_yesterday 函数的测试', function() {
  it('the_day_before_yesterday is 2017-04-24', function() {
    expect(the_day_before_yesterday()).to.be.equal('2017-04-24');
  });
});

describe('isToday 函数的测试', function() {
  it('2017-04-26 is today', function() {
    expect(isToday('2017-04-26')).to.be.ok;
  });

  it('2017-04-25 is not today', function() {
    expect(isToday('2017-04-25')).to.not.be.ok;
  });

  it('2017-04-27 is not today', function() {
    expect(isToday('2017-04-27')).to.not.be.ok;
  });
});

describe('isYesterday 函数的测试', function() {
  it('2017-04-25 is yesterday', function() {
    expect(isYesterday('2017-04-25')).to.be.ok;
  });

  it('2017-04-26 is not yesterday', function() {
    expect(isYesterday('2017-04-26')).to.not.be.ok;
  });

  it('2017-04-24 is not yesterday', function() {
    expect(isYesterday('2017-04-24')).to.not.be.ok;
  });
});

describe('isThe_day_before_yesterday 函数的测试', function() {
  it('2017-04-24 is the day before yesterday', function() {
    expect(isThe_day_before_yesterday('2017-04-24')).to.be.ok;
  });

  it('2017-04-25 is not the day before yesterday', function() {
    expect(isThe_day_before_yesterday('2017-04-25')).to.not.be.ok;
  });

  it('2017-04-23 is not the day before yesterday', function() {
    expect(isThe_day_before_yesterday('2017-04-23')).to.not.be.ok;
  });
});
