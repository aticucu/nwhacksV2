Template.createquestion.events({
    "submit .newquestion": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var qs = event.target.qs.value;
      var a1 = event.target.a1.value;
      var a2 = event.target.a2.value;
      var a3 = event.target.a3.value;
      var a4 = event.target.a4.value;
      var nsfw = event.target.nsfw.checked;

      // Insert a task into the collection

      var count = Questions.find().count();
      Questions.insert({
        question_id:count+1,
        question: qs,
        possibleAnswers: [a1,a2,a3,a4],
        nsfw: nsfw,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.qs.value = "";
      event.target.a1.value = "";
      event.target.a2.value = "";
      event.target.a3.value = "";
      event.target.a4.value = "";
    }
  });
