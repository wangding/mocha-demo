var expect = require('chai').expect;
var webdriver = require('selenium-webdriver')
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('phantomjs')
    .build();

describe('hostedredmine 登录功能测试', function() {
  before(function() {
    driver.get('http://www.hostedredmine.com/login');
  });

  after(function() { 
    driver.quit();
  });

  it('用户名正确，密码错误，登录失败', function() {
    driver.findElement(By.id('username')).sendKeys('test_2016_1');
    driver.findElement(By.id('password')).sendKeys('123');
    driver.findElement(By.name('login')).click();
    driver.findElement(By.id('flash_error')).getText().then(function(text) {
      expect(text).to.be.requal('无效的用户名或密码');
    });
  });

  it('用户名错误，密码正确，登录失败', function() {
    driver.findElement(By.id('username')).sendKeys('test_2016_2');
    driver.findElement(By.id('password')).sendKeys('Passw0rd!');
    driver.findElement(By.name('login')).click();
    driver.findElement(By.id('flash_error')).getText().then(function(text) {
      expect(text).to.be.requal('无效的用户名或密码');
    });
  });

  it('用户名正确，密码正确，登录成功', function() {
    driver.findElement(By.id('username')).sendKeys('test_2016_1');
    driver.findElement(By.id('password')).sendKeys('Password!');
    driver.findElement(By.name('login')).click();
    driver.wait(until.titleIs('我的工作台 - Online Project Management :: Free Redmine Hosting'));
    driver.getTitle().then(function(title) {
      expect(title).to.be.equal('我的工作台 - Online Project Management :: Free Redmine Hosting');
    }); 
    driver.findElement(By.id('loggedas')).getText().then(function(txt) {
      expect(txt).to.be.equal('test_2016_1');
    });
  });
});
