Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
     
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});

Accounts.loginServiceConfiguration.remove({
            service: "facebook"
});
Accounts.loginServiceConfiguration.insert({
    service: 'facebook',
    appId: '1697646487183422',
    secret: '25256eec1d7ec174e725337092051cfe'
});