const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "   "
    )
    .setThumbnail(
      "https://media.giphy.com/media/2ClX21P8boSKgVYqtc/giphy.gif"
    )
    .setDescription(
      `

**▬▬▬▬▬▬▬[** <a:ayarlarimsi1:794760985973227552>  **Komut Listesi**  <a:ayarlarimsi1:794760985973227552>  **]▬▬▬▬▬▬**

> **<a:brave:794763668831207454> +moderasyon :** Moderasyon komutları görüntüler.
> **<a:brave:794763668831207454> +kullanıcı :** Userler için açık komutlar...
> **<a:brave:794763668831207454> +eğlence :** Sizi biraz eğlendirir.
> **<a:brave:794763668831207454> +eğlence2 :** size güzel komutlarımı göstereyim sizi eğlendirecek...
> **<a:brave:794763668831207454> +logo :** İstediğiniz şekillerde bi logo oluşturabilirsiniz...
> **<a:brave:794763668831207454> +logo2 :** logo2 kamutlarıyla sizlerle...

**▬▬▬▬▬▬▬[** <a:ayarlarimsi1:794760985973227552> **Bilgilendirme** <a:ayarlarimsi1:794760985973227552> **]▬▬▬▬▬▬**

> <a:yesiltik:794763689809936405> **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> <a:ayarlarimsi1:794760985973227552> **Komut hakkında detaylı bilgi için: +yardım**
> <a:hareketlitik2:794706984548040724> **Discord Js Sürümü: 12.4.0**
 

`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "+yardım"
};
