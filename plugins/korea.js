let handler = async (m, { conn }) => {
let img = 'https://api.zacros.my.id/asupan/korea'
    conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.korea', m)
}
handler.help = ['korea']
handler.tags = ['internet', 'premium']
handler.command = /^(korea)$/i

handler.premium = true

module.exports = handler