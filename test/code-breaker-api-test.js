var supertest = require('supertest'),
    chai = require('chai');
    should = require('should');
    assert = require('assert');
    app = require('../app/app');

var request = supertest(app);
var expect = chai.expect;

describe('GET /setsecret:number',function(){
    it('Should return code 200', function (done) {
        request.get('/setsecret/1234')
        .expect(100)
        .end(function(err,res){
            if(err) return done(err)
            done(err)
        });
    });

    it('Should return json Content-Type application/json', function (done) {
        request.get('/setsecret/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done(err)
            done(err)
        });
    });


    it('Should return correct JSON', function (done) {
        request.get('/setsecret/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done(err)
            should.not.exist(err)
            should.exist(res)
            res.body.should.be.an.Object;
            should.exist(res.body.message);
            done(err)
        });
    });

    it('Should return correct message', function (done) {
        request.get('/setsecret/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done(err)
            should.not.exist(err)
            should.exist(res)
            res.body.should.be.an.Object;
            should.exist(res.body.message);
            assert.equal('ok, let the game begins',res.body.message);
            done(err)
        });
    });
});

describe('GET guess/:number',function(){
    it('Should return code 200', function(done){
        request.get('/guess/1234')
        .expect(200)
        .end(function(err,res){
            if(err) return done(err)
            done();
        });
    });

    it('Should return json Content-Type application/json', function (done) {
        request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done(err)
            done(err)
        });
    });

    it('Should return correct JSON', function (done) {
        request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done(err)
            should.not.exist(err)
            should.exist(res)
            res.body.should.be.an.Object;
            should.exist(res.body.result);
            done(err)
        });
    });

    it('Should return correct result', function (done) {
        request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done(err)
            should.not.exist(err)
            should.exist(res)
            res.body.should.be.an.Object;
            should.exist(res.body.result);
            assert.equal('XXXX',res.body.result);
            done(err)
        });
    });

});
