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

      var count = Questions.find().count();

      // Insert a task into the collection
      Questions.insert({
        question_id: count++,
        question: qs,
        possibleAnswers: [a1,a2,a3,a4],
        nsfw: nsfw,
        createdAt: new Date() // current time
      });
      count = Questions.find().count() + 1;
 
      // Clear form
      event.target.qs.value = "";
      event.target.a1.value = "";
      event.target.a2.value = "";
      event.target.a3.value = "";
      event.target.a4.value = "";
    }
  });

