module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        message.channel.send('>>> =clear {# of Chat you want to delete}');
        message.channel.send('>>> =kick {@user you want to kick}')
        message.channel.send('>>> =ban {@user you want to ban}')
    }
}