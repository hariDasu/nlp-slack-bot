var xmlrpc =require('xmlrpc');
var R = require('ramda');

var client = xmlrpc.createClient({
  host: 'localhost',
  port: 9000,
  path: '/'
});

var byUserId = R.compose(R.filter,R.propEq);

module.exports = Questions;

function Questions(skill,info,bot,message) {
   this.skill=skill;
   this.info=info;
   this.bot=bot;
   this.message=message;
  }

Questions.prototype.respondToQuestion= function(skill, info, bot, message) {
    const messageText = message.text;
    var userName = "";
    bot.api.users.list({},function(err, users) {
      userName = (byUserId('id',message.user)(users.members))[0].name
      client.methodCall(''+skill+'PosTagAndChunk',[messageText,userName],function(error, value) {
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
  }



