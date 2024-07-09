let handler = async (m, { conn, isRowner}) => {
	let _muptime
	let totalreg = Object.keys(global.db.data.users).length
	let totalchats = Object.keys(global.db.data.chats).length
	let pp = 'https://tinyurl.com/ys5umedp'
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
  const used = process.memoryUsage()
  let txt = `╭─⬣「 *Info Bot* 」⬣\n`
      txt += `│  ≡◦ *📚 United Groups ∙* ${groupsIn.length}\n`
      txt += `│  ≡◦ *👤 Private Chats ∙* ${chats.length - groupsIn.length}\n`
      txt += `│  ≡◦ *💬 Total Cats ∙* ${chats.length}\n`
      txt += `│  ≡◦ *🐢 Registered users ∙* ${totalreg}\n`
      txt += `│  ≡◦ *😺 Registered Groups ∙* ${totalchats}\n`
      txt += `│  ≡◦ *🕜 Uptime ∙* ${muptime}\n`
      txt += `╰─⬣`
conn.sendMessage(m.chat, {
text: txt,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/5a292b2512b3fb343f653.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['status']
handler.tags = ['main']
handler.command = /^(info|state|status|uptime)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}