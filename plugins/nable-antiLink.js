et handler = async (m, { conn, args, usedPrefix, command }) => {
   let chat = global.db.data.chats[m.chat] || {}
   if (args[0] === 'on') {
      if (chat.antiLink) return conn.reply(m.chat, 'antiLink is already activated.', m)
      chat.antiLink = true
      await conn.reply(m.chat, '🍭 Anti-Link activated for this Group.', m)
   } else if (args[0] === 'off') {
      if (!chat.antiLink) return conn.reply(m.chat, 'Anti-Link It is already deactivated.', m)
      chat.antiLink = false
      await conn.reply(m.chat, '🍭 Anti-Link disabled for this Group.', m)
   } else {
      await conn.reply(m.chat, `*Configure Anti-Link*. Type on to activate and off to Deactivate.`, m)
   }
}
handler.help = ['antilink <on/off>']
handler.tags = ['nable']
handler.command = ['antiLink', 'antilink']
handler.use = ['on/off']
handler.group = true 
handler.admin = true

export default handler