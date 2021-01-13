const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("❤️» 𐌞anity Kayıt Komutları ❤️")
.setTitle("**+kayıtol** = Yazarak kayıt olursunuz. \n **+kayıtayarla** = Kayıt kanalını ayarlarsınız. ")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['kyb'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'kayıt-bilgi',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'+kayıt-bilgi'
}