import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) return conn.reply(m.chat, '🍭 Enter the title of a YouTube video or song.\n\n`Example:`\n' + `> *${usedPrefix + command}* Gemini Aaliyah - If Only`, m)
    let results = await Scraper.ytsearch(text)
    if (!results || !results.length) return conn.reply(m.chat, `No results found.`, m)
    let img = results[0].thumbnail
    let txt = `╭─⬣「 *YouTube Search* 」⬣\n`
    results.forEach((video, index) => {
        txt += ` │  ≡◦ *🐢 Dream ∙* ${index + 1}\n`
        txt += ` │  ≡◦ *🍭 title ∙* ${video.title}\n`
        txt += ` │  ≡◦ *🕜 Duration ∙* ${video.duration}\n`
        txt += ` │  ≡◦ *🪴 Published ∙* ${video.published}\n`
        txt += ` │  ≡◦ *📚 Author ∙* ${video.author}\n`
        txt += ` │  ≡◦ *⛓ Url ∙* ${video.url}\n`
        txt += ` ╰──────────⬣`
        txt += `\n`
    })
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
}
handler.help = ['ytsearch <search>']
handler.tags = ['search']
handler.command = ['ytsearch', 'yts']
handler.register = true 
export default handler