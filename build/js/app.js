(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title,body){
  this.title = title;
  this.body = body;
}
Journal.prototype.vowel = function(){
  var vowelCount = 0;
  if (this.title.match(/[aiueo]/g)){
      vowelCount = vowelCount + this.title.match(/[aiueo]/g).length;
  }
  if (this.body.match(/[aiueo]/g)){
      vowelCount = vowelCount+ this.body.match(/[aiueo]/g).length;
  }
  return vowelCount;
};

Journal.prototype.consonant = function(){
  var consonantCount = 0;
  if (this.title.match(/[^aiueo]/g)){
      consonantCount = consonantCount + this.title.match(/[^aiueo]/g).length;
  }
  if (this.body.match(/[^aiueo]/g)){
      consonantCount = consonantCount+ this.body.match(/[^aiueo]/g).length;
  }
  return consonantCount;
};

Journal.prototype.getTeaser = function(){
  var firstSentance = this.body.split(".");
  var countWord = firstSentance[0].split(" ");
  if (countWord.length <= 8){
      countWord = countWord.splice(0, 8);
      firstSentance = countWord.join(" ");
  }
  return firstSentance;
};
Journal.prototype.wordCount = function(){
  var countWord = this.body.split(" ");
  return countWord.length;
};
exports.JournalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal =
require('./../js/journal.js').JournalModule;

$(document).ready(function() {
  $('#submit').click(function(e){
    e.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var journal = new Journal(title,body);
    var vowelCount = journal.vowel();
    var consonantCount = journal.consonant();
    var getTeaser = journal.getTeaser();
    var wordCount = journal.wordCount();
    $('.display').append("<li> vowelCount: "+vowelCount +"</li>");
    $('.display').append("<li> consonantCount: "+consonantCount +"</li>");
    $('.display').append("<li> getTeaser: "+ getTeaser+"</li>");
    $('.display').append("<li> wordCount: "+ wordCount+"</li>");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
