Quiz = new Mongo.Collection('quiz');
qid = 0;


Router.route('/', function () {
  this.render('login');
});

Router.route('/createquestion', function () {
  this.render('createquestion');
});

Router.route('/quiz/:id', function() {
  var hash = this.params.id;

  this.layout('quiz');
  Session.set('qid', hash);
});