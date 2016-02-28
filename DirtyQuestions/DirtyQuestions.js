Router.route('/', function () {
  this.path('login');
});

Router.route('/createquestion', function () {
  this.path('createquestion');
});

Router.route('/createquiz', function(){
    this.path('createquiz');
})
