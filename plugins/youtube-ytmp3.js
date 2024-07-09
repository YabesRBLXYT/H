import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('🍭 Enter the YouTube video link next to the command.\n\n`Example:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`)
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `Verify that the link is from YouTube.`, m)

let user = global.db.data.users[m.sender]
try {
let { title, size, quality, thumbnail, dl_url } = await Scraper.ytmp3(args[0])
if (size.includes('GB') || size.replace(' MB', '') > 200) { return await m.reply('The file is more than 200 MB, the download was canceled.')}
let txt = `╭─⬣「 *YouTube Download* 」⬣\n`
    txt += `│  ≡◦ *🍭 title ∙* ${title}\n`
    txt += `│  ≡◦ *🪴 Quality ∙* ${quality}\n`
    txt += `│  ≡◦ *⚖ Weight ∙* ${size}\n`
    txt += `╰─⬣`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp3', `*🍭 title ∙* ${title}\n*🪴 Calidad ∙* ${quality}`, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
} catch {
}}
handler.help = ['ytmp3 <yt url>']
handler.tags = ['downloader']
handler.command = ['ytmp3', 'yta']
handler.register = true 
//handler.limit = 1
export default handler