let handler = async (m, { conn }) => {
let img = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['internet']
handler.command = /^(malaysia)$/i

module.exports = handler