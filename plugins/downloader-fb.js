import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('🍭 Enter the FaceBook video link next to the command.\n\n`Example:`\n' + `> *${usedPrefix + command}* https://www.facebook.com/share/v/wT42PgteX4t4XE6n/?mibextid=A7sQZp`)

try {
let { title, SD, HD } = await Scraper.fbdl(args[0])
await conn.sendMessage(m.chat, { video: { url: HD || SD }, caption: `*🍭 title ∙* ${title}` }, { quoted: m})
} catch {
}}
handler.help = ['facebook <url fb>']
handler.tags = ['downloader']
handler.command = ['fb', 'fbdl', 'facebookdl', 'facebook']
handler.register = true 
//handler.limit = 1
export default handler