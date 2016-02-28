Quizzes = new Mongo.Collection("quizzes");
Questions = new Mongo.Collection("questions");


Router.route('/', function () {
  this.render('login');
});

Router.route('/createquestion', function () {
  this.render('createquestion');
});