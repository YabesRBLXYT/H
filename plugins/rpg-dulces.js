let handler = async (m, {conn, usedPrefix}) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   if (who == conn.user.jid) return error 
   if (!(who in global.db.data.users)) return conn.reply(m.chat, 'The user is not found in my database.', m)
   let user = global.db.data.users[who]
   await m.reply(`${who == m.sender ? `Tienes *${user.limit} 🍬 Sweets* in your Wallet`: `The user @${who.split('@')[0]} has *${user.limit} 🍬 Sweets* in your Wallet`}. `, null, { mentions: [who] })
}

handler.help = ['dulces']
handler.tags = ['rpg']
handler.command = ['wallet', 'cartera', 'dulces', 'bal', 'coins']
handler.register = true 
export default handler