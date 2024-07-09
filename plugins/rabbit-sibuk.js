import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, `https://telegra.ph/file/e8f7677f4c1775e7cfa24.jpg`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
} 

handler.customPrefix = /^(.sc|sc|@62895392261751|sourcecode|dika|hardika|asuka|filaa|dikaaa|dikaaaa|dikaaaa|Dika|Dikaa|Dikaaa|Dikaaaa|hey|hei|hai|hi|halo|hello|hallo|Heyy)$/i;
handler.command = new RegExp()

export default handler