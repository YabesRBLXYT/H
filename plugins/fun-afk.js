let handler = async (m, { text, conn }) => {
    let user = db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    await m.reply(`🍭 You are *AFK*, Reason *${text ? ': ' + text : ''}*`)
}
handler.help = ['afk <reason>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = false 

export default handler