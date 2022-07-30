let handler = async (m, { conn }) => {
let img = 'https://api.zacros.my.id/asupan/hijaber'
    conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['internet']
handler.command = /^(hijaber)$/i

module.exports = handler