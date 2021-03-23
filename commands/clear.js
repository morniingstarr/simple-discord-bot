module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {
        if(!args[0]) return message.reply(">>> Please enter the amount of messages to clear!");

        if(isNaN(args[0])) return message.reply(">>> Please type a real number!");

        if(args[0] > 100) return message.reply(">>> You can't remove more than 100 messages!");
        
        if(args[0] < 1) return message.reply(">>> You can't delete less that 0 messages");

        await message.channel.messages.fetch({ limit: args[100]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });

 }
}   