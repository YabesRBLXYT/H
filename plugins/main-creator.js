let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;おAi-Chan🍭;;\nFN:おAi-Chan🍭\nORG:おAi-Chan\nTITLE:\nitem1.TEL;waid=6289528474461:6289528474461\nitem1.X-ABLabel:おAi-Chan\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おAi-Chan\nEND:VCARD`
const sentMsg = await conn.sendMessage(m.chat, {
    contacts: {
      displayName: 'Ai-Chan',
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: '🍭M Y   O W N E R ',
        body: '[!] Not spam contact my owner ‼️',
        thumbnailUrl: 'https://telegra.ph/file/689907010308c841062b8.jpg',
        sourceUrl: ``,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator'] 

export default handler