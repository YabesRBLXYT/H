import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('🍭 Enter the Mediafire file link next to the command.\n\n`Example:`\n' + `> *${usedPrefix + command}* https://drive.google.com/file/d/1T8U-sFjgamUqq6A9CLJzBONSZoA2D4kd/view?usp=drivesdk`)

try {
let { title, size, type, dl_url } = await Scraper.GDriveDl(args[0])
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('The file is more than 300 MB, the download was canceled.')}
let txt = `╭─⬣「 *GDrive Download* 」⬣\n`
    txt += `│  ≡◦ *🍭 Name ∙* ${title}\n`
    txt += `│  ≡◦ *📚 MimeType ∙* ${type}\n`
    txt += `│  ≡◦ *⚖ Weight ∙* ${size}\n`
    txt += `╰─⬣`
await m.reply(txt)
await conn.sendMessage(m.chat, { document: { url: dl_url }, fileName: title, mimetype: type }, { quoted: m })
} catch {
}}
handler.help = ['gdrive <url gdrive>']
handler.tags = ['downloader']
handler.command = ['gdrive']
handler.register = true
handler.limit = 500
export default handler