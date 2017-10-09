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
