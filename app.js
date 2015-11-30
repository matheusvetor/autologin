var casper = require('casper').create();

casper.start('http://globo.com', function() {
  this.echo(this.getTitle());
  this.fill('form[id="formaut"]', { username: '00713105', password: 'ac83fba4' }, true)
});

casper.run();
