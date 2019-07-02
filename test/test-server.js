var chai = require('chai');
var chaiHttp = require('chai-http');
var fill_start_page = require('../api/fill_start_page');
var fill_ev_descr = require('../api/fill_event_description');
var fill_events = require('../api/fill_events_page');
var fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);
chai.use(require('chai-dom'))

describe('SERVER', function() {
    it('should list of events on /api/start_page/location/<location> GET', function(done) {
        chai.request(fill_start_page)
          .get('/api/start_page/location/spb')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array').with.lengthOf(15);
            res.body[0].should.have.property('id');
            res.body[0].should.have.property('title');
            res.body[0].should.have.property('images');
            done();
          });
      });
    it('should a SINGLE event on /api/get/event/<id> GET', function(done) {
        chai.request(fill_ev_descr)
          .get('/api/get/event/175775')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('description');
            res.body.should.have.property('body_text');
            res.body.should.have.property('publication_date');
            res.body.should.have.property('age_restriction');
            res.body.should.have.property('images');
            res.body.should.have.property('dates');
            res.body.should.have.property('place');
            done();
          });
      });
    it('should list of events on /api/fill-event/location<location>/category/<category> GET', function(done) {
        chai.request(fill_events)
          .get('/api/fill-event/location/spb/category/exhibition')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array').with.lengthOf(105);;
            res.body[0].should.have.property('id');
            res.body[0].should.have.property('title');
            res.body[0].should.have.property('images');
            res.body[0].should.have.property('dates');
            res.body[0].should.have.property('place');
            done();
          });
      });
    });      
      
describe('START PAGE', function() {
      it('should cahge location after event click',function(done){
        JSDOM.fromFile('start_page.html',{resources:"usable",runScripts:"dangerously"}).then((dom) => {
        document=dom.window.document;
        expect(document.getElementsByClassName("switcher")[0].innerHTML).to.equal('spb');
        document.getElementById("loc-msk").addEventListener("click",function(){
          var location ='msk';
          document.getElementsByClassName("switcher")[0].innerHTML=location;
        });
        document.getElementById("loc-spb").addEventListener("click",function(){
          location ='spb';
          document.getElementsByClassName("switcher")[0].innerHTML=location;
        });
        document.getElementById("loc-spb").click();
        expect(document.getElementsByClassName("switcher")[0].innerHTML).to.equal('spb');
        done();
        });
      });

});      
  describe('EVENTS PAGE', function() {
      it('should increase num_page on click "next_page" ',function(done){
        JSDOM.fromFile('events_page.html',{resources:"usable",runScripts:"dangerously"}).then((dom) => {
        document=dom.window.document;
        var num_page=0;
        document.getElementById("next_page").addEventListener("click",function(){
          num_page++;
        });
        document.getElementById("next_page").click();
        expect(num_page).to.equal(1);
        done();
        });
      });
  });
 