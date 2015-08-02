Router.configure({
  controller: 'AppController',
});

AccountsTemplates.configureRoute('ensureSignedIn', {
  layoutTemplate: 'simple'
})