Router.route('/', function () {
  this.render('login');
});

Router.route('/createquestion', function () {
  this.render('createquestion');
});

Router.route('/quiz/:id', function() {
  var hash = this.params.id;
  Session.set('qid', hash);
  this.render('quiz');
});