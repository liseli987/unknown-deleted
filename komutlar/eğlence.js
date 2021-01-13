const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:dcunicorn:794761549801455676> 𐌞anity Eğlence Komutları ")
 .setTimestamp()
.setDescription(" **<a:brave:794763668831207454> +zarat** =  Zar atmaya ne dersin benim,rekorum 5 gecebilirmisin?. \n **<a:brave:794763668831207454> +kasaaç** =  CsGo kasası açmaya ne dersin?. \n **<a:brave:794763668831207454> +emojiyazı** =  Emojili yazı yazmaya ne dersin?. \n  **<a:brave:794763668831207454> +espiri** =  Sana güzel bi espiri yapmama ne dersin?. \n **<a:brave:794763668831207454> +sor** = Bana soru sormaya ne dersin. \n **<a:brave:794763668831207454> +ara112** = İhtiyacın oldunda kullan ;) \n **<a:brave:794763668831207454> +vine** = Raskele komik paylaşımları görmeye ne dersin..! \n  **<a:brave:794763668831207454> +adamasmaca** = Birlikte bir oyun oynamaya ne dersin **adam asmaca**. \n **<a:brave:794763668831207454> +balıktut** = Birlikte balık tutmaya ne dersin :D?. \n **<a:brave:794763668831207454> +tersyazı** = Bir Yazıyı Bot Ters Yazar. \n **<a:brave:794763668831207454> +mcskin** = Yazdığınız ismin minecraft görünüşünü atar. \n **<a:brave:794763668831207454> +fbi** = Bot FBi Gif Atar. \n **<a:brave:794763668831207454> +token** = Tokenimi Öğrenmek İstemezmisin? \n **<a:brave:794763668831207454> +düello** = Düello Atarsın. \n **<a:brave:794763668831207454> +wasted** = Polis tarafından yakalanırsın. \n **<a:brave:794763668831207454> +atatürk** = Dene ve gör... (1881-1938)  \n **<a:brave:794763668831207454> +yumruk-at** = İstediğin kişinin gafasına yumruk atar ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'+eğlence'
}