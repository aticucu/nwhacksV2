Template.dashboard.events({
	'click #create-quiz': function(event) {
		Router.go('/createquiz');
	}
});

Template.dashboard.helpers({
	userName: function() {
		return Meteor.user().services.facebook.name;
	},

	quizzes: function() {
		console.log(Meteor.userId());
		return Quizzes.find({ userId: Meteor.userId()}).fetch();
	}
});
