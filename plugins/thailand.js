let handler = async (m, { conn }) => {
let img = 'https://api.zacros.my.id/asupan/thailand'
    conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.thailand', m)
}
handler.help = ['thailand']
handler.tags = ['internet', 'premium']
handler.command = /^(thailand)$/i

handler.premium = true

module.exports = handler