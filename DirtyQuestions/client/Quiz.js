Session.setDefault('qid', 0);
Quiz = new Mongo.Collection('Quiz');
Questions = new Mongo.Collection('Questions');

if (Meteor.isClient) {
  
  Template.quiz.helpers({
    qid: function() {
      return Session.get('qid');
    },
  });

  Template.quiz.questions = function() {
  	var quiz_id = Session.get('qid');
  	var quizFromID = Quiz.findOne({quiz_id : quiz_id.toString()});

  	var questionsArr = quizFromID.questions;
  	var questionList = [];
  	for (i = 0; i < questionsArr.length; i++) {
  		var questionId = questionsArr[i].question_id.toString();
  		var questionString = Questions.findOne({question_id:questionId}).question;
  		questionList.push(questionString);
  	}

  	console.log(questionList);
  	return questionList;
  }
}