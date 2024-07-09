let handler = async (m, { conn, isAdmin, isROwner }) => {
    if (!(isAdmin || isROwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    let txt = '🍭 Successfully Banned Chat.'
conn.sendMessage(m.chat, {
text: txt,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/d07a96dbf790c3ffb0717.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['banchat']
handler.tags = ['group']
handler.command = ['banearbot', 'banchat']
handler.group = true 
export default handler