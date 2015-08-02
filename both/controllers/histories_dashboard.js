HistoriesDashboard = AppController.extend({
  waitOn: function() {
    return Meteor.subscribe('histories');
  },
  onAfterAction: function() {
    Meta.setTitle('Histories');
  }
})