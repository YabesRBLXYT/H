import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return m.reply(`El group does not support content *Nsfw.*`)
if (!text) return m.reply('🍭 Enter the name of the image you are looking for.')
try {
let { dl_url } = await Scraper.rule34(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', null, m)
} catch {
}}
handler.help = ['rule34 <search>']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
handler.register = true 
handler.limit = 20
handler.group = true 
export default handler