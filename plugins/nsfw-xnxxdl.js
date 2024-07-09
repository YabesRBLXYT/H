import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return m.reply(`The group does not support *Nsfw content.*`)
if (!args[0]) return m.reply('🍭 Enter the link of the Xnxx video next to the command.')

let user = global.db.data.users[m.sender]
try {
let { title, duration, quality, dl_url } = await Scraper.xnxxdl(args[0])
let txt = `╭─⬣「 *Xnxx Download* 」⬣\n`
    txt += `│  ≡◦ *🍭 title ∙* ${title}\n`
    txt += `│  ≡◦ *🪴 Quality ∙* ${quality}\n`
    txt += `│  ≡◦ *🕜 Duration ∙* ${duration}\n`
    txt += `╰─⬣`
await m.reply(txt)
await conn.sendFile(m.chat, dl_url, title + '.mp4', `*🍭 title ∙* ${title}\n*🪴 Quality ∙* ${quality}`, m, false, { asDocument: user.useDocument })
} catch {
}}
handler.help = ['xnxxdl <url>']
handler.tags = ['nsfw']
handler.command = ['xnxxdl']
handler.register = true 
handler.group = true 
handler.limit = 500
export default handler