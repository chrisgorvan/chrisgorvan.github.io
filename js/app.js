jQuery(function($, undefined) {
  var username = 'www';
  $(function(){
        $("header > h1").typed({
            strings: ["Gorvan.com"],
            typeSpeed: 40
        });
    });
  $('#terminal').terminal(function(command, term) {
    switch (command.toLowerCase()) {
      case 'bash':
        term.echo("");
        break;
      case 'email':
        term.echo("you can email me at <<hi at gorvan dot com>>");
        break;
      case 'hi':
      case 'hello':
        term.echo("hello!");
        break;
      case 'help':
        term.echo("type something, maybe it will work");
        break;
      case 'ls':
        term.echo("css index.html js robots.txt");
        break;
      case 'login':
        term.push(function(command, term) {
            username = command;
            term.echo('user ' + username + ' has been logged in');
            term.pop();
        }, {
            prompt: 'login: ',
            name: 'login'});
        break;
      case 'logout':
        term.echo('user ' + username + ' has been logged out');
        username = 'www';
        break;
      case 'pwd':
        term.echo(window.location.href);
        break;
      case 'rm / -rf':
        term.clear();
        break;
      case 'something':
        term.echo('not literally');
        break;
      case 'sudo':
      case 'sudo su':
      case 'sudo su -':
        term.echo('user ' + username + ' is not in the sudoers file');
        break;
      case 'uname':
        term.echo('gorvan.com');
        break;
      case 'whoami':
        term.echo(username);
        break;
      default:
        term.echo("command not found: " + command);
    }
  }, {
      greetings: '',
      name: 'gorvan.com',
      prompt: '$ '});
});
