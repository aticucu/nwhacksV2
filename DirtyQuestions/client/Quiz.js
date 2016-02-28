Session.setDefault('qid', 0);
Quizzes = new Mongo.Collection('Quizzes');
Questions = new Mongo.Collection('Questions');

if (Meteor.isClient) {
  
  Template.quiz.helpers({
    qid: function() {
      return Session.get('qid');
    },

    answers: function(qtext, options) {
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