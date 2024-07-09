import speed from 'performance-now'

let handler = async (m, { conn }) => {
  let thumbnail = 'https://telegra.ph/file/78a5504b5f3c0d7315c7f.jpg'
  let fgg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `Toki-BOT`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'Toki-BOT'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let pingMsg = await conn.sendMessage(m.chat, {text: 'Pinging...'}, {quoted: fgg})

  let timestamp = speed()

 

    let latency = (speed() - timestamp).toFixed(4)

    
          let te =  `🍭Ping! Latency: ${latency} ms` 
  

conn.sendMessage(m.chat, {
text: te,
contextInfo: {
externalAdReply: {
title: v,
body: ai,
thumbnailUrl: "https://telegra.ph/file/24c35a24d77d38a701ab6.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}


handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed'] 

export default handler