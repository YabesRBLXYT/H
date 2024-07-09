import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('🍭 Enter the Instagram video link next to the command.\n\n`Example:`\n' + `> *${usedPrefix + command}* https://www.instagram.com/reel/C4KxLF8rrlL/?igsh=ZGpuc2ttdnJpdjM=`)

try {
let { dl_url } = await Scraper.igdl(args[0])
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: null }, { quoted: m})
} catch {
}}
handler.help = ['instagram <url ig>']
handler.tags = ['downloader']
handler.command = ['ig', 'igdl', 'instagram']
handler.register = true 
//handler.limit = 1
export default handler