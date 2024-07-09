import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let tr = '🍭 Enter your name and age.\n\n`Example:`\n' + `> *${usedPrefix + command}* Sumi.19`
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`🍭 You are already registered.`)
  if (!Reg.test(text)) return m.reply(tr)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply(tr)
  if (!age) return m.reply(tr)
  age = parseInt(age)
  if (age < 5) return m.reply('🚼  there is a baby grandpa jsjsj.')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let img = await (await fetch(`https://tinyurl.com/26l6vgxo`)).buffer()
  let txt = `
╭─⬣「 *User Record* 」⬣\n
│  ≡◦ *🪴 Name ∙* ${name}\n
│  ≡◦ *🐢 Age ∙* ${age} Rabbit Hole\n
╰─⬣`
conn.sendMessage(m.chat, {
text: txt,
contextInfo: {
externalAdReply: {
title: v,
body: ai,
thumbnailUrl: "https://telegra.ph/file/e10c60d81ede48858b6f4.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['reg <name Age>']
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'register', 'daftar'] 

export default handler