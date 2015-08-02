

Router.route('/', {name: 'home'});

Router.route('/dashboard', {
  name: 'historiesDashboard',
  controller: 'historiesDashboard'
});


Router.plugin('ensureSignedIn', {
  only: ['historiesDashboard']
})