Router.route('/', function () {
  this.render('login');
});

Router.route('/createquestion', function () {
  this.render('createquestion');
});

Router.route('/createquiz', function(){
    this.render('createquiz');
})
