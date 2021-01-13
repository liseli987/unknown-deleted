const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:dcunicorn:794761549801455676> 𐌞anity Logo Komutları")
 .setTimestamp()
.setDescription("**<a:brave:794763668831207454> +grafiti** = Grafiti logo oluşturur. \n **<a:brave:794763668831207454> +discord** = Discord logo oluşturur. \n **<a:brave:794763668831207454> +gold** = Gold logo oluşturur. \n **<a:brave:794763668831207454> +camic** = Comic logo oluşturur. \n **<a:brave:794763668831207454> +bubble2** = Bubble ama renkli logo oluşturur. \n **<a:brave:794763668831207454> +bubble** = Bubble logo oluşturur. \n **<a:brave:794763668831207454> +dinamik** = Dinamik logo oluşturur. \n **<a:brave:794763668831207454> +altın** = Altın logo oluşturur. \n **<a:brave:794763668831207454> +banner** = Banner logo oluşturur. \n **<a:brave:794763668831207454> +basit** = Basit logo oluşturur. \n **<a:brave:794763668831207454> +elmas** = Elmas logo oluşturur. \n **<a:brave:794763668831207454> +neonmavi** = Neon mavi logo oluşturur. \n **<a:brave:794763668831207454> +kalın** = Kalın logo oluşturur. \n **<a:brave:794763668831207454> +anime** = Anime yazı tipinde logo oluşturur. \n **<a:brave:794763668831207454> +habbo** = Habbo yazı tipinde logo oluşturur. \n **<a:brave:794763668831207454> +arrow** = Ok işaretli logo oluşturur. \n **<a:brave:794763668831207454> +green** = Yeşil logo oluşturur. \n **<a:brave:794763668831207454> +alev** = Alevli logo oluşturur. \n **<a:brave:794763668831207454> +red** = Kırmızı logo oluşturur.")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+logo'
}