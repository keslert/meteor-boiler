Meteor.publish('histories', function() { 
	return Histories.find();
});