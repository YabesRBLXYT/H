let handler = async (m, { conn, isAdmin, isROwner} ) => {
    if (!(isAdmin || isROwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    let txt = '🍭 Bot active in this group.'   
conn.sendMessage(m.chat, {
text: txt,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/a2858f1cddcc683c072a6.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['unbanchat']
handler.tags = ['group']
handler.command = ['aiunbot', 'unbanchat']
handler.group = true 
export default handler