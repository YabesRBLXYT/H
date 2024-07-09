import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => './src/https://tinyurl.com/2bdkh6w5')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let fake = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "62895392261751-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ 🍭*Rabbit - Hole* \n│「 Welcome 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Welcome \n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
  await conn.Sumi(m.chat, botname, welcome, img, img, canal, fake)
  }
  
  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ 🍭*Rabbit - Hole* \n│「 Goodbye 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  He went away\n   │✑ We never wanted you here\n   └───────────────┈ ⳹`
  await conn.Sumi(m.chat, botname, bye, img, img, canal, fake)
  }
  
  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★  🍭*Rabbit - Hole*  \n│「 Kick 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  He went away\n   │✑ We never wanted you here\n   └───────────────┈ ⳹`
  await conn.Sumi(m.chat, botname, kick, img, img, canal, fake)
  }
}