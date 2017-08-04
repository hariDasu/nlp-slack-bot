var xmlrpc = require('xmlrpc')
var R = require('ramda');

var client = xmlrpc.createClient({
  host: 'nltk-server',
  port: 9000,
  path: '/'
});

var byUserId = R.compose(R.filter,R.propEq);
module.exports = function(skill, info, bot, message) {
  var messageText = message.text
  var userName = "yo"
  bot.api.users.list({},function(err,users){
    userName = (byUserId('id',message.user)(users.members))[0].name
    client.methodCall('posTagAndChunk',[messageText,userName],function(error,value){
      if (error){
        console.log('error:', error);
        console.log('req headers:', error.req && error.req._header);
        console.log('res code:', error.res && error.res.statusCode);
        console.log('res body:', error.body);
      }else {
        bot.reply(message,String(value));
      }
    });
  });
};
