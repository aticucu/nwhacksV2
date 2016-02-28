var Questions = new Mongo.Collection("Questions");
Questions.insert({qid : "2", question : "Hello there", answer: "yes"});
Questions.insert({
    qid : "3",
    question : "Hello there",
    answer: "yes"
});


if(Meteor.isClient){
    Template.body.helpers({
        questionList: function(){
                return Questions.findOne({qid: "2"});
            }
    });

    console.log(Questions.findOne({qid : "2"}).question);
    //console.log(Questions.find());

}
