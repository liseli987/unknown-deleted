const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:dcunicorn:794761549801455676> 𐌞anity Moderasyon Komutları")
.setDescription("**<a:ayarlarimsi1:794760985973227552> +kayıt-bilgi** = Kayıt için bilgi. \n **<a:ayarlarimsi1:794760985973227552> +taç** = Sunucunun sahibini gösterir. \n **<a:ayarlarimsi1:794760985973227552> +up** = Botunuzun 7/24 yapmak için gerekli bilgi... \n **<a:ayarlarimsi1:794760985973227552> +sil** = Yazdığınız miktarda mesajı siler. \n **<a:ayarlarimsi1:794760985973227552> +ban** = Etiketlediğiniz kişiyi banlarsınız. \n **<a:ayarlarimsi1:794760985973227552> +kick** = Etiketlediğiniz kişiyi atarsınız. \n **<a:ayarlarimsi1:794760985973227552> +duyuru** = Bota duyuru yaptırırsınız. \n **<a:ayarlarimsi1:794760985973227552> +küfür** = Küfür engel sistemini açarsınız. \n **<a:ayarlarimsi1:794760985973227552> +reklam** = Reklam engel sistemi açarsınız. \n **<a:ayarlarimsi1:794760985973227552> +slowmode** = Yavaş modu ayarlarsınız. \n **<a:ayarlarimsi1:794760985973227552> +forceban** = Birisine id ban atarsınız. \n **<a:ayarlarimsi1:794760985973227552> +unban** = Birisinin banını açarsınız. \n **<a:ayarlarimsi1:794760985973227552> +sa-as** = Bot biri sa dedimi cevap verir. \n **<a:ayarlarimsi1:794760985973227552> +sunucubilgi** = Sunucu bilgilerini görürsün. \n **<a:ayarlarimsi1:794760985973227552> +üyedurum** = Üyelerin durumlarını görürsün. \n **<a:ayarlarimsi1:794760985973227552> +çekiliş** = Çekiliş başlatırsınız. ")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+moderasyon'
}