let handler = async (m, { groupMetadata }) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   let nro = (100).getRandom()
   await m.reply(`@${who.split("@")[0]} is ${nro}% check 🏳️‍🌈.`, null, { mentions: [who] })
}

handler.help = ['check']
handler.tags = ['fun']
handler.command = ['check', 'gay']

handler.group = true

export default handler