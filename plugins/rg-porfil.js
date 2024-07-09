import { canLevelUp, xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let { exp, limit, name, registered, regTime, age, level } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let txt = `╭─⬣「 *User Profile* 」⬣\n`
     txt += `│  ≡◦ *🪴 Name ∙* ${name}\n`
     txt += `│  ≡◦ *🐢 Age ∙* ${age} Rabbit Hole\n`
     
     txt += `│  ≡◦ *📞 Number ∙* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}\n`
     txt += `│  ≡◦ *🍬 Sweets ∙* ${limit}\n`
     txt += `│  ≡◦ *💫 Experience ∙* Total ${exp} ( *${user.exp - min}/${xp}* )\n`
     txt += `│  ≡◦ *👑 Premium ∙* ${prem ? 'Si' : 'No'}\n`
     txt += `╰─⬣`
await conn.sendFile(m.chat, pp, 'thumbnail.jpg', txt, m)
}
handler.help = ['profile', 'profil @user']
handler.tags = ['rg']
handler.command = ['profil', 'profile']
handler.register = true

export default handler