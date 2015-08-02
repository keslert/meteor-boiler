AppController = RouteController.extend({
  layoutTemplate: 'default',
  loadingTemplate: 'loading'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  },
  'click [data-modal-template]': function(e, t) {
    var name = e.target.dataset['modalTemplate'];
    Session.set('activeModal', name);
  }
});

AppController.helpers({
  
})