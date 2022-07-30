let handler = async (m, { conn }) => {
let img = 'https://api.zacros.my.id/asupan/japan'
    conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.jepang', m)
}
handler.help = ['jepang']
handler.tags = ['internet', 'premium']
handler.command = /^(jepang)$/i

handler.premium = true

module.exports = handler