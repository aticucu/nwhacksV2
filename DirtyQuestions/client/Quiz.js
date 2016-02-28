Session.setDefault('qid', 0);
Quizzes = new Mongo.Collection('Quizzes');
Questions = new Mongo.Collection('Questions');

if (Meteor.isClient) {
	Template.quiz.events({
	'change #ans' : function (e){
 
    var clickedButton = e.currentTarget;
    console.log("Value of Button :"+$(clickedButton).val());
    var user_answer = $(clickedButton).val();
	$('#next').show();

	var quiz_id = Session.get('qid');
	var question_qa = Quizzes.findOne({quiz_id : quiz_id.toString()}).questions;
	// Check If clicked answer is correct, then act accordingly
	for(i = 0; i< question_qa.length; i++){
		if(question_qa[i].aid == user_answer )
			console.log("Correct Answer :"+question_qa[i].aid+" = "+user_answer);
		else
			console.log("It's Wrong :"+question_qa[i].aid+" = "+user_answer);
	}
  
	}
});

  
  Template.quiz.helpers({
    qid: function() {
      return Session.get('qid');
    },

    answers: function(qtext, options) {
    	$('#next').hide();
  		var retArr = [];
  		var answers = Questions.findOne({question:qtext}).possibleAnswers;
  		for (i = 0; i < answers.length; i++) {
  			retArr.push({atext: answers[i]});
  		}
  		return retArr;
    }

  });

  Template.quiz.questions = function() {
  	var quiz_id = Session.get('qid');
  	var quizFromID = Quizzes.findOne({quiz_id : quiz_id.toString()});

  	var questionsArr = quizFromID.questions;
  	var questionList = [];
  	for (i = 0; i < questionsArr.length; i++) {
  		var questionId = questionsArr[i].question_id;
  		var questionString = Questions.findOne({question_id:questionId}).question;
  		questionList.push({qtext: questionString});
  	}

  	console.log(questionList);
  	return questionList;
  }

}