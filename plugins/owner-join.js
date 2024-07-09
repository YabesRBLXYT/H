let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

if (!text) return m.reply(`🍭 Enter the Group link.`)
let [_, code] = text.match(linkRegex) || []
if (!code) return m.reply('Invalid link.')
let res = await conn.groupAcceptInvite(code)
m.reply(`🍭 I successfully joined the Group *${res}*`)
}
handler.help = ['join <link>']
handler.tags = ['owner']
handler.command = ['join'] 
handler.owner = true

export default handler