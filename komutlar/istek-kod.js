const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Şikayet Bildirmek için Bir İstek Yazınız.** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("𐌞anity İstek Sistemi <a:dcunicorn:794761549801455676> ")
.setColor('BLUE')
.setDescription(`**Şikayet Kanalı** ${message.channel.name} \n **Şikayet Bildirilen Sunucu** \`${message.guild.name}\` \n **Şikayet Bildiren Kullanıcı** <@${message.author.id}> \n **Şikayeti :** \`${istek}\``)
client.channels.cache.get('794891253195735080').send(embed)
  
message.channel.send("Şikayet bildiriminiz gönderildi. <a:tik:788165978357235762> ").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'şikayet',
  description: 'Şİikayet belirtmeye yarar',
  usage: 'şikayet <istek>'
}