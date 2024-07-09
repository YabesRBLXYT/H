import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, '🍭 Enter the title of a YouTube video or song.\n\n`Example:`\n' + `> *${usedPrefix + command}* Gemini Aaliyah - If Only`, m)
  try {
    let Sumi = await Scraper.spotifySearch(text)
    let img = await (await fetch(`${Sumi[0].thumbnail}`)).buffer()
    let txt = `╭─⬣「 *Spotify Search* 」⬣\n`
    for (let i = 0; i < Sumi.length; i++) {
      txt += ` │  ≡◦ *🐢 Dream ∙* ${i + 1}\n`
      txt += ` │  ≡◦ *🍭 title ∙* ${Sumi[i].title}\n`
      txt += ` │  ≡◦ *📚 Artist ∙* ${Sumi[i].artist}\n`
      txt += ` │  ≡◦ *⛓ Url ∙* ${Sumi[i].url}\n`
      txt += ` ╰──────────⬣`
      txt += `\n`
    }
    
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
} catch {
}}
handler.help = ['spotifysearch <search>']
handler.tags = ['search']
handler.command = ['spotifysearch']
handler.register = true

export default handler