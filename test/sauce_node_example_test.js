var client = require('webdriverio')
var assert = require('assert')
var should = require('should');

var branchName = process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH
var branchUrl = 'http://ci-workshop-test-1-' + branchName + '.herokuapp.com'

console.log('>>>>>>', branchName)
console.log('>>>>>>', process.env.TRAVIS_PULL_REQUEST_BRANCH)
console.log('>>>>>>', process.env.TRAVIS_BRANCH)

// browser.init()
    
describe('x', function() {
  describe('1', function() {
    it('Title', function() {
        browser.url(branchUrl)
        browser.getTitle().should.equal('')
        browser.getUrl().should.equal(branchUrl+'/')
    });
  });
});

// browser.end()