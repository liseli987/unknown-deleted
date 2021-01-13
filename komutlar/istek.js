const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Öneri kod Bildirmek için Bir İstek Yazınız.** <a:olumusztik2:794706964956315668> ')

const embed = new Discord.MessageEmbed()
.setTitle("𐌞anity İstek Sistemi <a:dcunicorn:794761549801455676> ")
.setColor('#ff0000')
.setDescription(`**istek Kanalı** ${message.channel.name} \n **Öneri Bildirilen Sunucu** \`${message.guild.name}\` \n **Öneri Bildiren Kullanıcı** <@${message.author.id}> \n **Önerisi :** \`${istek}\``)
client.channels.cache.get('794891253195735080').send(embed)
  
message.channel.send("Öneri bildiriminiz gönderildi. <a:tik:788165978357235762> ").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'öneri',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'öneri <istek>'
}