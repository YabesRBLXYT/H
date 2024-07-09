import fg from 'api-dylux';

let handler = async (message, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `🍭 Example : \n*${usedPrefix + command}* https://x.com/KirbyisGOD_01/status/1794245449676996879?t=vhZCXudvCGyyspZyf3wQEA&s=19`;

  

  try {
    let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0]);
    
    let template = `
┌─⊷ *_𝚃𝚆𝙸𝚃𝚃𝙴𝚁 𝙳𝙻_*
├─🍭 Description : ${desc}
├─ Rabbit Hole 
└────────────────────`;

    conn.sendFile(message.chat, HD, 'twitter.mp4', template, message);
    message.react(done);
  } catch (error) {
    message.reply(`🍭 Check your Twitter link carefully`);
  } 
}

handler.help = ['twitter'].map(command => command + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(twitter|tw)$/i;
handler.diamond = true;

export default handler;