let handler = async (m, { conn }) => {
let img = 'https://api.zacros.my.id/asupan/china'
    conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.china', m)
}
handler.help = ['china']
handler.tags = ['internet', 'premium']
handler.command = /^(china)$/i

handler.premium = true 

module.exports = handler