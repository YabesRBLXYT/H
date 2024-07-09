import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Rabbit-Hole Hello open ai chat query text can?`
let ayaka = await fetch(`https://aemt.me/openai?text=${text}`)
let hasil = await ayaka.json()
 let awe = `*♡🍭 Rabbit-hole* : ${hasil.result}`.trim()
    conn.sendMessage(m.chat, {
text: awe,
contextInfo: {
externalAdReply: {
title: 'Rabbit🌸⛩️',
body: v,
thumbnailUrl: "https://telegra.ph/file/0fb887420e312d2451fb6.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['ai', 'openai']
handler.tags = ['main']
handler.command = /^(ai|toki|openai|gpt)$/i
export default handler
//