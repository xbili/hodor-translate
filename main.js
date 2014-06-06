var App = {};

App.getText = function() {
  this.s = document.getElementById('toTranslate').value;
};

App.countWords = function() {
  this.count = 1;
  for (var i = 0; i < this.s.length; i++) {
    if (this.s[i] === ' ') {
      this.count++;
    }
  }
};

App.translate = function() {
  this.hodors = 'Hodor';
  for(var i = 0; i < this.count-1; i++) {
      this.hodors += ' hodor';
  }
}
 
App.displayTranslation = function() {
  document.getElementById('translated').innerHTML = '<p>' + this.hodors + '.</p>';
};

App.main = function() {
  App.getText();
  App.countWords();
  App.translate();
  App.displayTranslation();
};

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.addEventListener('keydown', function(e) {
    var key = e.which || e.keyCode;
    if(key == 13) {
      App.main();
    }
  });
});