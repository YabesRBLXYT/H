import {googleIt} from '@bochilteam/scraper'
import google from 'google-it'
import axios from 'axios'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default;
const text = args.join` `
if (!text) return conn.reply(m.chat, '🍭 Enter what you want to search on Google.', m)
const url = 'https://google.com/search?q=' + encodeURIComponent(text)
google({'query': text}).then(res => {
let teks = `*🔎 Result of* : ${text}\n\n`
for (let g of res) {
teks += `*🍭 title ∙* ${g.title}\n*📚 Info ∙* ${g.snippet}\n*⛓ Url ∙* ${g.link}\n\n`
}
conn.reply(m.chat, teks, m)
})
}
handler.help = ['google <search>']
handler.tags = ['tools', 'search']
handler.command = /^googlef?$/i
handler.register = true 
export default handler