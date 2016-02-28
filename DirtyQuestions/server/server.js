Quizzes = new Mongo.Collection('Quizzes');
Questions = new Mongo.Collection('Questions');

Accounts.onCreateUser(function(options, user) {
    options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    user.profile = options.profile;
	return user;
});
