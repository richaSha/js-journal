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
