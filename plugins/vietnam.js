let handler = async (m, { conn }) => {
let img = 'https://api.zacros.my.id/asupan/vietnam'
    conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.vietnam', m)
}
handler.help = ['vietnam']
handler.tags = ['internet', 'premium']
handler.command = /^(vietnam)$/i

handler.premium = true

module.exports = handler