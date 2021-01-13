

const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.reply('Yazmam gerekeni unuttun sanırım (: <a:vkirmizitac:795464473976242188> ');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor(0xCC0033)
    .setDescription(`**${mesaj}**`)
    return message.channel.send(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 3
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'


};
 