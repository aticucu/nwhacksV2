var count = 0 ;
var rand_id = 0;
var used_questions = [-1];
Template.createquiz.helpers({
    questionList: function(){
        console.log(used_questions);
        console.log(new Date().getTime());
        count = Questions.find().count() - 1;
        console.log("Count :"+count);
        rand_id = Math.floor(Math.random() * (count - 0 + 1)) + 0;
        while(!$.inArray(rand_id, used_questions)) {
            rand_id = Math.floor(Math.random() * (count - 0 + 1)) + 0;
        }
        console.log("Random :"+rand_id);
        questions = Questions.find().fetch();
        used_questions.push(rand_id);
        console.log(used_questions);
        questions = questions[rand_id];

        Session.set('questions_sess', questions);
        return questions.question;
    },

    questionAnswer: function() {
        return Questions.find().fetch()[rand_id].possibleAnswers;
    }

});

Template.createquiz.events({
	'click #create-quiz': function(event) {
		Router.go('/createquiz');
	}
});
