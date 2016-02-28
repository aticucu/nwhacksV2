Template.dashboard.events({
    'click #create-quiz': function(event) {
        Router.go('/createquiz');
    }
});

Template.dashboard.helpers({
	userName: function() {
    	return Meteor.user().services.facebook.name;
    }
    // userPic: function() {
    // 	return Meteor.user().profile.picture;
    // }
});

console.log(Meteor.user());