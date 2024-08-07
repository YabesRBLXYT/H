const cooldowns = {}

let handler = async (m) => {
   let user = global.db.data.users[m.sender]
   const tiempoEspera = 24 * 60 * 60 // 24 horas
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    const tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    m.reply(`🕜 Wait *${tiempoRestante}* to Claim again.`)
    return
  }
  
   let claim = `Congratulations 🎉, you claimed *20 🍬 Sweets*.`
   user.limit += 20
   conn.sendMessage(m.chat, {
text: claim,
contextInfo: {
externalAdReply: {
title: v,
body: ai,
thumbnailUrl: "https://telegra.ph/file/d4d8a50d78bc261fbc7a0.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
   cooldowns[m.sender] = Date.now()
}
handler.help = ['claim']
handler.tags = ['rpg']
handler.command = ['daily', 'claim']
handler.register = true 

export default handler

function segundosAHMS(segundos) {
  const horas = Math.floor(segundos / 3600)
  const minutos = Math.floor((segundos % 3600) / 60)
  const segundosRestantes = segundos % 60
  return `${horas} hours, ${minutes} minutes ${segundosRestantes} seconds.`
}