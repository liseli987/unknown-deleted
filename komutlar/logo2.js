const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:dcunicorn:794761549801455676> 𐌞anity Logo Komutları")
 .setTimestamp()
.setDescription("**<a:brave:794763668831207454> +kalp** = Kalp logo oluşturur.\n ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+logo2'
}