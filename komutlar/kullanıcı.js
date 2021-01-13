const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:dcunicorn:794761549801455676> 𐌞anity Kullanıcı Komutları ")
 .setTimestamp()
.setDescription("**<a:brave:794763668831207454> +medya** = Sosyal medyalarım. \n **<a:brave:794763668831207454> +toplamkomut** = Botta ne kadar komut oldunu gösterir. \n **<a:brave:794763668831207454> +say** = Sunucu bilgilerini gösterir. \n **<a:brave:794763668831207454> +avatar** = Avatarınıza bakarsınız. \n **<a:brave:794763668831207454> +yetkilerim** = Yetkilerini görürsün. \n **<a:brave:794763668831207454> +profil** = Profilini görürsün. \n **<a:brave:794763668831207454> +sunucuresmi** = Sunucu resmini gösterir. \n **<a:brave:794763668831207454> +ping** = Botun Pingine Bakarsın. \n **<a:brave:794763668831207454> +id** = Birisinin id'sine Bakarsın. \n **<a:brave:794763668831207454> +davet** = Beni Sunucuna Ekle. \n **<a:brave:794763668831207454> +botbilgi** = Bot istatistiklerini görürsünüz. \n **<a:brave:794763668831207454> +bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. \n **<a:brave:794763668831207454> +öneri** = Önerinizi bildirir. \n **<a:brave:794763668831207454> +şikayet** = Şikayetinizi bildirir.")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+kullanıcı'
}