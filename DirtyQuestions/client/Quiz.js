Session.setDefault('qid', 0);

  Template.quiz.helpers({
    qid: function () {
      return Session.get('qid');
    }
  });