const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:dcunicorn:794761549801455676> 𐌞anity Eğlence Komutları ")
 .setTimestamp()
.setDescription("**<a:brave:794763668831207454> +yazan-kazanır** =  Yazan karanır oyununu oynadıktan sonra tekrar oynamaya ne dersin?. \n **<a:brave:794763668831207454> +kapaklaf** =  Birine güzel bi söz sözlemeye ne dersin?. \n **<a:brave:794763668831207454> +kralol** =  Kral olmaya ne dersin?. \n")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+eğlence'
}