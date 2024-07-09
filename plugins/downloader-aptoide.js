import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('🍭 Enter the name of the application you want to download.\n\n`Example:`\n' + `> *${usedPrefix + command}* WhatsApp`)

try {
let { name, packname, update, size, thumbnail, dl_url } = await Scraper.aptoide(text)
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('The file is more than 300 MB, the download was canceled.')}
let txt = `╭─⬣「 *Aptoide Download* 」⬣\n`
    txt += `│  ≡◦ *🍭 Name ∙* ${name}\n`
    txt += `│  ≡◦ *🪴 Packname ∙* ${packname}\n`
    txt += `│  ≡◦ *⚖ Weight ∙* ${size}\n`
    txt += `│  ≡◦ *🕜 Weight ∙* ${update}\n`
    txt += `╰─⬣`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
await conn.sendMessage(m.chat, {document: { url: dl_url }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: null }, {quoted: m})
} catch {
}}
handler.help = ['aptoide <search>']
handler.tags = ['downloader']
handler.command = ['aptoide', 'apk']
handler.register = true 
//handler.limit = 5
export default handler