Histories = new Mongo.Collection('histories');
Histories.allow({});

// Tweets.attachSchema(new SimpleSchema({
//   owner: { type: String },
//   message: {
//     type: String,
//     label: "Message",
//     max: 140
//   },
//   categoryId: { type: String, label: "Category" },
//   pictureId: {
//     type: String,
//     label: "Picture",
//     optional: true
//   },
//   random: { type: Number },
//   created: { type: Date },
//   used: { type: Number }
// }));

Meteor.methods({
	
});

Histories.helpers({
  // category: function() {
  //   return Categories.findOne(this.categoryId);
  // }
})

NonEmptyString = Match.Where(function (x) {
  check(x, String);
  if(x.length == 0) {
  	throw new Match.Error("Text cannot be empty");
  }
  return true;
});