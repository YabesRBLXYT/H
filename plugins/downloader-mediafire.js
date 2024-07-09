import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('🍭 Enter the Mediafire file link next to the command.\n\n`Example:`\n' + `> *${usedPrefix + command}* https://www.mediafire.com/file/lkvqgk6m0tyv03z/Update%20Script%20no%20enc%F0%9F%94%A5.zip/file?dkey=rokguk0gt5c&r=12`)
if (!args[0].match(/mediafire/gi)) return m.reply('The link must be from a Mediafire file.')
try {
let { title, ext, aploud, size, dl_url } = await Scraper.mediafire(args[0])
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('The file is more than 300 MB, the download was canceled.')}
let txt = `╭─⬣「 *Mediafire Download* 」⬣\n`
    txt += `│  ≡◦ *🍭 Name ∙* ${title}\n`
    txt += `│  ≡◦ *🪴 Uploaded ∙* ${aploud}\n`
    txt += `│  ≡◦ *📚 MimeType ∙* ${ext}\n`
    txt += `│  ≡◦ *⚖ Weight ∙* ${size}\n`
    txt += `╰─⬣`
await m.reply(txt)
await conn.sendFile(m.chat, dl_url, title, null, m, null, { mimetype: ext, asDocument: true })
} catch {
}}
handler.help = ['mediafire <url mf>']
handler.tags = ['downloader']
handler.command = ['mediafire', 'mdfire', 'mf']
handler.register = true 
handler.limit = 500
export default handler