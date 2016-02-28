var count = 0 ;
var rand_id = 0;
var used_questions = [];

// Wait for actions form Questions collections
Template.createquiz.onCreated(function () {
    this.subscribe("Questions");
});

Template.createquiz.helpers({
    questionList: function(){
        console.log(used_questions);
        count = Questions.find().count() - 1;
        if(count < 0) {
            count = 0;
        }

        console.log("Count :"+count);
        rand_id = Math.floor(Math.random() * (count - 0 + 1)) + 0;

        do {
            rand_id = Math.floor(Math.random() * (count - 0 + 1)) + 0;
        } while ($.inArray(rand_id, used_questions) > -1);

        used_questions.push(rand_id);
        console.log(used_questions);

        question = Questions.find().fetch()[rand_id];

        return question.question;
    },

    questionAnswer: function() {
        return Questions.find().fetch()[rand_id].possibleAnswers;
    },

    parentHelper: function(parentContext) {
        console.log(parentContext);
    },

    loopCount: function(count){
        var countArr = [];
        for (var i=0; i<count; i++){
            countArr.push({});
        }
        return countArr;
    }

});

Template.createquiz.events({
  'click :button': function(event, template) {
    var element = template.find('input:radio[name=answer]:checked');
    console.log($(element).val());
  }
});
