let handler = async (m, { conn, args, usedPrefix, command }) => {
   let chat = global.db.data.chats[m.chat] || {}
   if (args[0] === 'on') {
      if (chat.nsfw) return conn.reply(m.chat, 'Nsfw is already activated.', m)
      chat.nsfw = true
      await conn.reply(m.chat, '🍭 Nsfw activated for this Group.', m)
   } else if (args[0] === 'off') {
      if (!chat.nsfw) return conn.reply(m.chat, 'Nsfw is already Deactivated.', m)
      chat.nsfw = false
      await conn.reply(m.chat, '🍭 Nsfw disabled for this Group.', m)
   } else {
      await conn.reply(m.chat, `*Configure Nsfw*. Type on to activate and off to Deactivate.`, m)
   }
}
handler.help = ['nsfw <on/off>']
handler.tags = ['nable']
handler.command = ['nsfw']
handler.use = ['on/off']
handler.group = true 
handler.admin = true

export default handler