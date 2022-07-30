let handler = async (m, { conn }) => {
let img = 'https://api.zacros.my.id/asupan/indonesia'
    conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.indonesia', m)
}
handler.help = ['indonesia']
handler.tags = ['internet']
handler.command = /^(indonesia)$/i

module.exports = handler