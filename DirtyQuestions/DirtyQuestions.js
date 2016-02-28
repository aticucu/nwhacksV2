Quizzes = new Mongo.Collection("Quizzes");
Questions = new Mongo.Collection("Questions");


Router.route('/', function () {
  this.render('login');
});

Router.route('/createquestion', function () {
  this.render('createquestion');
});

Router.route('/createquiz', function(){
    this.render('createquiz');
});
